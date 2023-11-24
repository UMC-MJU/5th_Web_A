import styled from "styled-components";
import { Overview } from "../Overview/Oveview.style";

export const Movie = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    img {
        vertical-align: bottom;
        width: 100%;
        height: 90%;
    }

    &:hover {
        cursor: pointer;
        ${Overview} {
          display: block;
        }
      }
`;

export const movieInfo = styled.div`
    background-color: #383C66;
    color:white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 10%;

    h5 {
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 5px;
    }

    .vote {
        vertical-align: top;
    }
`;