import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.8);
`;
