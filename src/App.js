import React from 'react';
import Flip from './components/Flip'
import NewCard from './components/NewCard'
import './App.css';
import { anyTypeAnnotation } from '@babel/types';

class App extends React.Component {

  constructor(props) {
    super(props)
    
    // Build the card data
    const cards = props.cards.map((card,i) => ({ my_lang : card.my_lang, forreign_lang : card.forreign_lang, factor: 100 }))

    var ix = this.randomizeCard(cards);

        // Set the state, the cards and the first random displayed
        this.state = {
          cards: cards,
          currentCard: ix        }
   
  }

  randomizeCard(cards) {

    var ix,card

    // Kolla om det finns kort kvar ens
    var remaining = cards.filter((card) => card.factor > 0).length
    if(remaining <= 0) 
      return -1

    console.log("Remaining: ", remaining)
    do {
      ix = Math.floor(Math.random() * this.props.cards.length)
      card = cards[ix]  
    }
    while((Math.random() * 100) > card.factor  )

    return ix

  }

  rateHard() {
    console.log("Rate hard: ",this.state.cards[this.state.currentCard].my_lang)
    var cards = this.state.cards;
    cards[this.state.currentCard].factor += cards[this.state.currentCard].factor < 100 ? 10 : 0
    var ix = this.randomizeCard(this.state.cards)
    this.setState({currentCard: ix})
  }

  rateEasy() {
    console.log("Rate easy: ",this.state.cards[this.state.currentCard].my_lang)
    var cards = this.state.cards;
    cards[this.state.currentCard].factor -= cards[this.state.currentCard].factor > 10 ? 10 : 0
    var ix = this.randomizeCard(this.state.cards)
    this.setState({currentCard: ix, cards: cards})
  }

  removeCard() {
    console.log("Remove card: ",this.state.cards[this.state.currentCard].my_lang)
    var cards = this.state.cards;
    cards[this.state.currentCard].factor = 0;
    var ix = this.randomizeCard(this.state.cards)
    this.setState({currentCard: ix, cards: cards})
  
  }

  render() {

    console.log("Current card: ", this.state)
    const card = this.state.currentCard >= 0 ? this.state.cards[this.state.currentCard] : null

    return (
      <div className="App">
        <section className="section">
          <div className="container">
            <h1 className="title">Flipcard - Play</h1>
            <p className="subtitle is-small">
              <i>Just click the card to flip it and check your knowledge, if you feel that you know it you can delete it. Its also possible to add a new anytime, Happy learning!</i>
            </p>
  
            <Flip card={card} removeCard={this.removeCard.bind(this)} rateEasy={this.rateEasy.bind(this) } rateHard={this.rateHard.bind(this)} ></Flip>
  
            
          </div>
        </section>
        <section className="section">
          <div className="container">
            <NewCard></NewCard>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
