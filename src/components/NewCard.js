import React from 'react'

class NewCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            my_lang: '',
            forreign_lang: '',
        }
    }

    addEditCardHandler = (event) => {
        // Check edit or add, no more validation, empty is fine with me
        
        let newCard = { 
            my_lang: this.state.my_lang,
            forreign_lang: this.state.forreign_lang,

        }

        // Send to parent
        this.props.newCardSubmitHandler(newCard)
        
        // Prevent default action of submit button
        event.preventDefault();
      };

    newCardChangeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        console.log("Changed: ", name, " to: ", val)
        this.setState({[name]: val});
      }

    render() {
        return (
            <form onSubmit={this.addEditCardHandler}>
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