import React from 'react'

class NewCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            my_lang: '',
            forreign_lang: ''
        }
    }

    newCardChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }

    render() {
        return (
            <form onSubmit={this.newCardSubmitHandler}>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Mitt språk" name="my_lang" onChange={this.newCardChangeHandler}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Nytt språk" name="forreign_lang" onChange={this.newCardChangeHandler} />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <button className="button is-success">Lägg till!</button>
            </form>)
    }
}

export default NewCard