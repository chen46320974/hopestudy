import styled from 'styled-components';

export const PersonWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;
export const Nav = styled.div`
	
`;
export const Node = styled.div`
	width: 120px;
 	padding: 2px 10px;
	fontSize: 14px;
`;
export const NavWrapper = styled.div``;
export const ButtonExtend = styled.div`
	width: 110px;
	float: right;
	 padding: 2px 10px;
	border-radius: 9px;
	border: 1px solid #8fd154;
	fontSize: 14px;
	color: #333;
	background-color: transparent;
	
	&:hover{
		background: #8fd154;
		border: 1px solid #8fd154; 
	}
	&:focus{
		color: #333;
		background-color: transparent;
		border-color: #8fd154; 
	}
`;
