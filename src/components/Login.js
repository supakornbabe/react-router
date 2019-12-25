import React from "react";
import firebase from '../firebase';
import { logIn, logOut } from '../actions/auth';
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message: ''
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.logIn(user)
            }
        })
    }
    onChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
            this.props.logIn(response.user)
            console.log(this.props.currentUser)
        }).catch(error => { this.setState({ message: error.message }) })
    }
    logout = e => {
        e.preventDefault()
        firebase.auth().signOut().then(response => {
            this.props.logOut()
        })
    }
    render() {
        const { message } = this.state
        const { currentUser } = this.props
        console.log(currentUser)
        if (currentUser) {
            return (
                <div>
                    <p>Hello {currentUser}</p>
                    <button onClick={this.logout}>Logout</button>
                </div>
            )
        }
        return (
            <section className="section container">
                {message ? <p className="help is-danger">{message}</p> : null}
                <div className="columns is-centered">
                    <div className="column is-half">
                        <form onSubmit={this.onSubmit}>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" name="email" onChange={this.onChange} />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input className="input" type="password" name="password" onChange={this.onChange} />
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link">Submit</button>
                                </div>
                                <div className="control">
                                    <button className="button is-text">Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    logIn: (user) => dispatch(logIn(user)),
    logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);