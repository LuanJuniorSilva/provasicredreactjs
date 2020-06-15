import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { getDragonsRequest } from '../../store/modules/dragon/actions';

function Dashboard() {
  const dispatch = useDispatch();
  const { dragons } = useSelector(state => state.dragon);

  useEffect(() => {
    dispatch(getDragonsRequest());
  }, []);

  console.log('dragons', dragons);

  return (
    <>
      <Header />
      <section>
        <Link to="/createDragon">CADASTRAR NOVO DRAGÃO</Link>

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
                  <Link>
                    <i class="far fa-list-alt"></i>
                  </Link>
                  <Link>
                    <i class="fas fa-pen"></i>
                  </Link>
                  <Link>
                    <i class="fas fa-trash-alt"></i>
                  </Link>
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
