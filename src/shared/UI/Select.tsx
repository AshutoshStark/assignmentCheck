import styled from "styled-components";
import { Yellow_theme } from "../../components/constants/constants";


export const Select = styled.select`
color: gray;
width: 20vw;
border-radius: 50px;
background: rgba( 53, 22, 108, 0.75 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
box-shadow:  5px 5px 16px #271050,-5px -5px 16px #35166c;
padding: 1rem;
margin: 1rem;
border: none;
font-size: 1rem;
display: flex;
align-items: center;
@media screen and (max-width: 900px) {
  width: 55vw;
}
`
export const Option = styled.option`

width: 20vw;
border-radius: 50px;
background: rgba( 53, 22, 108, 0.75 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
box-shadow:  5px 5px 16px #271050,-5px -5px 16px #35166c;
padding: 1rem;
margin: 1rem;
border: none;
color: ${Yellow_theme};
font-size: 1rem;

`