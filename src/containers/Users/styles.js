
/* Para conseguir utilizar o css no React, precisamos sempre baixar uma biblioteca 
 u/tilizando YARN ADD styled-components, depois inserir os códigos abaixo para conseguir conectar
 /ambos (importar e exportar)  projeto iniciado dia 07/12/2023 */

import styled from "styled-components";

import Background from '../../assets/background.svg'


export const Container = styled.div`    
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px; 
    height: 130vh;

`;


export const Image = styled.img`

margin-top: 30px;



`;

export const ContainerItens = styled.div`

background: linear-gradient(
    157.44deg,
     rgba(255, 255, 255, 0.6) 0.84%,
     rgba(255, 255, 255, 0.6) 0.85%, 
     rgba(255, 255, 255, 0.15) 100%);      
     border-radius: 61px 61px 0px 0px;
     backdrop-filter: blur(45px);
      padding: 50px 36px;
      display: flex;
      flex-direction: column;
      height: 100vh;
      

`;


export const H1 = styled.h1`

color: #ffffff;
font-size: 34px;
font-weight: 700;
line-height: 40px;
letter-spacing: 0px;
text-align: center;
font-style: normal;


`;


export const Button = styled.button`
background: transparent;
color: #FFFFFF;
width: 342px;
height: 74px;
border-radius: 14px;
font-size: 17px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0px;
border: 1px solid;
outline: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
margin-top: 125px;


&:hover {
    opacity: 0.8;
}
&:active {
    opacity: 0.5;
}

img {
    transform: rotateY(180deg);
}

`;

export const User = styled.li `

box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
border-radius: 14px;
border: none;
width: 342px;
height: 58px;
outline: none;
margin-top: 20px;
display: flex;
justify-content: space-around;
align-items: center;

Button {
    background:none;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover {
    opacity: 0.8;
}
&:active {
    opacity: 0.5;
}
    
}

P {
    color: #FFFFFf;
    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0px;
}


`


