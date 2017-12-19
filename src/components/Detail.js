import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserStore from '../facades/userStore';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { user: {} }
    }

    componentWillMount() {
        let index = this.props.match.params.index;
        console.log(index);
        UserStore.getUserWithIndex(index, (user => {
            this.setState({ user });
        }))
    }

    formatUserDetails = () => {
        let user = this.state.user;
        return (
            <div>
                <h1>Details for {user.first + " " + user.last}</h1>
                <img src={user.picture.large} alt={user.picture.large} />
                <h3>First Name: {user.first}</h3>
                <h3>Last Name: {user.last}</h3>
                <h3>Address: {user.street + ", " + user.city + ", " + user.zip + ", " + user.state}</h3>
            </div>
        )
    }

    render() {
        const user = JSON.stringify(this.state.user);
        return (
            <div>
                {user !== "{}" && (
                    this.formatUserDetails()
                )}
                {user === "{}" && (
                    <h1>User does not exist yet</h1>
                )}
                <Link to="/all"><button>Back!</button></Link>
            </div>
        )
    }
}
