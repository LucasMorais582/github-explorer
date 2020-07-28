import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRouteMatch, Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
    <Header>
      <img src={ logoImg } alt="Github Explorer"/>
      <Link to="/">
        <FiChevronLeft size={16}/>
        Voltar
      </Link>
    </Header>

    <RepositoryInfo>
      <header>
        <img src="https://avatars1.githubusercontent.com/u/23035256?s=460&u=40a8e8342b00bef5657a18d2c4c551940becf897&v=4" alt="Lucas Lindo"/>
          <div>
            <strong>Lucas Lindo</strong>
            <p>Descrição</p>
        </div>
      </header>
      <ul>
        <li>
          <strong>1000</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>1000</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>1000</strong>
          <span>Issues Abertas</span>
        </li>
      </ul>
    </RepositoryInfo>

    <Issues>
      <Link key={} to={``}>
        <div>
          <strong>{}</strong>
          <p>{}</p>
        </div>
        <FiChevronRight size={20}/>
      </Link>
    </Issues>
    </>
  );
}

export default Repository;