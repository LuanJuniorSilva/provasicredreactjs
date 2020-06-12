import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.jpg';

import { Container, Logo, HeaderWrap, Logout } from './styles';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  console.log(user);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <HeaderWrap>
        <Container>
          <Logo>
            <img src={logo} alt="Dragão" />
          </Logo>
          <h1>Dashboard</h1>
          <div>
            Seja bem vindo(a) <strong>{user.name}</strong>
            <Logout onClick={handleSignOut}>SAIR</Logout>
          </div>
        </Container>
      </HeaderWrap>
    </>
  );
}

export default Header;
