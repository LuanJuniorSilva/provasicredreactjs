import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { apiDefault } from '../../services/api';
import historyRoute from '../../services/history';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

import logo from '../../assets/logo.jpg';

function FormEdit() {
  const { id } = useParams();
  const routerHistory = useHistory();

  const [inputName, setName] = useState('');
  const [inputType, setType] = useState('');
  const [inputHistory, setHistory] = useState('');
  const [dragon, setDragon] = useState('');

  useEffect(() => {
    async function loadDragon() {
      const response = await apiDefault.get(`/${id}`);

      setDragon(response.data);
    }

    if (id) {
      loadDragon();
    }
  }, [id]);

  useEffect(() => {
    setName(dragon.name);
    setType(dragon.type);
    setHistory(dragon.history);
  }, [dragon]);

  async function handleSubmit({ name, type, history }) {
    if (id) {
      await apiDefault.put(`/${id}`, {
        name,
        type,
        history,
      });
    } else {
      await apiDefault.post(null, {
        name,
        type,
        history,
      });
    }

    historyRoute.push('/dashboard');
  }

  return (
    <>
      <Header
        title={`${id ? 'Editar Dragão' : 'Cadastrar Dragão'}`}
        isBack
        back={() => {
          routerHistory.goBack();
        }}
      />
      <Container>
        <img src={logo} alt="Dragão" />
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Nome"
            value={inputName}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="text"
            name="type"
            placeholder="Tipo"
            value={inputType}
            onChange={e => setType(e.target.value)}
          />
          <Input
            name="history"
            multiline
            placeholder="História"
            value={inputHistory}
            onChange={e => setHistory(e.target.value)}
          />
          <button type="submit">{`${
            id ? 'Editar Dragão' : 'Cadastrar Dragão'
          }`}</button>
        </Form>
      </Container>

      <Footer />
    </>
  );
}

export default FormEdit;
