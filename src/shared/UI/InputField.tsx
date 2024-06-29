import styled from "styled-components"
import { Yellow_theme } from "../../components/constants/constants"


export const Input = styled.input`

background-color: #2D292E;
border: solid #494849 1px;
padding: 10px;
color: #f5f5f5f5;
border-radius: 10px;
font-size: 1.2rem;
font-family: "Raleway", sans-serif;
font-optical-sizing: auto;
font-weight: 200;
font-style: normal;
width: 40vh;

:hover{
    border: solid #f2ffba 1px;
}
:focus{
    background-color: #343435;
    border: solid ${Yellow_theme} 1px;
    outline: none;
}
` 