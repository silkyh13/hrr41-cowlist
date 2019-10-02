import React from 'react';
import ReactDOM from 'react-dom';
import exampleData from '../data/exampleData.js';
import CowList from './CowList';
// import CowListEntry from './CowListEntry'
// Temporary components
// const CowForm = (props) => {
//   return (
//     <form onSubmit={this.handleSubmit}>
//     <label>
//       Name:
//       <input type="text" value={this.state.value} onChange={this.handleChange} />
//     </label>
//     <input type="submit" value="Submit" />
//   </form>
//   );
// }

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {value: '', description: ''};

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange(event) {
    this.setState({value: event.target.value});
  }
  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value + this.state.description);
    //send my data to server
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
    .then(function(response) {
      return response.json()
    }).then(function(body) {
      console.log(body);
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          User:
          <input type="text" value={this.state.value} onChange={this.handleUserChange} />
        </label>
        <label>
          Description:
          <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>


      <div className="list">
        <div><h5><em>Cow List</em>
        <CowList cows={exampleData} />
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