import React from 'react';
import './Profile.css';

class Profile extends React.Component{
    constructor(){
        super();
        this.state={
            name:'guest',
            categoryNumber:[17,19,21,23,18,27,11,9,22],
            score:[0,0,0,0,0,0,0,0,0] 
        }
    }

    componentDidMount(){
        let scoreS = [];
        for(let i=0;i<this.state.categoryNumber.length;i++){

            let num = this.state.categoryNumber[i];
            if(localStorage.getItem(num)){
                scoreS[i]=localStorage.getItem(num);
            }
            else{
                scoreS[i]=0;
            }
        }
        this.setState({score:scoreS});
    }
    

render(){
return(
<div className='profile'>
    <h1>Hello, {this.state.name}</h1>
    <div>
        <p><span className='span'>Science</span> <span>{this.state.score[0]}</span></p>
        <p><span className='span'>Mathematics</span> <span>{this.state.score[1]}</span></p>
        <p><span className='span'>Sports</span> <span>{this.state.score[2]}</span></p>
        <p><span className='span'>History</span> <span>{this.state.score[3]}</span></p>
        <p><span className='span'>Computer</span> <span>{this.state.score[4]}</span></p>
        <p><span className='span'>Animals</span> <span>{this.state.score[5]}</span></p>
        <p><span className='span'>Film</span> <span>{this.state.score[6]}</span></p>
        <p><span className='span'>General</span> <span>{this.state.score[7]}</span></p>
        <p><span className='span'>Geography</span> <span>{this.state.score[8]}</span></p>
    </div>
    <button className='restart' onClick={()=>this.props.onRouteChange('optionPage')}>Restart</button>
</div>
);
}
}

export default Profile;