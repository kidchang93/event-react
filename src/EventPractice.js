import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message : ''
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input type='text' name='message' placeholder='입력해 주세요.'
          onChange={(e) => {
            this.setState({message:e.target.value});
            console.log(e.target.name,e.target.value);
          }}
        />
        <br />
        message: {this.state.message}
      </div>
    );
  }
}

export default EventPractice;