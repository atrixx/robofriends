import { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setRobots(users));
    //console.log(robots, searchfield)
    // console.log(count)
  }, []); // [count] only run if count changes

  const onSearchChange = event => {
    //console.log(event.target.value);
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  //console.log(filteredRobots);

  //console.log( robots,searchfield )

  // if (this.state.robots.length === 0)
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RobotFriends</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
