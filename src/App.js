import React, { PureComponent } from 'react';
import logo from './images/TotalRecall.png';
import './App.css'
import cards from './utils/carddata';
import { Card, Header, Nav, Footer } from './components/index';
const log = console.log;

class App extends PureComponent {
  state = {
    cards: cards,
    guessedCards: [],
    currentScore: 0,
    highScore: 0,
  };

  shuffleCards = () => {
    // used Durstenfeld shuffle
    const array = this.state.cards
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    this.setState({
      cards: array
    })
  };

  componentWillMount(){
    this.shuffleCards()
  }
  checkHighScore = () => {
    let currentScore = this.state.currentScore;
    this.shuffleCards();
    if (currentScore > this.state.highScore) {
      return this.setState({ highScore: currentScore },()=>{
        log('New High Score!')
      });
    }
  };

  clickHandler = (event) => {
    const clickedCard = event.target.alt;
    log(this.state.guessedCards.indexOf(clickedCard));
    // Test to see if the card has already been guessed
    //If the card has already been guessed
    if (this.state.guessedCards.indexOf(clickedCard) >= 0) {
      return this.setState(
        {
          currentScore: (this.currentScore = 0),
          //Resets guessed cards to an Empty Array
          guessedCards: [],
        },
        () => {
          this.shuffleCards();
          log('game reset!');
        },
      );
    }
    //If the card has not already been guessed
    this.setState(
      (state) => {
        const newGuessedCards = [...state.guessedCards, clickedCard];
        let currentScore = this.state.currentScore;
        return {
          guessedCards: newGuessedCards,
          currentScore: (currentScore += 1),
        };
      },
      //Calls checkHighScore Method to test if adjusted score is higher than high score
      this.checkHighScore,
    );
  };

  render() {
    const { currentScore, highScore, cards } = this.state;
    return (
      <div className="App container">
        <Nav logo={logo} score={currentScore} highScore={highScore} />
        <Header />

        <div className="row">
          {cards.map((card) => {
            return (
              <Card
                key={card.cardName}
                src={card.cardImage}
                alt={card.cardName}
                onClick={this.clickHandler}
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
