import styled from 'styled-components';
import logoPic from '../../statics/logo192.png';
import { Button } from 'antd';

export const HeaderWrapper = styled.div`
	z-index: 1;
	position: relative;
	height: 56px;
	border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic}) no-repeat;
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 70px;
	box-sizing: border-box;
	margin: 0 auto;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
    font-size: 17px;
    a{
        text-decoration: none;
        color: #333;
    }
    a:hover{
        color: #8fd154;
    }
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
`;

export const Addition = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	height: 56px;
`;

//styled(Button)：这里使用了样式的继承 继承Button在Antd 的样式 
//下面是新添加的样式 会产生叠加
export const ButtonExtend = styled(Button)`
	margin-top:9px;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	border-radius: 19px;
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


export const LoginWrapper = styled.div`
	width: 300px;
	margin: 0 auto;
`;

export const LoginItemWrapper = styled.div`
	padding:10px 0;
`;

export const LoginLabel = styled.label`
	display: inline-block;
	width: 80px;
	font-size: 14px;
	text-align: 14px;
`;

export const LoginInput = styled.input`
	width:180px;
	margin-left: 30px;
	font-size: 14px;
`;
