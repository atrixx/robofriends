import { Component } from 'react';
import CardList from '../components/CardList';
// import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [], //robots,
      searchfield: '',
    };
    // console.log("constructor");
  }

  componentDidMount() {
    //console.log("check");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
    // this.setState( { robots: robots } )
    //console.log("componentDidMount");
  }

  onSearchChange = event => {
    //console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes( searchfield.toLowerCase() );
    });
    //console.log(filteredRobots);
    //console.log("render");

    // if (this.state.robots.length === 0) 
    if (!robots.length)
    {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} /> {/*  {this.state.robots} */}
          </Scroll>
          
        </div>
      );
    }
  }
}

export default App;
