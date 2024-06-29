import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import styled from 'styled-components'

const Navbar = () => {

  return (
    <MainDiv>
      <Heading>
        ASSIGNME
      </Heading>
      <Heading>
        <UserButton/>
      </Heading>
    </MainDiv>
  )
}

export const Heading = styled.h1`
  color: #b9e202;
  margin: 1rem;
`

export const MainDiv = styled.div`
height: 10vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: solid #b9e202 1px;
@media screen and (max-width: 900px) {
  overflow: hidden;
  }
nav{
  width: 80vw;
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media screen and (max-width: 900px) {
    gap: 0;
    align-items: center;
    width: 40vw;
  }
}
a{
  text-decoration:none;
  font-size: 20px;
  font-weight: 300;
  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
}
.activeLink{
  color:#bee800 ;
  border-bottom: solid 2px #c5f003;
}
.notActiveLink{
  color:white;
}


`

export default Navbar
