import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userStore from '../facades/userStore';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    componentWillMount() {
        userStore.getAllUsers(users => {
            this.setState({ users });
        })
    }

    render() {
        console.log(this.state.users);
        return (
            <div>
                <h3>Hello from users</h3>
                <table className="table">
                    <thead>
                        <tr key="tableheader">
                            <th></th>
                            <th>Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user, index) => (
                            <tr key={user.email}>
                                <td><img src={user.picture.thumbnail} alt={user.picture.thumbnail} /></td>
                                <td>{user.first + " " + user.last}</td>
                                <td><Link to={"/details/" + index}>Details</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/"><button>Back!</button></Link>
            </div>
        )
    }
}
