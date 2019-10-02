import React from 'react';
import ReactDOM from 'react-dom';

// Temporary components
const CowForm = (props) => {
  return (
    <p>mooform</p>
  );
}


class App extends React.Component {
  constructor (props) {
    super(props);
    // this.onListItemClick = this.onListItemClick.bind(this);
    // this.fetchData = this.fetchData.bind(this);
  }

  render() {
    return (
      <CowForm/>
    );
  }
}

ReactDOM.render(<App/>, //<- this is called jsx
  document.getElementById('app')//append it to that
);