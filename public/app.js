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
    this.setState({
      form: 'Checkout'
    });
  }

  handleSubmit(destination, e) {
    e.preventDefault();
    this.setState({
      form: destination
    }); // creates new record

    if (e.target.id === 'checkout') {
      const data = this.state;
      delete data.form;
      delete data.id;
      axios.post('/create', data).then(res => {
        this.setState({
          id: res.data._id
        });
      }).catch(error => {
        console.error(error);
      });
    } // updates from forms


    if (e.target.id === 'form1') {
      const data = this.state;
      delete data.form;
      axios.post('/updatesForm1', data).then(res => {
        console.log(res.data);
      }).catch(error => {
        console.error(error);
      });
    }

    if (e.target.id === 'form2') {
      const data = this.state;
      delete data.form;
      axios.post('/updatesForm2', data).then(res => {
        console.log(res.data);
      }).catch(error => {
        console.error(error);
      });
    }

    if (e.target.id === 'form3') {
      const data = this.state;
      delete data.form;
      axios.post('/updatesForm3', data).then(res => {
        console.log(res.data);
      }).catch(error => {
        console.error(error);
      });
    }
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
    e.preventDefault();
  }

  render() {
    const destination = this.state.form;
    let form;

    if (destination === 'Checkout') {
      form = /*#__PURE__*/React.createElement(Checkout, {
        handleSubmit: this.handleSubmit,
        handleChange: this.handleChange
      });
    } else if (destination === 'Form1') {
      form = /*#__PURE__*/React.createElement(Form1, {
        handleSubmit: this.handleSubmit,
        handleChange: this.handleChange
      });
    } else if (destination === 'Form2') {
      form = /*#__PURE__*/React.createElement(Form2, {
        handleSubmit: this.handleSubmit,
        handleChange: this.handleChange
      });
    } else if (destination === 'Form3') {
      form = /*#__PURE__*/React.createElement(Form3, {
        handleSubmit: this.handleSubmit,
        handleChange: this.handleChange
      });
    } else if (destination === 'Confirmation') {
      form = /*#__PURE__*/React.createElement(Confirmation, {
        handleSubmit: this.handleSubmit,
        data: this.state
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", null, "Multistep Checkout"), form);
  }

}

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextForm: ''
    };
  }

  componentDidMount() {
    this.setState({
      nextForm: 'Form1'
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("button", {
      className: "btn",
      id: "checkout",
      type: "button",
      onClick: e => this.props.handleSubmit(this.state.nextForm, e)
    }, "Checkout"));
  }

}

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextForm: ""
    };
  }

  componentDidMount() {
    this.setState({
      nextForm: 'Form2'
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "name:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "email:"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      name: "email",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "password:"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      name: "password",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "btn",
      id: "form1",
      type: "button",
      onClick: e => this.props.handleSubmit(this.state.nextForm, e)
    }, "Next")));
  }

}

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextForm: ""
    };
  }

  componentDidMount() {
    this.setState({
      nextForm: 'Form3'
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "line1:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "line1",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "line2:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "line2",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "city:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "city",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "state:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "state",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "zip code:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "shipzip",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "btn",
      id: "form2",
      type: "button",
      onClick: e => this.props.handleSubmit(this.state.nextForm, e)
    }, "Next")));
  }

}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextForm: ""
    };
  }

  componentDidMount() {
    this.setState({
      nextForm: 'Confirmation'
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "card #:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "cc",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "expiry date:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "exp",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "CVV:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "cvv",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "zip code:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "billzip",
      onChange: this.props.handleChange,
      required: true
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      className: "btn",
      id: "form3",
      type: "button",
      onClick: e => this.props.handleSubmit(this.state.nextForm, e)
    }, "Next")));
  }

}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextForm: "",
      account: {}
    };
  }

  componentDidMount() {
    this.setState({
      nextForm: 'Checkout'
    });
  }

  render() {
    const data = this.props.data;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "name:"), /*#__PURE__*/React.createElement("td", null, data.name)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "email:"), /*#__PURE__*/React.createElement("td", null, data.email)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "password:"), /*#__PURE__*/React.createElement("td", null, data.password)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "address1:"), /*#__PURE__*/React.createElement("td", null, data.line1)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "address2:"), /*#__PURE__*/React.createElement("td", null, data.line1)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "city:"), /*#__PURE__*/React.createElement("th", null, "state:"), /*#__PURE__*/React.createElement("th", null, "zip code:")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, data.city), /*#__PURE__*/React.createElement("td", null, data.state), /*#__PURE__*/React.createElement("td", null, data.shipzip)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "card #:"), /*#__PURE__*/React.createElement("td", null, data.cc)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "expiry date:"), /*#__PURE__*/React.createElement("th", null, "CVV:"), /*#__PURE__*/React.createElement("th", null, "zip code:")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, data.exp), /*#__PURE__*/React.createElement("td", null, data.cvv), /*#__PURE__*/React.createElement("td", null, data.billzip)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("button", {
      className: "btn",
      id: "confirmation",
      type: "button",
      onClick: e => this.props.handleSubmit(this.state.nextForm, e)
    }, "Purchase"))));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiZm9ybSIsImlkIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsaW5lMSIsImxpbmUyIiwiY2l0eSIsInNoaXB6aXAiLCJjYyIsImV4cCIsImN2diIsImJpbGx6aXAiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRTdGF0ZSIsImRlc3RpbmF0aW9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZGF0YSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJfaWQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwicmVuZGVyIiwiQ2hlY2tvdXQiLCJuZXh0Rm9ybSIsIkZvcm0xIiwiRm9ybTIiLCJGb3JtMyIsIkNvbmZpcm1hdGlvbiIsImFjY291bnQiLCJSZWFjdERPTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsR0FBTixTQUFrQkMsS0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsRUFESztBQUVYQyxNQUFBQSxFQUFFLEVBQUUsRUFGTztBQUdYQyxNQUFBQSxJQUFJLEVBQUUsRUFISztBQUlYQyxNQUFBQSxLQUFLLEVBQUUsRUFKSTtBQUtYQyxNQUFBQSxRQUFRLEVBQUUsRUFMQztBQU1YQyxNQUFBQSxLQUFLLEVBQUUsRUFOSTtBQU9YQyxNQUFBQSxLQUFLLEVBQUUsRUFQSTtBQVFYQyxNQUFBQSxJQUFJLEVBQUUsRUFSSztBQVNYUixNQUFBQSxLQUFLLEVBQUUsRUFUSTtB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QUE2Q2hCLENBQTdDO0FBSmxCLGtCQURGLENBN0NGLENBREYsQ0FERjtBQTBERDs7QUF6RXdDOztBQTZFM0NzQixRQUFRLENBQUNSLE1BQVQsZUFBZ0Isb0JBQUMsR0FBRCxPQUFoQixFQUF5QlMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06ICcnLFxuICAgICAgaWQ6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBsaW5lMTogJycsXG4gICAgICBsaW5lMjogJycsXG4gICAgICBjaXR5OiAnJyxcbiAgICAgIHN0YXRlOiAnJyxcbiAgICAgIHNoaXB6aXA6ICcnLFxuICAgICAgY2M6ICcnLFxuICAgICAgZXhwOiAnJyxcbiAgICAgIGN2djogJycsXG4gICAgICBiaWxsemlwOiAnJ1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Zm9ybTogJ0NoZWNrb3V0J30pXG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZGVzdGluYXRpb24sIGUpIHtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtmb3JtOiBkZXN0aW5hdGlvbn0pO1xuXG4gICAgLy8gY3JlYXRlcyBuZXcgcmVjb3JkXG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnY2hlY2tvdXQnKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5zdGF0ZTtcbiAgICAgIGRlbGV0ZSBkYXRhLmZvcm1cbiAgICAgIGRlbGV0ZSBkYXRhLmlkO1xuICAgICAgYXhpb3MucG9zdCgnL2NyZWF0ZScsIGRhdGEpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpZDogcmVzLmRhdGEuX2lkfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZXMgZnJvbSBmb3Jtc1xuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2Zvcm0xJykge1xuICAgICAgY29uc3QgZGF0YSA9IHRoaXMuc3RhdGU7XG4gICAgICBkZWxldGUgZGF0YS5mb3JtO1xuICAgICAgYXhpb3MucG9zdCgnL3VwZGF0ZXNGb3JtMScsIGRhdGEpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdmb3JtMicpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLnN0YXRlO1xuICAgICAgZGVsZXRlIGRhdGEuZm9ybTtcbiAgICAgIGF4aW9zLnBvc3QoJy91cGRhdGVzRm9ybTInLCBkYXRhKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSAnZm9ybTMnKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5zdGF0ZTtcbiAgICAgIGRlbGV0ZSBkYXRhLmZvcm07XG4gICAgICBheGlvcy5wb3N0KCcvdXBkYXRlc0Zvcm0zJywgZGF0YSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1tuYW1lXTogdmFsdWV9KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSB0aGlzLnN0YXRlLmZvcm07XG4gICAgbGV0IGZvcm07XG4gICAgaWYgKGRlc3RpbmF0aW9uID09PSAnQ2hlY2tvdXQnKSB7XG4gICAgICBmb3JtID0gPENoZWNrb3V0IGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICB9IGVsc2UgaWYgKGRlc3RpbmF0aW9uID09PSAnRm9ybTEnKSB7XG4gICAgICBmb3JtID0gPEZvcm0xIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGhhbmRsZUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgfSBlbHNlIGlmIChkZXN0aW5hdGlvbiA9PT0gJ0Zvcm0yJykge1xuICAgICAgZm9ybSA9IDxGb3JtMiBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBoYW5kbGVDaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgIH0gZWxzZSBpZiAoZGVzdGluYXRpb24gPT09ICdGb3JtMycpIHtcbiAgICAgIGZvcm0gPSA8Rm9ybTMgaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICB9IGVsc2UgaWYgKGRlc3RpbmF0aW9uID09PSAnQ29uZmlybWF0aW9uJykge1xuICAgICAgZm9ybSA9IDxDb25maXJtYXRpb24gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gZGF0YT17dGhpcy5zdGF0ZX0vPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2Pk11bHRpc3RlcCBDaGVja291dDwvZGl2PlxuICAgICAgICB7Zm9ybX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBDaGVja291dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7bmV4dEZvcm06ICcnfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe25leHRGb3JtOiAnRm9ybTEnfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgIGlkPVwiY2hlY2tvdXRcIlxuICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQodGhpcy5zdGF0ZS5uZXh0Rm9ybSwgZSl9XG4gICAgICAgID5DaGVja291dDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBGb3JtMSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuZXh0Rm9ybTogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bmV4dEZvcm06ICdGb3JtMid9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgPm5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsID5lbWFpbDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCA+cGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgICAgICAgaWQ9XCJmb3JtMVwiXG4gICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQodGhpcy5zdGF0ZS5uZXh0Rm9ybSwgZSl9XG4gICAgICAgICAgPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEZvcm0yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5leHRGb3JtOiBcIlwiLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtuZXh0Rm9ybTogJ0Zvcm0zJ30pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCA+bGluZTE6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGluZTFcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCA+bGluZTI6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGluZTJcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCA+Y2l0eTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgPnN0YXRlOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInN0YXRlXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgPnppcCBjb2RlOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNoaXB6aXBcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICBpZD1cImZvcm0yXCJcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdCh0aGlzLnN0YXRlLm5leHRGb3JtLCBlKX1cbiAgICAgICAgICA+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgRm9ybTMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmV4dEZvcm06IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe25leHRGb3JtOiAnQ29uZmlybWF0aW9uJ30pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCA+Y2FyZCAjOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNjXCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgPmV4cGlyeSBkYXRlOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImV4cFwiIG9uQ2hhbmdlPXt0aGlzLnByb3BzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsID5DVlY6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY3Z2XCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgPnppcCBjb2RlOjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJpbGx6aXBcIiBvbkNoYW5nZT17dGhpcy5wcm9wcy5oYW5kbGVDaGFuZ2V9IHJlcXVpcmVkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICBpZD1cImZvcm0zXCJcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdCh0aGlzLnN0YXRlLm5leHRGb3JtLCBlKX1cbiAgICAgICAgICA+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gIH1cbn1cblxuXG5cbmNsYXNzIENvbmZpcm1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuZXh0Rm9ybTogXCJcIixcbiAgICAgIGFjY291bnQ6IHt9XG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe25leHRGb3JtOiAnQ2hlY2tvdXQnfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPm5hbWU6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZGF0YS5uYW1lfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+ZW1haWw6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZGF0YS5lbWFpbH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPnBhc3N3b3JkOjwvdGg+XG4gICAgICAgICAgICA8dGQ+e2RhdGEucGFzc3dvcmR9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5hZGRyZXNzMTo8L3RoPlxuICAgICAgICAgICAgPHRkPntkYXRhLmxpbmUxfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+YWRkcmVzczI6PC90aD5cbiAgICAgICAgICAgIDx0ZD57ZGF0YS5saW5lMX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPmNpdHk6PC90aD5cbiAgICAgICAgICAgIDx0aD5zdGF0ZTo8L3RoPlxuICAgICAgICAgICAgPHRoPnppcCBjb2RlOjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e2RhdGEuY2l0eX08L3RkPlxuICAgICAgICAgICAgPHRkPntkYXRhLnN0YXRlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2RhdGEuc2hpcHppcH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPmNhcmQgIzo8L3RoPlxuICAgICAgICAgICAgPHRkPntkYXRhLmNjfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+ZXhwaXJ5IGRhdGU6PC90aD5cbiAgICAgICAgICAgIDx0aD5DVlY6PC90aD5cbiAgICAgICAgICAgIDx0aD56aXAgY29kZTo8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPntkYXRhLmV4cH08L3RkPlxuICAgICAgICAgICAgPHRkPntkYXRhLmN2dn08L3RkPlxuICAgICAgICAgICAgPHRkPntkYXRhLmJpbGx6aXB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgICAgICAgICAgaWQ9XCJjb25maXJtYXRpb25cIlxuICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdCh0aGlzLnN0YXRlLm5leHRGb3JtLCBlKX1cbiAgICAgICAgICAgID5QdXJjaGFzZTwvYnV0dG9uPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiXX0=