import styled from "styled-components";

export const Container = styled.div`
  height: 365px;
  display: flex;
  background: #373b69;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.div`
  width: 200px;
  color: #ffffff;
  display: flex;
  padding: 15px 18px;
  box-sizing: border-box;

  h5 {
    font-size: 13px;
  }

  span {
    font-size: 13px;
    margin-left: auto;
  }
`;
