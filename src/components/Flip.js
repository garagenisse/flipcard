import React from 'react'

class Flip extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            flipped: false,
            my_lang: '',
            forreign_lang: ''
        }
        console.log("Construct flip")
    }

    newMyLangHandler = (event) => {
        this.setState({ my_lang: event.target.value });
    }
    newForreignLangHandler = (event) => {
        this.setState({ forreign_lang: event.target.value });
    }

    toggleCard() {
        this.setState({ flipped: !this.state.flipped });
    }
    render() {

        if (this.props.card == null)
            return (<h1>Well done, or cheater!!!</h1>)
        const { rateEasy, rateHard, removeCard } = this.props
        if (this.state.flipped) {
            return (
                <div className="flip">
                    <div className="notification is-info">
                        <button className="delete" onClick={() => { removeCard(); this.toggleCard() }}></button>
                        <div className="box">
                            <div className="field">
                                <button className="button is-success is-large" onClick={this.toggleCard.bind(this)}>{this.props.card.my_lang}</button>
                            </div>
                            <div className="buttons is-grouped is-centered">
                                <div className="control">
                                    <button className="button is-success" onClick={() => { rateEasy(); this.toggleCard() }}>Lätt</button>
                                </div>
                                <div className="control">
                                    <button className="button is-danger" onClick={() => { rateHard(); this.toggleCard() }}>Svårt</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)

        }
        else {
            return (
                <div className="flip">
                    <div className="notification is-info">
                        <div className="box">
                            <button className="button is-success is-large" onClick={this.toggleCard.bind(this)}>{this.props.card.forreign_lang}</button>
                        </div>
                    </div>
                </div>)
        }
    }
}

export default Flip