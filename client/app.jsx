// import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: '',
      id: '',
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      shipzip: '',
      cc: '',
      exp: '',
      cvv: '',
      billzip: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({form: 'Checkout'})
  }

  handleSubmit(destination, e) {

    e.preventDefault();
    this.setState({form: destination});

    // creates new record
    if (e.target.id === 'checkout') {
      const data = this.state;
      delete data.form
      delete data.id;
      axios.post('/create', data)
      .then(res => {
        this.setState({id: res.data._id});
      })
      .catch(error => {
        console.error(error);
      })
    }

    // updates from forms
    if (e.target.id === 'form1') {
      const data = this.state;
      delete data.form;
      axios.post('/updatesForm1', data)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      })
    }
    if (e.target.id === 'form2') {
      const data = this.state;
      delete data.form;
      axios.post('/updatesForm2', data)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      })
    }
    if (e.target.id === 'form3') {
      const data = this.state;
      delete data.form;
      axios.post('/updatesForm3', data)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      })
    }
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
    e.preventDefault();
  }

  render() {
    const destination = this.state.form;
    let form;
    if (destination === 'Checkout') {
      form = <Checkout handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    } else if (destination === 'Form1') {
      form = <Form1 handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    } else if (destination === 'Form2') {
      form = <Form2 handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    } else if (destination === 'Form3') {
      form = <Form3 handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
    } else if (destination === 'Confirmation') {
      form = <Confirmation handleSubmit={this.handleSubmit} data={this.state}/>
    }

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
          onClick={(e) => this.props.handleSubmit(this.state.nextForm, e)}
        >Checkout</button>
      </form>
    )
  }
}

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextForm: "",
    };
  }

  componentDidMount() {
    this.setState({nextForm: 'Form2'})
  }

  render() {
    return (
      <form>
        <div>
          <label >name:</label>
          <input type="text" name="name" onChange={this.props.handleChange} required />
        </div>
        <div>
          <label >email:</label>
          <input type="email" name="email" onChange={this.props.handleChange} required />
        </div>
        <div>
          <label >password:</label>
          <input type="password" name="password" onChange={this.props.handleChange} required />
        </div>
        <div>
          <button
            className="btn"
            id="form1"
            type='button'
            onClick={(e) => this.props.handleSubmit(this.state.nextForm, e)}
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
      nextForm: "",
    };
  }

  componentDidMount() {
    this.setState({nextForm: 'Form3'})
  }

  render() {
    return (
      <form>
        <div>
          <label >line1:</label>
          <input type="text" name="line1" onChange={this.props.handleChange} required />
        </div>
        <div>
          <label >line2:</label>
          <input type="text" name="line2" onChange={this.props.handleChange} required />
        </div>
        <div>
          <label >city:</label>
          <input type="text" name="city" onChange={this.props.handleChange} required />
        </div>
        <div>
          <label >state:</label>
          <input type="text" name="state" onChange={this.props.handleChange} required />
        </div>
        <div>
          <label >zip code:</label>
          <input type="text" name="shipzip" onChange={this.props.handleChange} required />
        </div>
        <div>
          <button
            className="btn"
            id="form2"
            type='button'
            onClick={(e) => this.props.handleSubmit(this.state.nextForm, e)}
          >Next</button>
        </div>
      </form>
    )
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextForm: "",
    };
  }

  componentDidMount() {
    this.setState({nextForm: 'Confirmation'})
  }

  render() {
    return (
      <form>
        <div>
          <label >card #:</label>
          <input type="text" name="cc" onChange={this.props.handleChange} required />
        </div>
        <div>
          <label >expiry date:</label>
          <input type="text" name="exp" onChange={this.props.handleChange} required />
        </div>
        <div>
          <label >CVV:</label>
          <input type="text" name="cvv" onChange={this.props.handleChange} required />
        </div>
        <div>
          <label >zip code:</label>
          <input type="text" name="billzip" onChange={this.props.handleChange} required />
        </div>
        <div>
          <button
            className="btn"
            id="form3"
            type='button'
            onClick={(e) => this.props.handleSubmit(this.state.nextForm, e)}
          >Next</button>
        </div>
      </form>
    )
  }
}



class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextForm: "",
    };
  }

  componentDidMount() {
    this.setState({nextForm: 'Checkout'})
    axios.get('/account')
      .then(this.reloadGroceries)
      .catch((error)=>{console.log(error)})
  }




  render() {
    return (
      <div>
        <table>
        <Table />
        </table>
        <form>
          <div>
            <button
              className="btn"
              id="confirmation"
              type='button'
              onClick={(e) => this.props.handleSubmit(this.state.nextForm, e)}
            >Purchase</button>
          </div>
        </form>
      </div>
    )
  }
}

const Table = () => {
  return (
    <tr>
      <td></td>
      <td></td>
    </tr>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));