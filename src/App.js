import React, { Component } from 'react';
import Card from './Card'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      correct: 0,
      incorrect: 0,
      time: 15,
      question: null,
      answer: null
    }
  }

  componentDidMount() {
    this.newQuestion();
  }

  checkAnswer(e) {
    // enter pressed
    if (e.which === 13) {
      let answer = parseInt(e.target.value, 10)
      e.target.value = null;
      if (answer === this.state.answer)
        this.handleSuccess()
      else
        this.handleFailure()
    } 
  }

  handleSuccess() {
    this.setState({ correct: this.state.correct + 1 })
    this.newQuestion();
  }

  handleFailure() {
    this.setState({ incorrect: this.state.incorrect + 1 })
    this.newQuestion();
  }

  newQuestion() {
    // random numbers between 1 and 12
    let x = Math.floor(Math.random() * 12) + 1;
    let y = Math.floor(Math.random() * 12) + 1;

    let coinToss = (Math.floor(Math.random()) + 1) === 0 ? true : false;
    let answer = coinToss ? (x / y) : (x * y);
    let operator = coinToss ? '/' : 'x';

    this.setState({
      question: x.toString() + ' ' + operator + ' ' + y.toString() + ' =',
      answer: answer 
    })
    return 
  }
  
  render() {
    return (
      <div className='App'>
        <h1 className='Title'>Math Flash Cards</h1>
        <Card
          question={this.state.question}
          time={this.state.time}
          correct={this.state.correct}
          incorrect={this.state.incorrect}
          onFailure={this.handleFailure.bind(this)}
          onSubmit={this.checkAnswer.bind(this)}
        />
      </div>
    );
  }
}

export default App;
