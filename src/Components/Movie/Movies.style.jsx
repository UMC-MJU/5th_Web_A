import styled from 'styled-components';

export const AppContainer = styled.div`
	position: relative;
	display: flex;
	flex-basis: 0;
	flex-wrap: wrap;
	justify-content: center;
	font-size: 10px;
	text-align: center;
	margin: 15px;
`;

export const MovieContainer = styled.div`
	position: relative;
	width: 180px;
	height: 350px;
	margin: 12px;
	margin-left: 4px;
	background-color: #353968;
	color: white;
	border-radius: 5px;
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;


export const MovieDetails = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%
	height: 100%
	background-color: black;
	opacity: 0.6;
	display: flex;
	flex-direction: column;
	align-items: center;
	pedding: 10px;
	visibility: hidden;
	opacity: 0;
	transition: visibility 0s, opacity 0.3s;
	font-size: 10px;

	${MovieContainer}:hover & {
		visibility: visible;
		background-color: black;
		height: 100%;
		opacity: 0.6;
`;

export const MovieImg = styled.img`
	max-width: 100%;
`;

export const MovieTitle = styled.h4`
	color: white;
	font-size: 13px;
`;

export const MovieVoteaverage = styled.p`
    margin: 1px;
	font-size: 11px;
	color: white;
`;

export const MovieOverview = styled.p`
	font-size: 10px;
	color: white;
    margin: 8px;
`;

