import React,{ Component } from "react"
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import {HeaderWrapper,
        Nav,
        NavItem,
        Addition,
        Logo,
        LoginWrapper,
        LoginItemWrapper,
        LoginLabel,
        LoginInput,
        ButtonExtend
        } from "./style"

class Header extends Component{

    state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

    render(){
        return (
            <HeaderWrapper>
            <Link to='/'>
                <Logo/>
            </Link>
            <Nav>
                <NavItem className='left'>
                    <Link to='/question'>
                        线上提问
                    </Link>
                </NavItem>
                <NavItem className='left'>
                    <Link to='/facetoface'>
                        面对面辅导
                    </Link>
                </NavItem>
                <NavItem className='left'>
                    <Link to='/download'>
                        下载App
                    </Link>
                </NavItem>
                <NavItem className='left'>
                    <Link to='/person'>
                        个人中心
                    </Link>
                </NavItem>
            </Nav>
            <Addition>
            <ButtonExtend type="primary" onClick={this.showModal}>
                    登录
                </ButtonExtend>
                <Modal
                    title="登录页面"
                    
                    okText="确认"
                    cancelText="取消"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <LoginWrapper>
                        <LoginItemWrapper><LoginLabel>用户名:</LoginLabel><LoginInput></LoginInput>
                        </LoginItemWrapper>
                        <LoginItemWrapper><LoginLabel>密码:</LoginLabel><LoginInput></LoginInput>
                        </LoginItemWrapper>
                    </LoginWrapper>
                </Modal>
            </Addition>
        </HeaderWrapper>
		);
    }
}

export default Header;