import React from "react";
import "./QuizQueAns.css";

class QuizQueAns extends React.Component {
  constructor() {
    super();
    this.state = {
      quizArray: [],
      category: "",
      question: "",
      correctAnswer: "",
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      index: 0,
      score: 0,
      right: 0,
      wrong: 0,
    };
  }

  componentDidMount() {
    const category = this.props.category;
    const difficulty = this.props.difficulty;

    // console.log(category, difficulty);

    if (category === "17" || category === "22") {
      document.getElementById("queAnsSection").style.background = "#9BCC41";
    }
    if (category === "21" || category === "11") {
      document.getElementById("queAnsSection").style.background = "#CC3F0C";
    }
    if (category === "23" || category === "27") {
      document.getElementById("queAnsSection").style.background = "#F4C93A";
    }

    document.getElementById("answerResult").style.display = "none";

    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    )
      .then((response) => response.json())
      .then((data) => {
        var quizArray = [];
        var length = data.results.length;

        for (var i = 0; i < length; i++) {
          var quizObject = {};
          quizObject.category = data.results[i].category;
          quizObject.question = data.results[i].question;
          quizObject.correct_answer = data.results[i].correct_answer;
          quizObject.incorrect_answers = data.results[i].incorrect_answers;

          quizArray.push(quizObject);
        }
        this.setState({ quizArray: quizArray });
        // console.log(this.state.quizArray);
        this.onQuestionAnswerLoad(0);
      });
  }

  onQuestionAnswerLoad = (index_arg) => {
    var index = index_arg;

    var decode_entities = (function () {
      var element = document.createElement("div");
      function decode_HTML_entities(str) {
        if (str && typeof str === "string") {
          str = escape(str)
            .replace(/%26/g, "&")
            .replace(/%23/g, "#")
            .replace(/%3B/g, ";");
          element.innerHTML = str;
          if (element.innerText) {
            str = element.innerText;
            element.innerText = "";
          } else {
            str = element.textContent;
            element.textContent = "";
          }
        }
        return unescape(str);
      }
      return decode_HTML_entities;
    })();

    const category = decode_entities(this.state.quizArray[index].category);
    const quizQue = decode_entities(this.state.quizArray[index].question);
    const correctAns = decode_entities(
      this.state.quizArray[index].correct_answer
    );
    const wrongAns = this.state.quizArray[index].incorrect_answers;

    this.setState({ category: category });
    // console.log(category);
    this.setState({ question: quizQue });
    this.setState({ correctAnswer: correctAns });

    const answers = [];

    answers.push(decode_entities(wrongAns[0]));
    answers.push(decode_entities(wrongAns[1]));
    answers.push(correctAns);
    answers.push(decode_entities(wrongAns[2]));

    var shuffle = function (array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    };

    const shuffledAnswers = shuffle(answers);

    this.setState({ answer1: shuffledAnswers[0] });
    this.setState({ answer2: shuffledAnswers[1] });
    this.setState({ answer3: shuffledAnswers[2] });
    this.setState({ answer4: shuffledAnswers[3] });

    for (var i = 1; i <= 4; i++) {
      var id_name = "bu" + i;
      document.getElementById(id_name).disabled = false;
    }
  };

  buttonClick = (id) => {
    for (var i = 1; i <= 4; i++) {
      var id_name = "bu" + i;
      document.getElementById(id_name).disabled = true;
    }
    var chosenAns = document.getElementById(id).innerText;
    if (chosenAns === this.state.correctAnswer) {
      // console.log("Right");
      var score = this.state.score + 150;
      this.setState({ score: score });
      var right = this.state.right + 1;
      this.setState({ right: right });
    } else {
      var wrong = this.state.wrong + 1;
      this.setState({ wrong: wrong });
      // console.log("Wrong");
    }

    var index = this.state.index;
    var indexInc = index + 1;

    if (index < 9) {
      this.setState({ index: indexInc });
      this.onQuestionAnswerLoad(indexInc);
    } else {
        if(localStorage.getItem(this.props.category)){
            let pastScore=parseInt(localStorage.getItem(this.props.category));
            localStorage.setItem(this.props.category,this.state.score+pastScore);
        }else{
            localStorage.setItem(this.props.category,this.state.score);
        }
      
        this.props.updateProfile(this.props.category);
      document.getElementById("answerResult").style.display = "";

      // console.log(localStorage);
    //   console.log(this.props.email);
    //   console.log(this.state.score);
    //   console.log(this.state.category);

      // fetch('https://shummi-quiz-app-api.herokuapp.com/score', {
      //     method: 'post',
      //     headers: {'Content-Type':'application/json'},
      //     body:JSON.stringify({
      //         category:this.state.category,
      //         email:this.props.email,
      //         score: this.state.score
      //     })
      // })
      // .then(response => response.json())
      // .then(data => {
      //     console.log(data);
      //     this.props.updateProfile(data);
      // })
    }
  };

  render() {
    const num = this.state.index + 1;
    return (
      <div>
        <div className="head">
          <p className="category">{this.state.category}</p>
        </div>

        <div id="queAnsSection" className="queAnsSection">
          <div id="num">
            <p className="level">{num}</p>
          </div>

          <div className="question centerHor">
            <p>{this.state.question}</p>
          </div>

          <div id="answerResult" className="answerResult">
            <p>SCORE</p>
            <p>
              Right Answers: <span>{this.state.right}</span>
            </p>
            <p>
              Wrong Answers: <span>{this.state.wrong}</span>
            </p>
            <p>{this.state.score}</p>
            <button
              className="restart"
              onClick={() => this.props.onRouteChange("optionPage")}
            >
              Restart
            </button>
            <button onClick={() => this.props.onRouteChange("profilePage")}>
              Profile
            </button>
          </div>

          <div className="answers">
            <div className="centerHor items">
              <button
                className="button"
                id="bu1"
                onClick={() => this.buttonClick("bu1")}
              >
                {this.state.answer1}
              </button>
              <button
                className="button"
                id="bu2"
                onClick={() => this.buttonClick("bu2")}
              >
                {this.state.answer2}
              </button>
            </div>

            <div className="centerHor items">
              <button
                className="button"
                id="bu3"
                onClick={() => this.buttonClick("bu3")}
              >
                {this.state.answer3}
              </button>
              <button
                className="button"
                id="bu4"
                onClick={() => this.buttonClick("bu4")}
              >
                {this.state.answer4}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizQueAns;
