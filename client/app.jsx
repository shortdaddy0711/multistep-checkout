class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {form: ''};

    this.handleFormState = this.handleFormState.bind(this);
  }

  componentDidMount() {
    this.setState({form: 'Checkout'})
  }

  handleFormState(destination) {
    this.setState({form: destination});
  }

  render() {
    const destination = this.state.form;
    let form;
    if (destination === 'Checkout') { form = <Checkout nextForm={this.handleFormState} />};
    if (destination === 'Form1') { form = <Form1 nextForm={this.handleFormState} />};
    if (destination === 'Form2') { form = <Form2 nextForm={this.handleFormState} />};
    if (destination === 'Form3') { form = <Form3 nextForm={this.handleFormState} />};
    if (destination === 'Confirmation') { form = <Confirmation nextForm={this.handleFormState} />};

    return (
      <div className="container">
        <div>Multistep Checkout</div>
        {form}
      </div>
    )
  }
}

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nextForm: ''};
  }

  componentDidMount() {
    this.setState({nextForm: 'Form1'})
  }


  render() {
    return (
      <form>
        <button
          className="btn"
          id="checkout"
          type='button'
          onClick={(e) => this.props.nextForm(this.state.nextForm)}
        >Checkout</button>
      </form>
    )
  }
}

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
      account: {
        name:'',
        email:'',
        password:''
      }
    };
  }

  componentDidMount() {
    this.setState({form: 'Form2'})
  }

  render() {
    return (
      <form>
        <div>
          <label >name: </label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label >email: </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label >password: </label>
          <input type="password" name="password" id="password" required />
        </div>
        <div>
          <button
            className="btn"
            id="toForm2"
            type='button'
            onClick={(e) => this.props.nextForm(this.state.form)}
          >Next</button>
        </div>
      </form>
    )
  }
}

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.props.nextForm
    }
  }

  render() {
    return (
      <button className="btn" id="next" type='button' onClick={(e) => this.setState({form: <Form3 nextForm={this.state.form}/>})}>Next</button>
    )
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.props.nextForm
    }
  }


  render() {
    return (
      <button className="btn" id="next" type='button' onClick={(e) => this.setState({form: <Confirmation nextForm={this.state.form}/>})}>Next</button>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: this.props.nextForm
    }
  }


  render() {
    return (
      <button className="btn" id="next" type='button' onClick={(e) => this.setState({form: <Checkout nextForm={this.state.form}/>})}>Purchase</button>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));