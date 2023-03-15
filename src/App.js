import React, { Component } from 'react';
import './App.css';

import QuizQueAns  from './components/QuizPage/QuizQueAns';
import Option from './components/OptionPage/Option';
import Profile from './components/ProfilePage/Profile';
import Signin from './components/SigninPage/Signin';
import Register from './components/RegisterPage/Register';

class App extends Component {

  constructor(){
    super();
    this.state={
      email:'',
      route:'signinPage',
      category:'',
      difficulty:'',
      quiz:{},
      profile:{
        // name:'',
        // animals:'',
        // sports:'',
        // history:'',
        // geogrpahy:'',
        // mathematics:'',
        // computer:'',
        // general:'',
        // film:'',
        // science:''
      }
    }
  }

  setUserEmail=(userEmail)=>{
    // console.log(userEmail);
    this.setState({email:userEmail});
  }

  onRouteChange=(routeName)=>{
    switch(routeName){
      case 'signinPage': this.setState({route: routeName});break;
      case 'registerPage': this.setState({route: routeName});break;
      case 'optionPage': this.setState({route: routeName});break;
      case 'quizPage': this.setState({route: routeName});break;
      case 'profilePage': this.setState({route: routeName});break;
      default: return(false);
    }
  }

  onOptionsChange=(user_category, user_diff)=>{
    this.setState({category:user_category});
    this.setState({difficulty:user_diff});
  }
  
  updateQuiz=(quiz_details)=>{
    this.setState({quiz:quiz_details});
  }

  updateProfile=(score_details)=>{
    this.setState({profile:score_details});
  }


render() {
return (
<div className='app_size'>
  
  <h1 className='logo pa3'>QUIZ GAME</h1>

  {(() => {
    switch (this.state.route) {
    case "signinPage":return(
                          <div>
                          <Signin 
                          onRouteChange={this.onRouteChange}
                          setUserEmail={this.setUserEmail}  
                          />
                          </div>
                          );

    case "registerPage":return(
                          <div>
                          <Register
                          onRouteChange={this.onRouteChange}
                          setUserEmail={this.setUserEmail}   
                          />
                          </div>
                          );
    
    case "profilePage":return(
                          <div>
                          <Profile
                          profile={this.state.profile}
                          onRouteChange={this.onRouteChange}
                          />
                          </div>
                          );

    case "optionPage":return(
                          <div className='option_Page'>
                          <Option 
                          onRouteChange={this.onRouteChange}
                          onOptionsChange={this.onOptionsChange}/>
                          </div>
                          );

    case "quizPage": return(
                          <div className='quiz_Page'>
                          <QuizQueAns
                          category={this.state.category}
                          difficulty={this.state.difficulty}
                          email={this.state.email}
                          updateQuiz={this.updateQuiz}  
                          updateProfile={this.updateProfile}
                          quiz={this.state.quiz}
                          onRouteChange={this.onRouteChange}
                          />
                          </div>
                          );

    default: return <div>Loading</div>;
    }
  })()}

</div>
);
}
}

export default App;
