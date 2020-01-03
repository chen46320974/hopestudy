import React,{ Component ,Fragment} from "react"
import ReactDOM from 'react-dom';
import { Carousel } from 'antd';
import {FaceWarpper,Image, Navigator,Text,NavWrapper, Title,HomeWrapper, BannerWrapper, FloorOneWrapper, FloorTwoWrapper, FloorThreeWrapper, FloorFourWrapper, NavItem } from "./style"
import Slider from "./../../common/banner/Slider"
import "../../common/banner/style.css"

import img from "../../statics/book.jpg"
var propsObj = {
  items: [
      {
          src: require("./../../statics/banner/1.jpg"),
          alt: "img-1"
      },
      {
          src: require("./../../statics/banner/2.jpg"),
          alt: "img-2"
      },
      {
          src: require("./../../statics/banner/3.jpg"),
          alt: "img-3"
      },
      {
          src: require("./../../statics/banner/8.jpg"),
          alt: "img-4"
      }
  ],
  dots: true,
  arrows: true,
  interval: 2000
}

 
class Home extends Component{
    constructor(props) {
        super(props);
      }
  
    render(){
        return (
            
          <HomeWrapper>
              <BannerWrapper >
                <Slider {...propsObj}/>
              </BannerWrapper>
              <FloorOneWrapper>             
                <h2>客户服务</h2>               
                   <NavWrapper>
                    <Navigator className='right'>
                    <img src={require("./../../statics/banner/6.jpg")} />    
                    <Title>以客为始</Title>
                    <p>倾听客户的声音，尊重客户的需求，满足客户的向往为宗旨。</p> 
                    </Navigator>
                    <Navigator className='left'>
                    <img src={require("./../../statics/banner/6.jpg")} /> 
                    <Title>待客至诚</Title>
                    <p>倾听客户的声音，尊重客户的需求，满足客户的向往为宗旨。</p> 
                    </Navigator>
                    <Navigator className='center'>
                    <img src={require("./../../statics/banner/5.jpg")} /> 
                    <Title>持续改善</Title>
                     <p>倾听客户的声音，尊重客户的需求，满足客户的向往为宗旨。</p> 
                     </Navigator>
                     </NavWrapper>
              </FloorOneWrapper>
              <FloorTwoWrapper>
              
                 <h2>线上提问</h2>
                 
             <Text> 
              <Title>线上解决各种学习上的问题</Title>
              
              <p1>解决大学生必修课的相关问题</p1>
              <br/>
              <p1>有任何学习上的问题随时提问</p1>
              <br/>
              <p1>提升专业能力，学习更多专业知识</p1>
              <br/>
              <p1>同学之间相互帮助，形成良好的学习氛围</p1>
              <br/>
              <p1>咨询考研，证书，英语四·六级等相关信息</p1>
              </Text>
              
              </FloorTwoWrapper>
              <FloorThreeWrapper>
                  <h2>一对一辅导</h2>
                  <Image>
                  <img src={require("./../../statics/banner/7.jpg")} />  
                  </Image>
                  <FaceWarpper>
                  <Title>线下一对一辅导学生解决难题</Title>
                      <p>期末针对性辅导，降低学生挂科率</p>
                      <br/>
                      <p>方便学生学习某项技能，全方面提升自我能力</p>
                      <br/>
                      <p>真正做到物尽其用，人尽其才，发挥个人才能</p>
                      <br/>
                      <p>寻求专业能力优异的同学帮助自己提升专业能力</p>
                  </FaceWarpper>
              </FloorThreeWrapper>
              <FloorFourWrapper>
                  <h2>优秀希望人</h2>
                  <NavWrapper>
                    <Navigator className='right'>
                    <img src={require("./../../statics/banner/6.jpg")} />    
                    <Title>张三</Title>
                    <p>西南交通大学希望学院优秀人。</p> 
                    </Navigator>
                    <Navigator className='left'>
                    <img src={require("./../../statics/banner/6.jpg")} /> 
                    <Title>李四</Title>
                    <p>西南交通大学希望学院优秀人。</p> 
                    </Navigator>
                    <Navigator className='center'>
                    <img src={require("./../../statics/banner/5.jpg")} /> 
                    <Title>王五</Title>
                     <p>西南交通大学希望学院优秀人。</p> 
                     </Navigator>
                     </NavWrapper>
              </FloorFourWrapper>
          </HomeWrapper>
		);
    }
}
export default Home;