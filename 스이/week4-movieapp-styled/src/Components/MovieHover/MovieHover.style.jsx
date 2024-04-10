import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 200px;
  height: 365px;

  div {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: #c4c1c1;
  }

  h5 {
    font-size: 13px;
    padding: 18px 0;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 17;
    -webkit-box-orient: vertical;
    font-size: 12px;
  }
`;
