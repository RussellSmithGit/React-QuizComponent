import React, {Component} from 'react'

class QuizQuestionButton extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <li className="buttons" key={this.props.index}><button onClick={this.handleClick}>{this.props.button_text}</button></li>
        )
    }
    handleClick() { 
        this.props.clickHandler(this.props.button_text)
    }
}

export default QuizQuestionButton