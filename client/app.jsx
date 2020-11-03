import React    from 'react';
import ReactDOM from 'react-dom';
import axios    from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: ''
    }
  }



  render() {
    return (
      <div >
        <div>Multistep Checkout</div>
          <div><button type='button' >Checkout</button></div>

          <div><Form1 /></div>
          <div><Form2 /></div>
          <div><Form3 /></div>
          <div><Confirmation /></div>

      </div>
    )
  }
}

class Form1 extends React.Compoent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div >
      </div>
    )
  }
}

class Form2 extends React.Compoent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div >
      </div>
    )
  }
}

class Form3 extends React.Compoent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div >
      </div>
    )
  }
}

class Confirmation extends React.Compoent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div >
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));