import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    name: 'Artur Feldens',
    counter: 0
  };

    //  não precisamos utilizar o bind pois o arrow function supre isso
    // this.handlePClick = this.handlePClick.bind(this);


  handlePClick = () => {
    this.setState({ name: 'Feldens'})
  }

  // arrow function herdando state do constructor
  handleAClick = (event) => {
    // impede o elemento de realizar seu evento padrão, neste caso é abrir a url em nova pagina
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1})
  }

  render() {
    const {name, counter} = this.state;
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
      </div>
    );
  }
}


export default App;
