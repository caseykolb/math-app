import React, { Component } from 'react';
import Card from './Card'
import Milestones from './Milestones'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      correct: 0,
      incorrect: 0,
      time: 15,
      question: null,
      answer: null,
      milestones: [],
      highScore: 0,
    }

    this.milestones = [500, 1000, 5000, 10000, 20000, 50000]

    this.handleFailure = this.handleFailure.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
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
    this.setState({ 
      correct: this.state.correct + 1,
      time: (this.state.time > 3) ? this.state.time - 1 : this.state.time,
    }, () => { 
      this.checkMilestone();
      this.newQuestion() 
    })
  }

  handleFailure() {
    this.setState({ 
      incorrect: this.state.incorrect + 1,
      time: this.state.time + 1
    }, () => { 
      this.checkMilestone();
      this.newQuestion() 
    })
  }

  newQuestion() {
    // random numbers between 1 and 12
    let x = Math.floor(Math.random() * 12) + 1;
    let y = Math.floor(Math.random() * 12) + 1;
    let z = x * y;

    let coinToss = Math.random() < 0.5 ? true : false;

    // multiplication
    if (coinToss) {
      this.setState({
        question: x.toString() + ' x ' + y.toString() + ' =',
        answer: z
      })
    }
    // division
    else {
      this.setState({
        question: z.toString() + ' / ' + y.toString() + ' =',
        answer: x
      })
    }
    return 
  }

  checkMilestone() {
    let playerMilestones = this.state.milestones;
    let score = (this.state.correct * 100) - (this.state.incorrect * 50);

    for (var milestone of this.milestones) {
      if (score >= milestone && this.state.milestones.indexOf(milestone) == -1)
        playerMilestones.push(milestone)
    }

    this.setState({ 
      milestones: playerMilestones,
      highScore: (score > this.state.highScore) ? score: this.state.highScore
    })
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
          highScore={this.state.highScore}
          onFailure={this.handleFailure}
          onSubmit={this.checkAnswer}
        />
        <Milestones 
          milestones={this.state.milestones}
        />
      </div>
    );
  }
}

export default App;
