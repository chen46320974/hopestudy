import React,{ Component } from "react"
import { Link } from 'react-router-dom';
import { PersonWrapper ,Node,NavWrapper,Nav,ButtonExtend} from "./style"
import {Tabs, Menu, Dropdown, Icon } from 'antd';

const { TabPane } = Tabs;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">昵称：咕咕</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">性别：女</a>
      </Menu.Item>
      
      <Menu.Item key="3">年龄：18</Menu.Item>
      <Menu.Item key="4">生日：8月25</Menu.Item>
      <Menu.Item key="5">所在地：四川成都</Menu.Item>
    </Menu>
  );
class Person extends Component{

    render(){
        return (
         <PersonWrapper>
             个人中心
             <NavWrapper className="user clearfix">
					<Nav className="photo"><img src={require("./../../statics/banner/5.jpg")} /></Nav>
                    <Node>
                        <p>咕咕</p>
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#"> 查看详情资料 <Icon type="down" /></a>                                    
                    </Dropdown>
                    </Node>
					
                    <ButtonExtend type="primary" onClick={this.showModal}> 编辑个人资料</ButtonExtend> 
                    <div className="card-container">
                      <Tabs type="card">
                        <TabPane tab="动态0" key="1">
                          <p>Content of Tab Pane 1</p>
                          <p>Content of Tab Pane 1</p>
                          <p>Content of Tab Pane 1</p>
                        </TabPane>
                        <TabPane tab="回复" key="2">
                          <p>Content of Tab Pane 1</p>
                          <p>Content of Tab Pane 1</p>
                          <p>Content of Tab Pane 1</p> 
                          </TabPane>
                        <TabPane tab="提问3" key="3">
                          <p>Content of Tab Pane 3</p>
                          <p>Content of Tab Pane 3</p>
                          <p>Content of Tab Pane 3</p>
                        </TabPane>
                        <TabPane tab="消息1" key="4">
                          <p>Content of Tab Pane 4</p>
                          <p>Content of Tab Pane 4</p>
                          <p>Content of Tab Pane 4</p>
                        </TabPane>
     
     
                        </Tabs>
                     </div>
               
			</NavWrapper>
         </PersonWrapper>
		);
    }
}

export default Person;