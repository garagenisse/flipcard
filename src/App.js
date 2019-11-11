import React from 'react';
import Flip from './components/Flip'
import NewCard from './components/NewCard'
import './App.css';
import { anyTypeAnnotation, tsImportEqualsDeclaration } from '@babel/types';

class App extends React.Component {

	constructor(props) {
		super(props)

		// Build the card data for the first flip if any, if not create a dummy as default
		const cards = props.flips[0].cards.map((card, i) => ({ my_lang: card.my_lang, forreign_lang: card.forreign_lang, factor: 100 }))
		// const cards = props.cards.map((card, i) => ({ my_lang: card.my_lang, forreign_lang: card.forreign_lang, factor: 100 }))

		var ix = this.randomizeCard(cards);

		// Set the state, the cards and the first random displayed
		this.state = {
			cards: cards,
			currentCard: ix
		}

	}

	randomizeCard(cards) {

		var ix, card

		// Kolla om det finns kort kvar ens
		var remaining = cards.filter((card) => card.factor > 0).length
		if (remaining <= 0)
			return -1

		console.log("Remaining: ", remaining)
		do {
			ix = Math.floor(Math.random() * cards.length)
			card = cards[ix]
		}
		while ((Math.random() * 100) > card.factor)

		return ix
	}

	rateHard() {
		console.log("Rate hard: ", this.state.cards[this.state.currentCard].my_lang)
		var cards = this.state.cards;
		cards[this.state.currentCard].factor += cards[this.state.currentCard].factor < 100 ? 10 : 0
		var ix = this.randomizeCard(this.state.cards)
		this.setState({ currentCard: ix })
	}

	rateEasy() {
		console.log("Rate easy: ", this.state.cards[this.state.currentCard].my_lang)
		var cards = this.state.cards;
		cards[this.state.currentCard].factor -= cards[this.state.currentCard].factor > 10 ? 10 : 0
		var ix = this.randomizeCard(this.state.cards)
		this.setState({ currentCard: ix, cards: cards })
	}

	removeCard() {
		console.log("Remove card: ", this.state.cards[this.state.currentCard].my_lang)

		this.setState(state => {
			const cards = this.state.cards.filter((elem, i) => { return !(this.state.currentCard === i) })
			return {
				cards: cards,
				currentCard: this.randomizeCard(cards)
			};
		});
	}

	handleNewCard(newCard) {
		newCard.factor = 100
		console.log("NewCard: ", newCard)

		this.setState(state => {
			const cards = state.cards.concat(newCard);
			return {
				cards: cards,
				currentCard: this.randomizeCard(cards)
			};
		});
	}

	render() {

		console.log("Current card: ", this.state)
		const card = this.state.currentCard >= 0 ? this.state.cards[this.state.currentCard] : null

		// Get the flips from prop
		let flipItems = this.props.flips.map((flip) =>
				<option key={flip.id}>{flip.name}</option>
			);

		return (


			<div className="App">
				<section className="section">
					<div className="container">
						<h1 className="title">Flipcard - Play</h1>
						<p className="subtitle is-small">
							<i>Klicka för att vända kort, lägg till nya eller tabort</i>
						</p>

						<Flip card={card} removeCard={this.removeCard.bind(this)} rateEasy={this.rateEasy.bind(this)} rateHard={this.rateHard.bind(this)} ></Flip>


					</div>
				</section>

				<section>
					<div className="container">
						<form>
							<div className="field">
								<div class="select">
									<select>{flipItems}
										{/* <option>Select dropdown</option>
										<option>With options</option> */}
									</select>
								</div>
							</div>
							<span className="tag">engelska<button className="delete is-small"></button></span>
							<span className="tag">engelska<button className="delete is-small"></button></span>
							<span className="tag">engelska<button className="delete is-small"></button></span>
							<span className="tag">engelska<button className="delete is-small"></button></span>
							<span className="tag">engelska<button className="delete is-small"></button></span>
							<span className="tag">glosor<button className="delete is-small"></button></span>
							<span className="tag">vecka 34<button className="delete is-small"></button></span>
							<div className="field">
								<div className="control">
									<input className="input is-small" type="text" placeholder="Normal input" />
								</div>
							</div>
						</form>
					</div>
				</section>

				<section className="section">
					<div className="container">
						<NewCard newCardSubmitHandler={this.handleNewCard.bind(this)}></NewCard>
					</div>
				</section>
			</div>
		);
	}
}

export default App;
