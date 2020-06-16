import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { apiDefault } from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

function Dragon() {
  const { id } = useParams();
  const historyRouter = useHistory();
  const [dragon, setDragon] = useState();

  useEffect(() => {
    async function loadDragon() {
      const response = await apiDefault.get(`/${id}`);

      setDragon(response.data);
    }

    loadDragon();
  }, [id]);

  return (
    <>
      <Header
        title="Detalhes do Dragão"
        isBack
        back={() => {
          historyRouter.goBack();
        }}
      />
      <Container>
        <div>
          <h2>{dragon?.name}</h2>
          <h3>Tipo: {dragon?.type}</h3>
          <p>{dragon?.history}</p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Dragon;
