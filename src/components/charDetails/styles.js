import styled from 'styled-components';

const CharDetailsBlock = styled.div`
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;

	h4{
		margin-bottom: 20px;
		text-align: center;
	}
`;

const Term = styled.span`
    font-weight: bold;
`

const SelectedError = styled.span`
    color: #fff;
    text-align: center;
    font-size: 26px;
`

export {CharDetailsBlock, Term, SelectedError}
