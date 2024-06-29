import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import DashBord from '../components/Home/DashBord'

const Home = () => {

  return (
    <Layout>
      <MainDiv>
       <DashBord/>
      </MainDiv>
    </Layout>
  )
}

const MainDiv = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
`

export default Home
