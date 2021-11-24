import React, { Component } from "react";

export class ArticleList extends Component {
  // constructor(){
  //     super()
  //     this.state={
  //         storageArticles:[]
  //     }
  // }

  render() {
    let storageArr = JSON.parse(localStorage.getItem("articleDataArr"));
    return (
      <div>
        <article id="1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
          laudantium veniam aut magnam est quod, eligendi doloribus laboriosam
          iste facere, libero optio dicta exercitationem delectus sequi ex fugit
          temporibus.
        </article>
        <article id="2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
          laudantium veniam aut magnam est quod, eligendi doloribus laboriosam
          iste facere, libero optio dicta exercitationem delectus sequi ex fugit
          temporibus.
        </article>
        <article id="32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
          laudantium veniam aut magnam est quod, eligendi doloribus laboriosam
          iste facere, libero optio dicta exercitationem delectus sequi ex fugit
          temporibus.
        </article>
        {localStorage.getItem("articleDataArr")&&
        storageArr.map((data,index) => {
          return (
            <article key={"artcle" + index} style={{color:"red"}}>
              {data}
            </article>
          );
        })}
        {/* {this.props.role === "admin" ? (
          <>
            
            {this.props.articleListArr.map((data,index) => {
              return (
                <article key={"artcle"+index}>
                  {data}
                  <span>-------------------------</span>
                </article>
              );
            })}
          </>
        ) : (
          'I"m fatima'
        )} */}
      </div>
    );
  }
}

export default ArticleList;
