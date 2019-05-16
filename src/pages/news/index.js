import React, { Component } from "react";
import { formatMessage, FormattedMessage } from "umi/locale";
import { connect } from "dva";
import {Carousel,List, Avatar } from "antd";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import styles from './index.less'

@connect(({news,loading}) => ({
   news,
  loading: loading.effects["news/fetch"]
}))



export default class news extends Component {
  state = {
     banner:[],
     list:[]
  };

  componentDidMount(type, params) {
    const { dispatch } = this.props;
    dispatch({
      type: "news/fetch",
      payload: {
        type,
        ...params
      }
    });
  }
  componentWillUnmount() {

  }

 onChange=()=>{

 }

  render() {
    const {
      dispatch,
      loading,
      news:{list,slide}
    } = this.props;
    console.log(list)
    return (
      <div>
          <Carousel afterChange={this.onChange} autoplay className={styles.slide}>
            {
              slide.map((item,i)=>{
                 return (
                  <div key={i} className={styles.div}>
                    <img src={item.img} className={styles.img} width="100%"/>
                    <h3>{item.description}</h3>
                 </div>
                  )
              })
            }
           </Carousel>
          
            <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={item => (
            <List.Item>
            <List.Item.Meta
            avatar={<Avatar src={item.cover} />}
            title={<a href={item.url}>{item.title}</a>}
            description={item.description}
                />
              </List.Item>
            )}
          />
          </div>
    );
  }
}