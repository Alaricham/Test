import React, { Component } from 'react';
import ItemVideo from './ItemVideo'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class SearchResultsBox extends Component {
    state = { data: [] }

    linkTo = event => {
        this.props.history.push('/' + event.target.parentNode.parentNode.parentNode.id)
    }

    componentDidMount() {
        axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: 'AIzaSyAaI00g4VFIr0rzuwwhcIQ0LngyECQtk58',
                'maxResults': '25',
                'part': 'snippet',
                'q': this.props.search,
                'type': 'video'
            }
        }).then(results => { console.log(results.data); this.setState({ data: results.data.items }) })
    }
    render() {
        let list = this.state.data;
        let listReady = []
        for (let i = 0; i < list.length; i++) {
            let settings = {
                channel: list[i].snippet.channelTitle,
                header: list[i].snippet.title,
                image: list[i].snippet.thumbnails.medium.url,
                extra: list[i].snippet.description,
            }
            listReady.push(<div id={list[i].id.videoId} key={i}><ItemVideo info={{ ...settings }} /></div>)
        }
        return (<div onClick={this.linkTo}>
            {listReady}
        </div>
        );
    }
}

export default withRouter(SearchResultsBox);