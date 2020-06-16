import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.jpg';

import { Container, Logo, HeaderWrap, Logout, ContainerLogo } from './styles';

export default function Header({ title, back, isBack }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <>
      <HeaderWrap>
        <Container>
          <ContainerLogo>
            {isBack && (
              <span onClick={() => back()} className="fas fa-angle-left"></span>
            )}
            <Logo>
              <img src={logo} alt="Dragão" />
            </Logo>
          </ContainerLogo>
          <h1>{title}</h1>
          <div>
            Seja bem vindo(a) <strong>{user.name}</strong>
            <Logout onClick={handleSignOut}>SAIR</Logout>
          </div>
        </Container>
      </HeaderWrap>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  back: PropTypes.func,
  isBack: PropTypes.bool,
};

Header.defaultProps = {
  title: 'Dashboard',
  back: () => {},
  isBack: false,
};
