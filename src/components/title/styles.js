import styled from 'styled-components'

export const H1 = styled.h1`

color: #ffffff;
font-size: 34px;
font-weight: 700;
line-height: 40px;
letter-spacing: 0px;
text-align: center;
font-style: normal;


`;


export const ContainerItens = styled.div`

background: linear-gradient(
    157.44deg,
     rgba(255, 255, 255, 0.6) 0.84%,s
     rgba(255, 255, 255, 0.6) 0.85%, 
     rgba(255, 255, 255, 0.15) 100%);      
     border-radius: 61px 61px 0px 0px;
     backdrop-filter: blur(45px);
      padding: 50px 36px;
      display: flex;
      flex-direction: column;
      height: 100%;
      

${props => props.isBlur && `

backdrop-filter: blur(45px);

`}

`;
