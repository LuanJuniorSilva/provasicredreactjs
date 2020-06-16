import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Alert from '../../components/Alert';
import Loader from '../../components/Loader';

import {
  getDragonsRequest,
  deleteDragonRequest,
} from '../../store/modules/dragon/actions';

function Dashboard() {
  const dispatch = useDispatch();
  const { dragons, loading } = useSelector(state => state.dragon);

  useEffect(() => {
    dispatch(getDragonsRequest());
  }, []);

  async function handleDelete(id) {
    dispatch(deleteDragonRequest(id));
  }

  return (
    <>
      {dragons.length === 0 && <Loader />}
      {loading && <Loader />}
      <Header />
      <section>
        <Link to="/formedit">CADASTRAR NOVO DRAGÃO</Link>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Tipo</th>
              <th>História</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {dragons.map(dragon => (
              <tr key={dragon.id}>
                <td>{dragon.id}</td>
                <td>{dragon.name}</td>
                <td>{dragon.type}</td>
                <td>{dragon.history}</td>
                <td>
                  <Link to={`/dragon/${dragon.id}`}>
                    <i className="fas fa-list-alt"></i>
                  </Link>
                  <Link to={`/formedit/${dragon.id}`}>
                    <i className="fas fa-pen"></i>
                  </Link>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() =>
                      Alert(() => {
                        handleDelete(dragon.id);
                      })
                    }
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
