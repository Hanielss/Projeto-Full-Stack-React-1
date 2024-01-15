
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
    height: 100%;
    min-height: 100vh;


`;


export const Image = styled.img`

margin-top: 30px;



`;






export const User = styled.li`

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


