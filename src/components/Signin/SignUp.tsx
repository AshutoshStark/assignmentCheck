import { SignIn, useAuth, useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Home from '../../pages/Home'
import FormTeacher from '../Form/Form'
import axios from 'axios'
import { API_URL } from '../constants/constants'


const SignInPage = () => {

    const {isSignedIn} = useAuth()
    const user = useUser();
    const [res,setRes]= useState<any>()
  
    const getTeacher =async()=>{
      return await axios.get(`${API_URL}/teacher/getTeacherById?userId=${user?.user?.primaryEmailAddress?.emailAddress}`).then((res)=>{
        setRes(res.data)
      })
    }
  
    useEffect(()=>{
      getTeacher()
    },[user])
  return (
    <MainDiv>
        {
             res?.imageViews !== null && <Home/>
        }
        {
            ((isSignedIn)?<FormTeacher/> : <SignIn/>)
        }
    </MainDiv>
  )
}

const MainDiv = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default SignInPage
