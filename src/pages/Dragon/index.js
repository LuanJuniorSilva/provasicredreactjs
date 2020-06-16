import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Router, Route, useHistory } from 'react-router-dom';

import { getDragonRequest } from '../../store/modules/dragon/actions';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

function Dragon() {
  const dispatch = useDispatch();
  const { dragon } = useSelector(state => state.dragon);
  const { id } = useParams();
  const historyRouter = useHistory();

  useEffect(() => {
    dispatch(getDragonRequest(id));
  }, []);

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
          <h2>{dragon.name}</h2>
          <h3>Tipo: {dragon.type}</h3>
          <p>{dragon.history}</p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Dragon;
