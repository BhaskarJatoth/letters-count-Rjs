import {Component} from 'react'

import './index.css'

class LetterCalculator extends Component {
  state = {lettersCount: 0}

  updateLettersCount = event => {
    this.setState({lettersCount: event.target.value.length})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="letter-cal-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="letter-cal-img"
          alt="letters calculator"
        />

        <div className="letters-calculator-text-con">
          <h1 className="heading">Calculate the letters you entered</h1>
          <div>
            <label htmlFor="input" className="letter-cla-label-text">
              Enter the phrase
            </label>
            <br />

            <input
              id="input"
              type="text"
              onChange={this.updateLettersCount}
              className="letter-cal-input"
              placeholder="Enter the phrase"
            />
          </div>
          <p className="letter-cal-counter">No.of letters: {lettersCount}</p>
        </div>
      </div>
    )
  }
}
export default LetterCalculator
