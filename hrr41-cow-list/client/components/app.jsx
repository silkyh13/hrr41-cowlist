import React from 'react';
import ReactDOM from 'react-dom';
import exampleData from '../data/exampleData.js';
import CowList from './CowList';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {data: [], value: '', description: '', currentCow: {}};

    this.handleCowChange = this.handleCowChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onListItemClick = this.onListItemClick.bind(this);
    this.deleteData = this.deleteData.bind(this);
  }

  onListItemClick(name, description) {

    this.setState({currentCow: {name: name, description: description}})
  }

  handleCowChange(event) {
    this.setState({value: event.target.value});
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {//adds name and description of a cow
    event.preventDefault();
    fetch('/api/cows', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.value,
        description: this.state.description
      })
    })
    .then(() => {
      this.fetchData();
    })
  }

  fetchData () {//fetching the whole  data from server
    fetch('api/cows', {
      method: 'GET',
    })
      .then((items) => {
        // console.log('does it work?', items.json());
        return items.json();

      })
      .then((cowData) => {
        this.setState({data: cowData});
      })
      .catch((err) => {
        console.error(err);
      });
  }
  deleteData (name, description) {
    console.log('bing bong, is dinner time for', name );
    event.preventDefault();
    fetch('/api/cows', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        description: description
      })
    })
    .then(() => {
      this.fetchData();
    })
  }


    componentDidMount() {//runs before render runs only the first time the component is created
      this.fetchData();
    }


  render() {
    let name = this.state.currentCow.name
    let description = this.state.currentCow.description
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleCowChange} />
        </label>
        <label>
          Description:
          <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <div className="example">{name} {description}</div>
      <div className="list">
        <div><h5><em>Cow List</em>
        <CowList cows={this.state.data} onClick={this.onListItemClick.bind(this)} onDelete={this.deleteData.bind(this)} />
        </h5></div>
      </div>

    </div>

    );
  }
}

ReactDOM.render(<App/>, //html looking thing <- this is called jsx
  document.getElementById('app')//append it to that
);
export default App;