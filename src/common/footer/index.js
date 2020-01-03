import React,{ Component } from "react"
import { Link } from 'react-router-dom';
import { FooterWrapper, Nav, NavItem, NavWrapper } from "./style";


class Footer extends Component{

    render(){
        return (
            <FooterWrapper>
               <NavWrapper>
               <Nav className='right'>
                        <NavItem className='title'>投诉建议</NavItem>
                        <NavItem>意见反馈</NavItem>
                        <NavItem>账号申述</NavItem>
                        <NavItem>智能咨询</NavItem>
                        <NavItem>账号举报</NavItem>
                    </Nav>
                <Nav className='left'>
                        <NavItem className='title'>新手帮助</NavItem>
                        <NavItem>如何答题</NavItem>
                        <NavItem>如何提问</NavItem>
                        <NavItem>获取盈利</NavItem>
                        <NavItem>发布特长</NavItem>
                    </Nav>
                    <Nav className='center'>
                        <NavItem className='title'>玩法介绍</NavItem>
                        <NavItem>希望商城</NavItem>
                        <NavItem>希望团队</NavItem>
                        <NavItem>合伙认证</NavItem>
                        <NavItem>高质回答</NavItem>
                    </Nav>
               </NavWrapper>
            </FooterWrapper>
		);
    }
}

export default Footer;