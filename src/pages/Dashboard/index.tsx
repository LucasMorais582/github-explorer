import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repositories, Error } from './styles';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [inputError, setinputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if(storagedRepositories) return JSON.parse(storagedRepositories);

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if(!newRepository) {
      setinputError('Digite autor + repositório.');
      return;
    }

    try{
      const response = await api.get<Repository>(`repos/${newRepository}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepository('');
      setinputError('');
    } catch(error){
      setinputError('Autor/repositório não encontrado.');
    }
  }

  return (
    <>
      <img src={ logoImg } alt="Github Explorer"/>
      <Title>Explore Repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
        value={newRepository}
        onChange={e => setNewRepository(e.target.value)}
        placeholder="Digite o nome do repositório"></input>
        <button type="submit"> Pesquisar </button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login}/>
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20}/>
          </Link>
        ))}

      </Repositories>
    </>
  )
}

export default Dashboard;