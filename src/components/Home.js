import React from "react";
import logo from '../static/logo192.png'
// import Action from '../actions';
import { connect } from 'react-redux'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <img src={logo} alt="Logo" />
                <h1>Welcome To Todos Please Login {this.props.currentUser}</h1>
            </div>

        )
    }
}

// export default Home;

const mapStateToProps = state => ({
    currentUser: state.currentUser
});
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);