import React from 'react';
import Item from './Item';
import logo from "../img/logo.png";

class Playlist extends React.Component {

    render() {
        let list = [];
        for (let i = 0; i < 12; i++) {
            list.push({ url: logo, name: "Item" + (i + 1), views: Math.trunc(Math.random() * 10000000) + ' views', description: "Music" })
        }
        return (<div>
            {list.map((item, num) => <Item key={num} info={item} />)}
        </div>)
    }
}

export default Playlist;