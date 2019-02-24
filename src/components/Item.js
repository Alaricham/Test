import React from 'react';
import { Media } from 'react-bootstrap'

class Item extends React.Component {

    render() {
        let { views, description, url } = this.props.info;

        return (<div className="separator">
            <Media>
                <img
                    width={100}
                    height={80}
                    className="mr-3"
                    src={url}
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <p><strong>{this.props.info.name}</strong></p>
                    <p>{views}</p>
                    <p>{description}</p>
                </Media.Body>
            </Media>
        </div>)

    }
}

export default Item;