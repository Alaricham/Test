import React from 'react';
import { Item } from 'semantic-ui-react';

class UserPost extends React.Component {
    render() {
        return (
            <div className="separator" >
                < Item style={{ display: 'flex', flexDirection: 'row' }}>
                    <img src={this.props.info.url} className="bubble-image" style={{ width: '50px', height: '50px', marginRight: '20px' }} />
                    <Item.Content>
                        <Item.Header style={{ paddingBottom: '10px' }} ><strong>{this.props.info.name}</strong></Item.Header>
                        <Item.Description>
                            <p>{this.props.info.comment}</p>
                            <i style={{ marginRight: '20px', marginTop: '20px' }} className="fas fa-thumbs-up"></i>
                            <i style={{ position: 'relative', top: '3px', marginRight: '20px' }} className="fas fa-thumbs-down"></i>
                            <p style={{ display: 'inline-block' }}>Reply</p>
                        </Item.Description>
                    </Item.Content>
                </Item >
            </ div >
        )
    }
}

export default UserPost
