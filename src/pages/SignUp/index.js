import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.jpg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Dragão" />

      <form>
        <input type="text" name="name" placeholder="Seu nome" />
        <input type="email" name="email" placeholder="Seu e-mail" />
        <input type="password" name="password" placeholder="Sua senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho Login</Link>
      </form>
    </>
  );
}
