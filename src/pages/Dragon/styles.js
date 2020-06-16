import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 80%;
  padding: 20px;
  margin: 30px auto;

  div {
    max-width: 650px;
    width: 100%;
    border: 2px dashed rgba(0, 0, 0, 0.4);
    margin: auto;
    padding: 20px;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.9);

    h2,
    h3 {
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;
    }

    p {
      text-indent: 20px;
      line-height: 1.9;
      text-align: justify;
    }
  }
`;
