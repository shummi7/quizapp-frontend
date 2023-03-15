import React from 'react';
import './Register.css';

class Register extends React.Component{
    
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:''
        }
    }

    nameInputChange = (event) =>{
        this.setState({name:event.target.value});
    }

    emailInputChange = (event) =>{ 
        this.setState({email:event.target.value});
    }

    passwordInputChange = (event) =>{
        this.setState({password:event.target.value});
    }

    onRegisterClick = () =>{
        // fetch(' https://shummi-quiz-app-api.herokuapp.com/register', {
        //     method:'post',
        //     headers:{'Content-Type':'application/json'},
        //     body: JSON.stringify({
        //         name:this.state.name,
        //         email:this.state.email,
        //         password:this.state.password
        //     })            
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if(data.id){
        //         // console.log(data);
        //         this.props.onRouteChange('optionPage');
        //         this.props.setUserEmail(data.email);
        //     }
        // })
    }

    hi=()=>{
        // console.log('Sign-in');
    }


render(){
return(
<div>
    <main className="black-80 centerVer">
    <form className="measure center centerVer">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f3 w-100 fw6 ph0 mh0 centerHor">Register</legend>
        
        <div className="mt3">
            <label className="db fw6 lh-copy f6" >Name</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"
            onChange={this.nameInputChange}/>
        </div>

        <div className="mt3">
            <label className="db fw6 lh-copy f6" >Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.emailInputChange}/>
        </div>

        <div className="mv3">
            <label className="db fw6 lh-copy f6">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.passwordInputChange}/>
        </div>
        </fieldset>

        <div className="">
        <input className="sbutton white grow pointer"
        onClick={this.onRegisterClick} onChange={this.hi} value='Register'/>
        </div>
    </form>
    </main>
</div>
);
}
}

export default Register;