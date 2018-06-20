import React, { Component } from 'react';
import './App.css';

import Hill from './components/Hill';
import Cloud from './components/Cloud';
import Rainbow from './components/Rainbow';
import Greeting from './components/Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageTitle: 'About Me',
      message: "I'm a web developer who's interested in humanity in tech. I love to use my brain to solve problems, but I strongly believe that the first step has to be using my heart to figure out what problems to solve. I also think the world is generally a pretty silly place.",
      gitHubUrl: '',
      liveUrl: ''
    };
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
  }

  handleChangeMessage(e) {
    let title = '';
    let message = '';
    let gitHubUrl = '';
    let liveUrl = '';

    switch(e.target.id) {
      case 'rainbow-red':
        title = 'Writer Duel';
        message = 'A multiplayer word game. Think competitive text twist. Two players are given the same 9 letters. The player with the greatest number of tiles accepted at the end of a minute wins.\nReact | Google Firebase | Custom Dictionary Module';
        gitHubUrl = 'https://github.com/alexjgaw/writerduel';
        liveUrl = 'http://writer-duel.s3-website.us-east-2.amazonaws.com/';
        break;
      case 'rainbow-orange':
        title = 'eventTracker';
        message = 'A simple solution for hiding an event registration form turned into a lesson on reusability, forethought, and more advanced JavaScript concepts such as closure and a JS approach to object orientation.\nVanilla JavaScript | Closure | Functional OOP';
        gitHubUrl = 'https://github.com/alexjgaw/bits-and-pieces/tree/master/eventTracker';
        liveUrl = '';
        break;
      case 'rainbow-yellow':
        title = 'Book Store';
        message = 'Quick project done as part of the Python Megacourse on Udemy. Simple, single-table SQLite database handles the books, Tkinter handles the frontend, and Python brings it all together.\nSQLite | Python | Tkinter';
        gitHubUrl = 'https://github.com/alexjgaw/bits-and-pieces/tree/master/bookstore';
        liveUrl = '';
        break;
      case 'rainbow-green':
        title = 'Contact List';
        message = 'Early project using React and Redux to keep track of contacts. No server included so I figured out how to use Google Firebase for the live version.\nReact | Redux | Google Firebase';
        gitHubUrl = 'https://github.com/alexjgaw/advanced-contact-list-starter';
        liveUrl = 'https://alexjgaw.github.io/contact-list/';
        break;
      case 'rainbow-blue':
        title = 'Fund That';
        message = 'Automatic donation platform. Is there a cause you care about at risk from the Trump administration? Fund that!\n React | Bootstrap | Redux | Express | MongoDB | Mongoose';
        gitHubUrl = 'https://github.com/alexjgaw/fund-that';
        liveUrl = '';
        break;
      case 'rainbow-purple':
        title = 'Tic Tac Toe';
        message = 'Simple game of tic tac toe.\n JavaScript | jQuery';
        gitHubUrl = 'https://github.com/alexjgaw/javascript-workbook/tree/gh-pages/apps/07jquery-tic-tac-toe';
        liveUrl = 'https://alexjgaw.github.io/javascript-workbook/apps/07jquery-tic-tac-toe/';
        break;
      default:
        return;
    }

    this.setState({
      messageTitle: title,
      message,
      gitHubUrl,
      liveUrl
    });
  }

  render() {
    return (
      <main className="App">
        <Cloud />
        <Greeting/>
        <Rainbow
          changeMessage={this.handleChangeMessage}
          title={this.state.messageTitle}
          text={this.state.message}
          gitHubUrl={this.state.gitHubUrl}
          liveUrl={this.state.liveUrl}
        />
        <Hill />
      </main>
    );
  }
}

export default App;
