import React, { Component } from 'react';
import UserPost from './userPost'
import logo from "../img/logo.png";
import { withRouter } from 'react-router-dom'
import VideoInfo from './VideoInfo';

class Player extends Component {
    render() {
        let history = this.props.history.location.pathname
        let style = {
            ['border-radius']: '5%'
        }
        return (
            <React.Fragment>
                <div>
                    <iframe width="900" height="500" src={"https://www.youtube.com/embed" + (history.length > 1 ? history : '/uN9g45ZuvxQ')} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div>
                    <VideoInfo logo={logo} />
                </div>
            </React.Fragment >
        );
    }
}

export default withRouter(Player);
