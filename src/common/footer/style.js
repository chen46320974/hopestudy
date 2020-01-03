import styled from 'styled-components';

export const FooterWrapper = styled.div`
	overflow: hidden;
		width: 960px;
		height: 180px;
		background: #ddd;
		margin: 0 auto;
`;

export const NavWrapper = styled.div`
	height: 100%;
	display: inline;
`;
export const Nav = styled.ul`
	width: 200px;
	margin: 10px auto;
	&.left {
		float: left;
		padding: 0 40px;
	}
	&.right{
		float: right;
		padding: 0 40px;
	}
	padding: 0 40px;
`;
export const NavItem = styled.li`
	display: block;
	line-height: 25px;
	padding-top: 6px;
	text-align: center;
	color: #666666;
	font-family: SimHei;
	&.title{
		font-size: 20px;
		padding-bottom: 5px;
	}
`;
