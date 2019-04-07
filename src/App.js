import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, Header, Nav, Footer, CardContainer } from './components/index';

class App extends PureComponent {
  state = {
    cards: [
      {
        cardName: 'reid_richards',
        cardImage:
          'http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/standard_fantastic.jpg',
      },
      {
        cardName: 'spider_man',
        cardImage:
          'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b/standard_fantastic.jpg',
      },
      {
        cardName: 'cyclops',
        cardImage:
          'http://i.annihil.us/u/prod/marvel/i/mg/6/70/526547e2d90ad/standard_fantastic.jpg',
      },
    ],
  };
  
  componentWillMount() {}

  render() {
    return (
      <div className="App container">
        <Nav logo={logo}/>
        <Header />
      
        <div className="row">
          {this.state.cards.map((card) => {
            return (
              <Card
                key={card.cardName}
                src={card.cardImage}
                alt={card.cardName}
              />
            );
          })}
         
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
