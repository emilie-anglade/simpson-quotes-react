import React from 'react'
import "./QuoteForm.css"

const MAX_LENGTH= 30;
class QuoteForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {character: ""};
    }

    handleChange = (event) => {
      if (event.target.value.length <= MAX_LENGTH) {
        this.setState({character: event.target.value})
      }
    }

    handleSubmit = (event) => {
      event.preventDefault();
    }
    render() {

      const maxlength = this.state.character.length >= MAX_LENGTH;
      const numbersRemaining = MAX_LENGTH - this.state.character.length;

      return (
        <form
        className="QuoteForm"
        onSubmit={this.handleSubmit}
        >
          <label htmlFor="character">Character:</label>
          <input
          className={maxlength ? "length-maximum-reached" : "length-ok"}
          id="character"
          name="character"
          type="text"
          value={this.state.character}
          onChange={this.handleChange}
          />
          <small>{numbersRemaining} remaining characters</small>
          <p>You typed: {this.state.character}</p>
        </form>
      );
    }
  }
  
 export default QuoteForm;
 