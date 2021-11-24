import React, { Component } from 'react'
import AdminPage from './AdminPage'
import UserPage from './UserPage' 

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            isAuthenticated:false,
            role:"0",
            ourUsers:[{name:"yaser",password:"123456",role:"1"},{name:"fatima",password:"123456",role:"0"},{name:"haneen",password:"123456",role:"1"}]
        }
    }
  
    handleChange=(e  ,   attr)=>{
        this.setState({
            [attr]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let userInputUsername=e.target.username.value;
        let userInputPassword=e.target.password.value;
        
        let ourUsersArray=this.state.ourUsers;
        ourUsersArray.forEach(data=> {
            if(data.name===userInputUsername && data.password===userInputPassword){
               this.setState({
                isAuthenticated:true,
                role:data.role
               }) 
            }
        })
    }
    render() {
        let welcomeUser=this.state.isAuthenticated? <h1>Hello {this.state.username}</h1>:'';//<h1>You are not a user</h1>
        return (
            <div>
                {this.state.isAuthenticated===false?
                <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" id="username" onChange={(e)=>{this.handleChange(e,"username")}}/><br/>
                    {this.state.username.length<5 ?<p style={{color:"red"}}>username must be 5 characters at least</p>:''}

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"onChange={(e)=>{this.handleChange(e,"password")}} /><br/>
                    {this.state.password.length<5 ?<p style={{color:"red"}}>Password must be 5 characters at least</p>:''}
                    {(this.state.password.length<5||this.state.username.length<5)? '':<button type="submit" name="btn">Login</button>}
                    {welcomeUser}

                </form>
                </>
                :
                this.state.role==="0"?<div><UserPage/></div>:<div><AdminPage/></div>
                
                }
            </div>
        )
    }
}

export default HomePage
