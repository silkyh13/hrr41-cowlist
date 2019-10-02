import React from 'react';
import ReactDOM from 'react-dom';
import exampleData from '../data/exampleData.js';
import CowList from './CowList';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {data: [], value: '', description: '', currentCow: {}};

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onListItemClick = this.onListItemClick.bind(this);
  }
  onListItemClick(name, description) {

    // alert(name + ' ' +description);
    this.setState({currentCow: {name: name, description: description}})
  }
  handleUserChange(event) {
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
    .then((response) => {
      return response.json()
    }).then((body) => {
      console.log(body);
    });
  }

    fetchData () {//fetching data from server
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

    componentDidMount() {//runs before render runs only the first time the component is created
      this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {//anytime the state changes or properties changes, it will run again.
      if (prevState !== this.state) {
        // this.fetchData();
      }
    }

  render() {
    let name = this.state.currentCow.name
    let description = this.state.currentCow.description
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleUserChange} />
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
        <CowList cows={this.state.data} onClick={this.onListItemClick.bind(this)}/>
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