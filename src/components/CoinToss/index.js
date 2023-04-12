import {Component} from 'react'
import './index.css'

let tossResult = 0

class CoinToss extends Component {
  state = {head: 0, tail: 0}

  getTotal = () => {
    tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({head: prevState.head + 1}))
    } else {
      this.setState(prevState => ({tail: prevState.tail + 1}))
    }
  }

  render() {
    const {head, tail} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img
            src={
              !tossResult
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            alt="toss result"
            className="image"
          />
          <button type="button" className="button" onClick={this.getTotal}>
            Toss Coin
          </button>
          <div className="result">
            <p className="total">Total:{head + tail}</p>
            <p className="total">Heads:{head}</p>
            <p className="total">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
