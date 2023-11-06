import styled from "styled-components";

export const App_container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
`;

export const Background_color = styled.div`
  background-color: rgb(54, 54, 202);
  margin: 0 auto;
  padding: 20px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Border = styled.div`
  border: 1px solid black;
  border: none;
  background-color: rgb(45, 45, 151);
  position: relative;
`;

export const Image_container = styled.div`
  position: relative;
  &:hover .overview{
     opacity :1
  }
`;

export const Overview = styled.div`
  position: absolute;
  top: 0;
  font-size: 10px;
  bottom: 0;
  width: 100%;
  opacity: 0;
  background-color: rgba(39, 38, 38, 0.5);
  color: aliceblue;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export const Title = styled.p`
  font-weight: bold;
  color: white;
  font-size: 13px;
`;

export const Vote_average = styled.p`
  font-weight: bold;
  color: white;
  font-size: 13px;
`;

