import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: #ddd;
  height: 100%;

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > a {
      display: block;
      background-color: #0000ff;
      color: #fff;
      padding: 20px;
      border-radius: 5px;
      margin-top: 20px;
      margin-bottom: 20px;
      transition: background 0.02s ease-in-out;
      font-weight: 800;

      &:hover {
        background-color: ${darken(0.03, '#0000ff')};
      }
    }

    table {
      th {
        background-color: #000;
        color: #fff;
        padding: 8px;
      }

      td {
        text-align: center;
      }

      th:nth-child(1) {
        width: 70px;
      }

      th:nth-child(2) {
        width: 190px;
      }

      th:nth-child(3) {
        width: 150px;
      }

      th:nth-child(4) {
        width: 220px;
      }

      td {
        padding: 15px;
      }

      td > a {
        display: inline-block;
        font-size: 18px;
        margin-left: 10px;

        &:active {
          color: #000;
        }
      }

      td > a:nth-child(1) {
        color: ${darken(0.2, '#00ff00')};
      }

      td > a:nth-child(2) {
        color: ${darken(0.1, '#0000ff')};
      }

      td > a:nth-child(3) {
        color: ${darken(0.1, '#ff0000')};
      }
    }
  }
`;
