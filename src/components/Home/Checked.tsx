import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../shared/UI/Button'
import { MdRefresh } from "react-icons/md";
import axios from 'axios';
import { API_URL, White_theme } from '../constants/constants';
import UploadPdf from './UploadPdf';


const Checked = ({user}:{user:any}) => {

  const [details,setDetails] = useState<any>();
  const [res,setRes]= useState<any>()
  const [upload,setUpload] = useState<boolean>(false)
  const [url,setURL] = useState<any>();
  const [id,setId] = useState<any>();

  const getAssignment =async()=>{
    await axios.get(`${API_URL}/teacher/getTeacherById?userId=${user?.user?.primaryEmailAddress?.emailAddress}`).then((res)=>{
      setRes(res.data?.imageViews)
    })
    await axios.get(`${API_URL}/file/getFilesBySub?subject=${res?.subject}`).then((response)=>{
      setDetails(response?.data)
    })
  }

  const setPDF =(url:any,id:any)=>{
    setURL(url)
    setId(id)
    setUpload(true)
  }
  
  useEffect(()=>{
    getAssignment()
  },[details === undefined ? res : ''])

  const time=(time:string)=>{

    var a = new Date(time)
    const d = new Date();
    var text = d.toISOString();
    var b = new Date(text)
    var c = b.getTime()-a.getTime()

    let seconds = (c / 1000).toFixed(1);
    let minutes = (c / (1000 * 60)).toFixed(1);
    let hours = (c / (1000 * 60 * 60)).toFixed(1);
    let days = (c / (1000 * 60 * 60 * 24)).toFixed(1);
    if (Number(seconds) < 60) return seconds + " Sec";
    else if (Number(minutes) < 60) return minutes + " Min";
    else if (Number(hours) < 24) return hours + " Hrs";
    else return days + " Days"

  }



  
  return (
   <MainDiv>
    { upload === true &&
      <Button onClick={()=>setUpload(false)}>
        Back
      </Button>
    }
      {upload === false && <table className='fixed_header'>
        <thead>
          <tr>
            <th>
              Student Name              
            </th>
            <th>
              Title
            </th>
            <th>
              Status
            </th>
            <th>
              Marks
            </th>
            <th>
              <Button onClick={(e)=>getAssignment()}>
              <MdRefresh/> Refresh
              </Button>
            </th>
          </tr>
        </thead>
          <tbody>
        {details?.fileUpload?.map((item:any,index:any)=>(
          
          <tr>
              <td>
                {item?.uploaderName}
              </td>
              <td>
                {item?.fileTitle}
              </td>
              <td>
                {item.checked === true ?"checked" : "unchecked" }
              </td>
              <td>
                {item.marks ? item.marks : "not assigned yet"}
              </td>
             {time(item.createdAt) && <td>
                <Button onClick={()=>setPDF(item?.fileURL,item?._id)}>
                  Open
                </Button>
              </td>}
              </tr>
            ))
        }
        </tbody>
      </table>}
      {upload === true && <UploadPdf user={url} id={id} res={res}/>}
   </MainDiv>
  )
}

const MainDiv = styled.div`
  .fixed_header {
        width: 51.1vw;
        table-layout: fixed;
        border-collapse: collapse;
        @media screen and (max-width: 900px) {
          width: 91.5vw;
          font-size: 15px;
      }
      }
      .fixed_header tbody {
        display: block;
        width: 50vw;
        overflow: auto;
        background: #282920;
        box-shadow: 0 8px 32px 0 #2829207d;
        backdrop-filter: blur( 9px );
        -webkit-backdrop-filter: blur( 9px );
        border-radius: 0 0 10px 10px;
        border: 1px solid #282920;
        padding: .5rem;
        overflow-x: hidden;
        @media screen and (max-width: 900px) {
          width: 87vw;
      }
      }
      .fixed_header thead tr {
        display: block;
      }
      .fixed_header thead {
        color: ${White_theme};
        background: #4a5e13;
        box-shadow:  2px 2px 6px #3a5010,-2px -2px 6px #4e6c16;
        border-radius: 10px;
      }
      .fixed_header th{
        padding: 1rem;
        text-align: left;
        width: 200px;
        color: ${White_theme};
        @media screen and (max-width: 900px) {
          padding: 5px;
      }
    }
    .fixed_header td {
      padding: 1rem;
      text-align: left;
      width: 120px;
      color: ${White_theme};
      @media screen and (max-width: 900px) {
        padding: 5px;
        width: 10px;
    }
      }
`

export default Checked
