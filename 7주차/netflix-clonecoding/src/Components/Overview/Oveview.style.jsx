import styled from "styled-components";

export const Overview = styled.div`
    padding: 15px;
    background: rgba(0,0,0,0.5);
    color: grey;
    position:absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
`;

export const overviewText = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical
`;