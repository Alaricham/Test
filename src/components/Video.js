import React, { Component } from 'react';
import Playlist from './Playlist2'
import Player from './Player';
import Comments from './Comments'
import { Grid } from 'semantic-ui-react'

class Video extends Component {
    render() {
        return (<React.Fragment>
            <Grid.Column width={11} style={{ paddingLeft: '120px', marginTop: '80px' }}>
                <Player {...this.props} />
                <Comments />
            </Grid.Column>
            <Grid.Column width={5} style={{ marginTop: '80px' }}  >
                <Playlist  {...this.props} />
            </Grid.Column>
        </React.Fragment>
        );
    }
}

export default Video;