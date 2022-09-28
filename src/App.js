import { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
  }

  onSearchChange = event => {
    //console.log(event.target.value);
    this.setState( {searchfield: event.target.value } )
};

render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    //console.log(filteredRobots);
    return (
        <div className="tc">
        <h1 className='f1'>RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots = { filteredRobots } /> {/*  {this.state.robots} */}
      </div>
    );
  }
}

export default App;
