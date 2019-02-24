import React from 'react';
import { Media } from 'react-bootstrap'

class UserPost extends React.Component {
    render() {

        return (
            <div className="separator" >
                <Media>
                    <img
                        className="mr-3"
                        src={this.props.info.url}
                        alt="Generic placeholder"
                        style={{ borderRadius: '100%', width: '50px', height: '50px', paddingLeft: '10px' }}
                    />
                    <Media.Body>
                        <p style={{ paddingBottom: '10px' }}><strong>{this.props.info.name}</strong></p>
                        <p>{this.props.info.comment}</p>
                        <i style={{ marginRight: '20px', marginTop: '20px' }} className="fas fa-thumbs-up"></i>
                        <i style={{ position: 'relative', top: '3px', marginRight: '20px' }} className="fas fa-thumbs-down"></i>
                        <p style={{ display: 'inline-block' }}>Reply</p>
                    </Media.Body>
                </Media>
            </ div>
        )
    }
}

export default UserPost