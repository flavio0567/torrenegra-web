/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';

import { Header, ProjectList } from './styles';

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

const Dashboard: React.FC = () => {
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
        response.data[project].status = getSituation(
          response.data[project].status,
        );
      }

      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Torre Negra" />
        <Link to="/users">Users</Link>
        <Link to="/clients">Clients</Link>
      </Header>
      <div>
        <strong>Chico Rocha</strong>
      </div>
      <h2>Dashboard</h2>
      {projects && (
        <ProjectList>
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <div>
                <strong>{project.code}</strong>
                <strong>{project.description}</strong>
                <strong>{project.client}</strong>
                <p>{project.order_code}</p>
                <p>{project.status}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))}
        </ProjectList>
      )}
      <Button onClick={signOut}>
        <FiChevronLeft />
        Sair
      </Button>
    </>
  );
};

export default Dashboard;
