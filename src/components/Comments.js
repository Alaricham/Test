import React from 'react';
import { Media } from 'react-bootstrap'
import UserPost from './userPost';
import logo from "../img/logo.png";

class Comments extends React.Component {
    state = {
        list: [
            { url: logo, name: "pop12", comment: " Great" },
            { url: logo, name: "erik", comment: " Cool" },
            { url: logo, name: "madcray", comment: " Sucks" }
        ]
    }

    render() {
        return (<div style={{ marginTop: '30px' }}>
            {this.state.list.map((item, num) => <UserPost key={num} info={item} />)}
        </div>)
    }
}

export default Comments