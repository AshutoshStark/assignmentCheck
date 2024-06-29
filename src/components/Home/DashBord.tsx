import { useUser } from '@clerk/clerk-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { White_theme } from '../constants/constants'
import { Button } from '../../shared/UI/Button'
import UploadPdf from './UploadPdf'
import Checked from './Checked'

const DashBord = () => {

  const user = useUser()


  return (
    <MainDiv>
      <div className='control'>
        <Heading>
        Welcome {user?.user?.firstName} 👋
      </Heading>
      {/* <Button onClick={()=>{setUpload(upload === false ? true : false)}}>
          {upload === false ? "Upload Assignment" : "Checked Assignments"}
      </Button> */}
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
