import Token from './Token.jsx';

class TokenCol extends React.Component {
  constructor (props) {
    super(props);

    this.tokens = [1,2,3,4,5,6];

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('Button clicked!');
  }

  render() {
    var tokens =
      this.tokens.map(num =>
        < Token key={num} />
      );

    return (
      <div>
        <button onClick={this.handleClick}>Drop Token</button>
        {tokens}
      </div>
    )
  }
};

export default TokenCol;