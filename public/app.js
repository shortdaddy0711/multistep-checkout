import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: ''
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, "Multistep Checkout"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      type: "button"
    }, "Checkout")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form1, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form2, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form3, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Confirmation, null)));
  }

}

class Form1 extends React.Compoent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null);
  }

}

class Form2 extends React.Compoent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null);
  }

}

class Form3 extends React.Compoent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null);
  }

}

class Confirmation extends React.Compoent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null);
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJheGlvcyIsIkFwcCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImZvcm0iLCJyZW5kZXIiLCJGb3JtMSIsIkNvbXBvZW50IiwiRm9ybTIiLCJGb3JtMyIsIkNvbmZpcm1hdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBcUIsT0FBckI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLFdBQXJCO0FBQ0EsT0FBT0MsS0FBUCxNQUFxQixPQUFyQjs7QUFJQSxNQUFNQyxHQUFOLFNBQWtCSCxLQUFLLENBQUNJLFNBQXhCLENBQWtDO0FBQ2hDQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLE1BQUFBLElBQUksRUFBRTtBQURLLEtBQWI7QUFHRDs7QUFJREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1Asd0JBQ0UsOENBQ0Usc0RBREYsZUFFSSw4Q0FBSztBQUFRLE1BQUEsSUFBSSxFQUFDO0FBQWIsa0JBQUwsQ0FGSixlQUlJLDhDQUFLLG9CQUFDLEtBQUQsT0FBTCxDQUpKLGVBS0ksOENBQUssb0JBQUMsS0FBRCxPQUFMLENBTEosZUFNSSw4Q0FBSyxvQkFBQyxLQUFELE9BQUwsQ0FOSixlQU9JLDhDQUFLLG9CQUFDLFlBQUQsT0FBTCxDQVBKLENBREY7QUFZRDs7QUF2QitCOztBQTBCbEMsTUFBTUMsS0FBTixTQUFvQlYsS0FBSyxDQUFDVyxRQUExQixDQUFtQztBQUNqQ04sRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBR0Q7O0FBR0RFLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFLGdDQURGO0FBSUQ7O0FBZGdDOztBQWlCbkMsTUFBTUcsS0FBTixTQUFvQlosS0FBSyxDQUFDVyxRQUExQixDQUFtQztBQUNqQ04sRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBR0Q7O0FBR0RFLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFLGdDQURGO0FBSUQ7O0FBZGdDOztBQWlCbkMsTUFBTUksS0FBTixTQUFvQmIsS0FBSyxDQUFDVyxRQUExQixDQUFtQztBQUNqQ04sRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBR0Q7O0FBR0RFLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFLGdDQURGO0FBSUQ7O0FBZGdDOztBQWlCbkMsTUFBTUssWUFBTixTQUEyQmQsS0FBSyxDQUFDVyxRQUFqQyxDQUEwQztBQUN4Q04sRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBR0Q7O0FBR0RFLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFLGdDQURGO0FBSUQ7O0FBZHVDOztBQWtCMUNSLFFBQVEsQ0FBQ1EsTUFBVCxlQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCTSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgYXhpb3MgICAgZnJvbSAnYXhpb3MnO1xuXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06ICcnXG4gICAgfVxuICB9XG5cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiA+XG4gICAgICAgIDxkaXY+TXVsdGlzdGVwIENoZWNrb3V0PC9kaXY+XG4gICAgICAgICAgPGRpdj48YnV0dG9uIHR5cGU9J2J1dHRvbicgPkNoZWNrb3V0PC9idXR0b24+PC9kaXY+XG5cbiAgICAgICAgICA8ZGl2PjxGb3JtMSAvPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PEZvcm0yIC8+PC9kaXY+XG4gICAgICAgICAgPGRpdj48Rm9ybTMgLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxDb25maXJtYXRpb24gLz48L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEZvcm0xIGV4dGVuZHMgUmVhY3QuQ29tcG9lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEZvcm0yIGV4dGVuZHMgUmVhY3QuQ29tcG9lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIEZvcm0zIGV4dGVuZHMgUmVhY3QuQ29tcG9lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuXG4gICAgfVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIENvbmZpcm1hdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgIH1cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2ID5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==