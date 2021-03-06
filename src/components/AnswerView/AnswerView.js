import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import happyPersonImg from '../../images/happy.jpg';
import disappointedImg from '../../images/disappointed.jpg';
import './AnswerView.css'
import Button from '../Button/Button';

class AnswerView extends Component {
  static contextType = UserContext
  static defaultProps = {
    onClick: () => {}
  }

  renderCorrect(isCorrect) {
    let isC = isCorrect 
    ? 'correct!' : 'incorrect';
    let img = isCorrect
    ? happyPersonImg : disappointedImg;
    return (
      <>
      <div className='item'>
      <h2 className='Results'>You are {isC}</h2>
      </div>
      <div className='item'>
      <img src={img} alt='Person' />
      </div>
      </>
    )
  }

  renderNext(isC) {
    let { answer } = this.context;
    let word = isC ? answer.nextWord : answer.answer;
    let p = isC ? 'Next word: ' : 'Correct answer: '
    return <p className='bgr DisplayFeedback'>{p} 
    <span className='to-translate'>{word || 'word'}</span>
    </p>
  }

  render() {
    let { isCorrect = 'false', wordCorrectCount, wordIncorrectCount, answer, totalScore } = this.context.answer;

    return (<>
    <div className='group a-v'>

           {this.renderCorrect(isCorrect)}

          <div className='item a-s'>
          <p className='DisplayScore'>Total correct answers: {totalScore}</p>
          <p><b>Scores for {answer}: </b></p>
          <p>{wordCorrectCount} correct {' | '} 
          {wordIncorrectCount} incorrect</p>
          </div>
        </div>

        <div className='d-bg answer'>
          {this.renderNext(isCorrect)}
        </div>

      <Button onClick={() => this.props.onNext()}>Try another word!</Button>
    </>
    )
  }
}

export default AnswerView