import { useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { API_URL, White_theme } from '../constants/constants'
import { Button } from '../../shared/UI/Button'
import UploadPdf from './UploadPdf'
import Checked from './Checked'
import axios from 'axios'

const DashBord = () => {

  const user = useUser()
  const [res,setRes]= useState<any>()
  
    const getTeacher =async()=>{
      return await axios.get(`${API_URL}/teacher/getTeacherById?userId=${user?.user?.primaryEmailAddress?.emailAddress}`).then((res)=>{
        setRes(res.data)
      })
    }
  
    useEffect(()=>{
      getTeacher()
    },[])

  return (
    <MainDiv>
      <div className='control'>
        <Heading>
        Welcome {user?.user?.firstName} 👋
      </Heading>
      <Button>
        Points - {res?.imageViews?.points}
      </Button>
      </div>
   <Checked user={user}/>
      
    </MainDiv>
  )
}

const MainDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: hidden;
  overflow-x: hidden;
  .control{
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0 2rem 0;
  }
`
const Heading = styled.div`
  color: ${White_theme};
  font-size: 2rem;
  margin: 1rem;
  top: 0;
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
`

export default DashBord
