import React from 'react';
import { Item, Button } from 'semantic-ui-react'

class VideoInfo extends React.Component {
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div style={{ paddingTop: '10px', marginBottom: '20px' }}>
                    <h3>{this.props.current.snippet.title}</h3>
                    <p>{Math.trunc(Math.random() * 10000000)} views</p>
                </div>
                <div style={{ padding: '30px 0', borderTop: 'solid 1px lightgrey', borderBottom: 'solid 1px lightgrey', position: 'relative' }}>
                    < Item style={{ display: 'flex', flexDirection: 'rows' }} >
                        <img className="bubble-image"
                            src={this.props.logo}
                            style={{ marginRight: '20px' }}
                        ></img>
                        <Item.Content>
                            <Item.Header ><strong>UserX</strong></Item.Header>
                            <p style={{ marginBottom: '20px', fontSize: '12px' }}> Publish on {new Date().toDateString()}</p>
                            <Item.Description>
                                <p>{this.props.current.snippet.description}</p>
                                <p style={{ marginTop: '20px' }}>Show More</p>
                            </Item.Description>
                            <Button style={{ marginRight: '20px', position: 'absolute', top: '30px', right: '30px', backgroundColor: '#FF4444', color: 'white' }}>Subscribe</Button>
                        </Item.Content>
                    </Item >
                </div>
            </React.Fragment >
        )
    }
}

export default VideoInfo
