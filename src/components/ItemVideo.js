import React from 'react';
import { Item } from 'semantic-ui-react';

class ItemVideo extends React.Component {
    render() {
        return (
            <div className="separator" >
                < Item key={this.props.info.childKey} style={{ display: 'flex', flexDirection: 'row' }}>
                    <div id="img" style={{
                        marginRight: '20px', backgroundImage: `url(${this.props.info.image})`, backgroundPosition: 'center', backgroundSize: 'cover'
                    }}></div>
                    <Item.Content>
                        <Item.Header style={{ paddingBottom: '10px' }} ><strong>{this.props.info.header}</strong></Item.Header>
                        <Item.Description>
                            <p><strong>{this.props.info.channel}</strong></p>
                            <p>{this.props.info.extra}</p>
                        </Item.Description>
                    </Item.Content>
                </Item >
            </ div>
        )
    }
}

export default ItemVideo
