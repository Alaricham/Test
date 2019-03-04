import React from 'react';
import logo from "../img/placeholder.jpg";
import ItemVideo from './ItemVideo'

class Playlist extends React.Component {

    render() {
        let list = [];
        let settings = {
            image: logo,
            extra: Math.trunc(Math.random() * 10000000) + ' views',
        }
        for (let i = 0; i < 12; i++) {
            list.push(<ItemVideo key={i} info={{ ...settings, header: 'Item ' + (i + 1), childKey: i }} />)
        }
        return (<div>
            {list}
        </div>)
    }
}

export default Playlist;