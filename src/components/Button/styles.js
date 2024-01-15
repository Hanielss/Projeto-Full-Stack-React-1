import styled from 'styled-components'


export const Button = styled.button`
margin-top: 115px;
background: ${props => props.isBack ? 'transparent' : '#000000CC'} ;
color: #FFFFFF;
width: 342px;
height: 74px;
border-radius: 14px;
font-size: 17px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0px;
border: ${props => props.isBack ? '1px solid #ffffff' : 'none'};
outline: none;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;

&:hover {
    opacity: 0.8;
}
&:active {
    opacity: 0.5;
}

img {

    transform: ${props => props.isBack && 'rotateY(180deg)' } ;
}

`;