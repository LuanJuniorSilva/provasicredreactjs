import styled from 'styled-components';

export const HeaderWrap = styled.header`
  background-color: #000;
  height: 90px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  max-width: 80%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .fa-angle-left {
    font-size: 30px;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  max-width: 70px;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
  }
`;

export const Logout = styled.button`
  border: none;
  background-color: transparent;
  color: #ccc;
  margin-left: 10px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #fff;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
`;
