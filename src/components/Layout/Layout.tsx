import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children} : {children:React.ReactNode}) => {
  return (
    <Container>
        <Navbar/>
        {children}
        <Footer/>
    </Container>
  )
}

const Container = styled.div`
    /* width: 100vw; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
`
export default Layout
