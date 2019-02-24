import React from 'react';
import { Media, Button } from 'react-bootstrap'

class VideoInfo extends React.Component {
    render() {

        return (
            <React.Fragment>
                <div style={{ paddingTop: '10px', marginBottom: '20px' }}>
                    <h3>Video Test</h3>
                    <p>{Math.trunc(Math.random() * 10000000)} views</p>
                </div>
                <div style={{ padding: '30px 0', borderTop: 'solid 1px lightgrey', borderBottom: 'solid 1px lightgrey' }}>
                    <Media>
                        <img
                            className="mr-3"
                            src={this.props.logo}
                            alt="Generic placeholder"
                            style={{ borderRadius: '100%', width: '50px', height: '50px' }}
                        />
                        <Media.Body>
                            <div>
                                <p><strong>UserX</strong></p>
                                <p style={{ marginBottom: '20px', fontSize: '12px' }}> Publish on {new Date().toDateString()}</p>
                                <p>Really really good video</p>
                                <p style={{ marginTop: '20px' }}>Show More</p>
                            </div>
                        </Media.Body>
                        <Button style={{ marginRight: '20px' }} variant="danger">Subscribe</Button>
                    </Media>
                </div>
            </React.Fragment >
        )
    }
}

export default VideoInfo