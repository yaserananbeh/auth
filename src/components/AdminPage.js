import React, { Component } from "react";
import ArticleList from "./ArticleList";

export class AdminPage extends Component {
    constructor(props){
        super(props)
        this.state={
            articleListArr:[]

        }
    }
    addArticleFunc=()=>{
        let articleContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ducimus quaerat facere recusandae laudantium exercitationem sunt dolorem iusto libero. Repudiandae facilis voluptatum debitis velit, officia sequi unde id in eligendi."; 
        
        let newArr=this.state.articleListArr;
        newArr=JSON.parse(localStorage.getItem("articleDataArr"));
        newArr.push(articleContent)
        this.setState({
            articleListArr:newArr
        })
        localStorage.setItem("articleDataArr",JSON.stringify(newArr))        
    }
  render() {
    return (
      <div>
        <ArticleList role="admin" articleListArr={this.state.articleListArr} />

        <button onClick={this.addArticleFunc}>Add</button>
      </div>
    );
  }
}

export default AdminPage;
