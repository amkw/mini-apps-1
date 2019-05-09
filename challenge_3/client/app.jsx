class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (this.state.page === 'home') {
      this.setState({ page: 'F1' });
    } else if (this.state.page === 'F1') {
      this.setState({ page: 'F2' });
    } else if (this.state.page === 'F2') {
      this.setState({ page: 'F3' });
    } else if (this.state.page === 'F3') {
      this.setState({ page: 'confirmation' });
    } else if (this.state.page === 'confirmation') {
      this.setState({ page: 'home' });
    }
    event.preventDefault();
  }

  render() {
    if (this.state.page === 'home') {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='submit' value='Checkout' />
          </form>
        </div>
      )
    } else if (this.state.page === 'F1') {
      return (
        <div>
          < F1 />
          <form onSubmit={this.handleSubmit}>
            <input type='submit' value='Next' />
          </form>
        </div>
      )
    } else if (this.state.page === 'F2') {
      return (
        <div>
          < F2 />
          <form onSubmit={this.handleSubmit}>
            <input type='submit' value='Next' />
          </form>
        </div>
      )
    } else if (this.state.page === 'F3') {
      return (
        <div>
          < F3 />
          <form onSubmit={this.handleSubmit}>
            <input type='submit' value='Next' />
          </form>
        </div>
      )
    } else if (this.state.page === 'confirmation') {
      return (
        <div>
          <h3>Grab data from DB</h3>
          <form onSubmit={this.handleSubmit}>
            <input type='submit' value='Confirm' />
          </form>
        </div>
      )
    }
  }
};

class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    alert('Account created. Name: ' + this.state.name + ' Email: ' + this.state.email + ' Password: ' + this.state.password);
    event.preventDefault();
  }


  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Create an Account</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.name} onChange={this.handleName} />
          </label> <br />
          <label>
            Email:
            <input type='email' value={this.state.email} onChange={this.handleEmail} />
          </label> <br />
          <label>
            Password:
            <input type='password' value={this.state.password} onChange={this.handlePassword} />
          </label> <br />
          {/* <input type='submit' value='next' /> */}
        </form>
      </div>
    )
  }
};

class F2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address_line1: '',
      address_line2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    };

    this.handleAddLine1 = this.handleAddLine1.bind(this);
    this.handleAddLine2 = this.handleAddLine2.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddLine1(event) {
    this.setState({ address_line1: event.target.value });
  }

  handleAddLine2(event) {
    this.setState({ address_line2: event.target.value });
  }

  handleCity(event) {
    this.setState({ city: event.target.value });
  }

  handleState(event) {
    this.setState({ state: event.target.value });
  }

  handleZip(event) {
    this.setState({ zip: event.target.value });
  }

  handlePhone(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit(event) {
    alert(JSON.stringify(this.state));
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h1>Shipping Address</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Address Line 1:
            <input type='text' value={this.state.address_line1} onChange={this.handleAddLine1} />
          </label> <br />
          <label>
            Address Line 2:
            <input type='text' value={this.state.address_line2} onChange={this.handleAddLine2} />
          </label> <br />
          <label>
            City:
            <input type='text' value={this.state.city} onChange={this.handleCity} />
          </label> <br />
          <label>
            State:
            <input type='text' value={this.state.state} onChange={this.handleState} />
          </label> <br />
          <label>
            Zip Code:
            <input type='number' value={this.state.zip} onChange={this.handleZip} />
          </label> <br />
          <label>
            Phone Number:
            <input type='text' value={this.state.phone} onChange={this.handlePhone} />
          </label> <br />
          {/* <input type='submit' value='next' /> */}
        </form>
      </div>
    )
  }
};

class F3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cc: '',
      exp: '',
      cvv: '',
      zip: ''
    };

    this.handleCC = this.handleCC.bind(this);
    this.handleExp = this.handleExp.bind(this);
    this.handleCVV = this.handleCVV.bind(this);
    this.handleZip = this.handleZip.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCC(event) {
    this.setState({ cc: event.target.value });
  }

  handleExp(event) {
    this.setState({ exp: event.target.value });
  }

  handleCVV(event) {
    this.setState({ cvv: event.target.value });
  }

  handleZip(event) {
    this.setState({ zip: event.target.value });
  }

  handleSubmit(event) {
    alert('Account created. CC: ' + this.state.cc + ' Exp: ' + this.state.exp + ' CVV: ' + this.state.cvv + ' Zip: ' + this.state.zip);
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <h1>Billing Info</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Credit Card Number:
            <input type='number' value={this.state.cc} onChange={this.handleCC} />
          </label> <br/>
          <label>
            Expiration Date:
            <input type='text' value={this.state.exp} onChange={this.handleExp} />
          </label> <br/>
          <label>
            CVV:
            <input type='number' value={this.state.cvv} onChange={this.handleCVV} />
          </label> <br/>
          <label>
            Zip Code:
            <input type='number' value={this.state.zip} onChange={this.handleZip} />
          </label> <br />
          {/* <input type='submit' value='next'/> */}
        </form>
      </div>
    )}
};

ReactDOM.render(<App />, document.getElementById('app'));