class F1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: ''
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
    return (
      <div>
        <h1>Create an account!</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' value={this.state.name} onChange={this.handleName} />
          </label> <br/>
          <label>
            Email:
            <input type='email' value={this.state.email} onChange={this.handleEmail} />
          </label> <br/>
          <label>
            Password:
            <input type='text' value={this.state.text} onChange={this.handlePassword} />
          </label> <br/>
          <input type='submit' value='next'/>
        </form>
      </div>
    )}
};

var App = () => (
  <div>
    {/* <button id='checkout'>Checkout Now!</button> */}
    < F1 />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));