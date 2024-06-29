import React, { useState } from 'react'
import styled from 'styled-components'
import { API_URL, White_theme, Yellow_theme } from '../constants/constants';
import { Document, Page, pdfjs } from 'react-pdf';
import { Input } from '../../shared/UI/InputField';
import { Button } from '../../shared/UI/Button';
import axios from 'axios';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UploadPdf = ({user,id}:{user:any,id:any}) => {

  const [marks,setMarks] = useState<any>()
  const User = useUser()
  const navigate = useNavigate()

  const updatePdf =async()=>{
    await axios.put(`${API_URL}/file/check?Id=${id}`,{
        marks:marks,
    })
    await axios.put(`${API_URL}/teacher/addpoints?teacherId=${User?.user?.primaryEmailAddress?.emailAddress}`,{
      points:10,
    })
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Welcome ${user?.user?.firstName} to ASSIGNME`,
      color:`${Yellow_theme}`,
      showConfirmButton: false,
      timer: 1500
    })
    navigate("/")
  }


  return (
    <MainDiv>
      <div className='input'>
      <Input placeholder='marks' onChange={(e)=>setMarks(e.target.value)}/>
      <Button onClick={()=>updatePdf()}>
        Submit
      </Button>
      </div>
      <div className='pdf'>
      <iframe src={user}/>
      </div>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  color: ${White_theme};
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .input{
    width: 30vw;
    height: 50vh;    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 900px) {
      height: 20vh;
      justify-content: center;
      width: 80vw;
  }
  }
  .pdf{
    width: 60vw;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 1rem;
    iframe{
      height: 70vh;
      width: 30vw;
      @media screen and (max-width: 900px) {
      height: 70vh;
      justify-content: center;
      width: 80vw;
  }
    }
    @media screen and (max-width: 900px) {
      height: 40vh;
      justify-content: center;
      width: 30vw;
  }
  }
`

export default UploadPdf
