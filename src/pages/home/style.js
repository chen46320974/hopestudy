import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`;

export const BannerWrapper = styled.div`
	height: 400px;
	background: #eee;
	margin: 0;
	padding: 0; 	  
	 &.a {
		text-decoration: none;
	  }
`;
export const FloorOneWrapper = styled.div`
	height: 350px;
	text-align:center;
	
`;
export const NavWrapper = styled.div`
	height: 100%;
	display: inline;
`;
export const Navigator = styled.div`
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

export const Title = styled.h2`
    display: block;
	line-height: 25px;
	padding-top: 6px;
	text-align: center;
	color: #666666;
	font-family: SimHei;
	
	}
`;

export const FloorTwoWrapper  = styled.div`
	height: 350px;background: #eee;
	
	text-align:center;
	
`;
export const Text = styled.p`
display: block;
font-size:1em;
line-height: 35px;
padding-top: 6px;
text-align: center;
color: #666666;
font-family: SimHei;

`;

export const FloorThreeWrapper  = styled.div`
	height: 350px;
	text-align:center;
	
`;
export const Image  = styled.div`
display: block;
font-size:1em;
line-height: 35px;
padding-top: 6px;

float:left;
`;
export const FaceWarpper = styled.p`
`;

export const FloorFourWrapper  = styled.div`
	height: 350px;
	background: #eee;
	
`;
