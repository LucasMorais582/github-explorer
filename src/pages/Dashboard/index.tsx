import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={ logoImg } alt="Github Explorer"/>
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório"></input>
        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/23035256?s=460&u=40a8e8342b00bef5657a18d2c4c551940becf897&v=4"
            alt="Lucas Morais"/>
          <div>
            <strong>Repositório do Lucão</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20}/>
        </a>

        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/23035256?s=460&u=40a8e8342b00bef5657a18d2c4c551940becf897&v=4"
            alt="Lucas Morais"/>
          <div>
            <strong>Repositório do Lucão</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20}/>
        </a>

        <a href="teste">
          <img src="https://avatars1.githubusercontent.com/u/23035256?s=460&u=40a8e8342b00bef5657a18d2c4c551940becf897&v=4"
            alt="Lucas Morais"/>
          <div>
            <strong>Repositório do Lucão</strong>
            <p>Descrição do repositório</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;