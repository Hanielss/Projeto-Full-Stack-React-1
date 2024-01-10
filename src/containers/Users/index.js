
/* JSX é quando conseguimos colocar o JavaScript e HTML dentro das funções para criar 
   Classes no React, preciso utilizar a tag: className="" e não somente Class="" */

// PARA CRIAR ESTADOS NO REACT, UTILIZAMOS OS HOOKS => FERRAMENTAS AUXILIARES, ex.: useState

// Use ref é utilizado também para colher as informações do input, é mais performática.

// Neste projeto estou utilizando a biblioteca AXIOS para conseguir consumir APIs de outro projeto, assim sincronizando Back-end e Front-end





import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'


import { Container, H1, Image, ContainerItens, Button, User } from "./styles";


const Users = () => {


  const [users, setUsers] = useState([]);


  useEffect(() => {

    async function fetchUsers() {

      const { data: newUser } = await axios.get("http://localhost:3001/users");

      setUsers(newUser);
      
    }

    fetchUsers()


  }, [],)

  // REACT HOOK => useEffect é utilizado quando minha aplicação inicia (quando a página carrega)
  // Também é chamado quando um estado que está no array de dependencia do useEffect é alterado



  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers)

  }

  return (

    <Container>

      <Image alt="logo-imagem" src={Avatar} />

      <ContainerItens>

        <H1>Usuários</H1>


        <ul>

          {users.map((user) => (

            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)} ><img src={Trash} alt="lata-de-lixo"></img></button>

            </User>

          ))}

        </ul>

        <Button>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>


      </ContainerItens>

    </Container>

  );

 
}

export default Users;
