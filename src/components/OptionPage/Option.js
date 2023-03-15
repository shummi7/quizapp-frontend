import React from 'react';
import './Option.css';

class Option extends React.Component{

onStartClick=()=>{
    var form1Elements = document.getElementsByClassName('form1')[0].elements;
    var category='';
    for(var i=0; i<form1Elements.length; i++)
    {
        if(form1Elements[i].checked){
           category = form1Elements[i].value; 
        }
    }

    var form2Elements = document.getElementsByClassName('form2')[0].elements;
    var diff='';
    for(var j=0; j<form2Elements.length; j++)
    {
        if(form2Elements[j].checked){
            diff = form2Elements[j].value;
        }
    }

    if(category === ''){ category ='9'}
    if(diff === ''){ diff = 'easy'}
    if((category === '19' || category === '27') && (diff = 'easy')){ diff = 'medium'}

    this.props.onOptionsChange(category,diff);
    this.props.onRouteChange('quizPage');
}


render(){
    

return(
<div className='option centerVer'>

    <div className='option_category centerVer'>
        <h4>Category</h4>
        <form className='form1 centerHor'>
            <div className='pa3'>
            <input type="radio" name="category" value="17"/>Science<br/><br/>
            <input type="radio" name="category" value="19"/>Mathematics<br/><br/>
            <input type="radio" name="category" value="21"/>Sports<br/> <br/>
            </div>
            <div className='pa3'>
            <input type="radio" name="category" value="23"/>History<br/> <br/>
            <input type="radio" name="category" value="18"/>Computer<br/> <br/>
            <input type="radio" name="category" value="27"/>Animals<br/> <br/>
            </div>
            <div className='pa3'>
            <input type="radio" name="category" value="11"/>Film<br/>  <br/>
            <input type="radio" name="category" value="9"/>General<br/><br/>
            <input type="radio" name="category" value="22"/>Geography<br/><br/>
            </div>
        </form>
    </div>
    
    <div className='option_difficulty centerVer'>
        <h4>Difficulty</h4>
        <form className='form2 pa3'>
        <input type="radio" name="difficulty" value="easy"/>Easy<br/><br/>
        <input type="radio" name="difficulty" value="medium"/>Medium<br/><br/>
        <input type="radio" name="difficulty" value="hard"/>Hard<br/><br/>
        </form>
    </div>
    <button className='start' onClick={this.onStartClick}>Start</button>
    {/* <button className='gotoprofile' onClick={()=>this.props.onRouteChange('profilePage')}>Profile</button> */}
</div>
)
}
}

export default Option;
