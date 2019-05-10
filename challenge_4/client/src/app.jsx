import TokenCol from './components/TokenCol.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.cols = [1, 2, 3, 4, 5, 6, 7];

    this.state = {
    };
  }

  render() {
    var gameboard =
      this.cols.map(num =>
        < TokenCol class='horizontal' key={num} />
      );

    var boardStyle = {
      display: 'flex'
    };

    return (
      <div>
        <h4>Click a button to drop a token</h4>
        <div style={boardStyle}>
          {gameboard}
        </div>
      </div>
    );
  };
};

ReactDOM.render(< App />, document.getElementById('app'));