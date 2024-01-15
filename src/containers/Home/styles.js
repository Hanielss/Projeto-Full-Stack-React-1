
/* Para conseguir utilizar o css no React, precisamos sempre baixar uma biblioteca 
 u/tilizando YARN ADD styled-components, depois inserir os códigos abaixo para conseguir conectar
 /ambos (importar e exportar)  projeto iniciado dia 07/12/2023 */

import styled from "styled-components";

import Background from '../../assets/background1.svg'


export const Container = styled.div`    
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px; 
    height: 100%;
    min-height: 100vh;

`;


export const Image = styled.img`

margin-top: 30px;



`;





export const InputLabel = styled.p`

font-size: 18px;
font-weight: bold;
line-height: 22px;
letter-spacing: -0.408px;
text-align: left;
color: #eeeeee;
font-style: normal;
margin-left: 25px;


`;

export const Input = styled.input`
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF40;
border-radius: 14px;
border: none;
width: 342px;
height: 58px;
outline: none;
padding-left: 25px;
margin-bottom: 34px;
font-size: 20px;
font-weight: normal;
font-style: normal;
line-height: 28px;
color: #FFFFFF;


`;







