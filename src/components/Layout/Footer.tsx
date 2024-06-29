import React from 'react'
import styled from 'styled-components'
import { Yellow_theme } from '../constants/constants'

const Footer = () => {
  return (
    <MainDiv>
        <h1>
         ASSIGNME
        </h1>
        <p>
         All rights reserve to Assignme 2024
        </p>
    </MainDiv>
  )
}

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    border-top: solid ${Yellow_theme} 2px;
    @media screen and (max-width: 900px) {
      height: 80px;
    }
    h1{
        color: ${Yellow_theme};
        font-size: 3rem;
        margin: 1rem;
        @media screen and (max-width: 900px) {
          font-size: 1.5rem;
      }
    }
    p{
        color: #565858;
        margin: 1rem;
        @media screen and (max-width: 900px) {
          font-size: .5rem;
      }
    }

`

export default Footer
