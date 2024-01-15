
/* JSX é quando conseguimos colocar o JavaScript e HTML dentro das funções para criar 
   Classes no React, preciso utilizar a tag: className="" e não somente Class="" */

// PARA CRIAR ESTADOS NO REACT, UTILIZAMOS OS HOOKS => FERRAMENTAS AUXILIARES, ex.: useState

// Use ref é utilizado também para colher as informações do input, é mais performática.

// Neste projeto estou utilizando a biblioteca AXIOS para conseguir consumir APIs de outro projeto, assim sincronizando Back-end e Front-end





import React, { useState, useRef, } from 'react';
import { useNavigate } from 'react-router-dom';


import axios from 'axios';

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import H1 from '../../components/title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'

import { Container, Image, InputLabel, Input, } from "./styles";


const App = () => {

  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  const addNewUser = async () => {

    const { data: newUser } = await axios.post('http://localhost:3001/users', {

      name: inputName.current.value,
      age: inputAge.current.value,

    });

    setUsers([...users, newUser]);



  }

  const usersCadastred = () => {

    navigate('./usuarios');
  }


  return (

    <Container>

      <Image alt="logo-imagem" src={People} />

      <ContainerItens>

        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>

        <Button onClick={usersCadastred}>Usuários</Button>


      </ContainerItens>

    </Container>

  );

}

export default App;
