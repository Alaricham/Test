import React from 'react';
import logo from "../img/placeholder.jpg";
import ItemVideo from './ItemVideo'

class Playlist extends React.Component {

    render() {
        console.log(this.props.list)
        let list = this.props.list;
        let finalList = []
        for (let i = 0; i < list.length; i++) {
            let settings = {
                channel: list[i].snippet.channelTitle,
                header: (list[i].snippet.title).substring(0, 20) + '...',
                image: list[i].snippet.thumbnails.medium.url,
                extra: Math.trunc(Math.random() * 10000000) + ' views',
            }
            finalList.push(<div id={list[i].id.videoId} data-id={i} key={i}><ItemVideo info={{ ...settings }} /></div>)
        }
        return (<div>
            {finalList}
        </div>)
    }
}

export default Playlist;