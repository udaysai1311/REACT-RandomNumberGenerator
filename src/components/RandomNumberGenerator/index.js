import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateButton = () => {
    this.setState(() => ({number: Math.ceil(Math.random() * 100)}))
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button className="button" onClick={this.generateButton}>
            Generate
          </button>
          <p className="head1">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
