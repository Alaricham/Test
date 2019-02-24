import React from 'react';
import { Media } from 'react-bootstrap'

class Item extends React.Component {

    render() {

        return (<div className="separator">
            <Media>
                <img
                    width={100}
                    height={80}
                    className="mr-3"
                    src={this.props.info.url}
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <p><strong>{this.props.info.name}</strong></p>
                    <p>{this.props.info.views}</p>
                    <p>{this.props.info.description}</p>
                </Media.Body>
            </Media>
        </div>)

    }
}

export default Item;