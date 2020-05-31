/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Navigation,
  ProjectList,
} from './styles';

interface Project {
  id: string;
  code: string;
  description: string;
  client: string;
  order_code: string;
  status: string;
}

function getSituation(i: number) {
  let status = '';

  switch (i) {
    case 0:
      status = 'aberto';
      break;
    case 1:
      status = 'liberado';
      break;
    case 2:
      status = 'finalizado';
      break;
    case 3:
      status = 'faturado';
      break;
    case 4:
      status = 'encerrado';
      break;
    case 5:
      status = 'cancelado';
      break;
    default:
      status = '';
  }

  return status;
}

const Project: React.FC = () => {
  const { signOut } = useAuth();

  const [projects, setProjects] = useState<Project[] | null>(() => {
    const storageProjects = localStorage.getItem('@TorreNegra:projects');

    if (storageProjects) {
      return JSON.parse(storageProjects);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@TorreNegra:projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    const token = localStorage.getItem('@TorreNegra:token');

    api.get('/projects', { params: token }).then((response) => {
      for (const project in response.data) {
        response.data[project].client = JSON.stringify(
          response.data[project].client.trading_name,
        );
        response.data[project].client = response.data[project].client.replace(
          /"/g,
          '',
        );
        response.data[project].status = getSituation(
          response.data[project].status,
        );
      }

      setProjects(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="Torre Negra" />

          <Profile>
            <div>
              <span>Bem-vindo,</span>
              <strong>Chico Rocha</strong>
            </div>
          </Profile>

          <Navigation>
            <Link to="/users">Usuários</Link>
            <Link to="/clients">Clientes</Link>
            <Link to="/">Apontamentos</Link>
            <Link to="/">Relatórios</Link>
          </Navigation>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <h2>Projetos</h2>
      {projects && (
        <ProjectList>
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <ul>
                <li>
                  <div>
                    <p>código</p>
                    <strong>{project.code}</strong>
                  </div>
                  <div>
                    <p>descrição</p>
                    <strong>{project.description}</strong>
                  </div>
                  <div>
                    <p>cliente</p>
                    <strong>{project.client}</strong>
                  </div>
                  <div>
                    <p>pedido</p>
                    <strong>{project.order_code}</strong>
                  </div>
                  <div>
                    <p>situação</p>
                    <strong>{project.status}</strong>
                  </div>
                </li>
              </ul>
              <FiChevronRight size={20} />
            </Link>
          ))}
        </ProjectList>
      )}
    </Container>
  );
};

export default Project;
