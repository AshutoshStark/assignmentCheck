import React, { useState } from 'react'
import { Option, Select } from '../../shared/UI/Select'
import { Button } from '../../shared/UI/Button';
import axios from 'axios';
import { API_URL, Yellow_theme } from '../constants/constants';
import { useUser } from '@clerk/clerk-react';
import Swal from 'sweetalert2';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FormTeacher = () => {
    
    const [subject,setSubject] = useState<any>();
    const user = useUser();
     const navigate = useNavigate()

    const UpdateTeacher =async()=>{
      if(user){
        return await axios.post(`${API_URL}/teacher/addTeacher`,{
          teacherName:user?.user?.firstName,
          teacherMail:user?.user?.primaryEmailAddress?.emailAddress,
          subject:subject,
        }).then((res)=>Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Welcome ${user?.user?.firstName} to ASSIGNME`,
          color:`${Yellow_theme}`,
          showConfirmButton: false,
          timer: 1500
        }))
      }
      navigate('/')
    }

  return (
    <MainDiv>

    <Select name='subject' onChange={(e)=>setSubject(e.target.value)}>
        <Option value={''} hidden> Subject </Option>
        <Option value={"DBMS"}>
          DBMS
        </Option>
        <Option value={"DAA"}>
          DAA
        </Option>
        <Option value={"DSA"}>
          DSA
        </Option>
        <Option value={"Microprocessor"}>
        Microprocessor
        </Option>
        <Option value={"Javascript"}>
          Javascript
        </Option>
       </Select>

      <Button onClick={()=>UpdateTeacher()}>
        Submit
      </Button>
    </MainDiv>
  )
}

const MainDiv = styled.div`
  
`

export default FormTeacher
