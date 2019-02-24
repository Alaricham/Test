import React, { Component } from 'react';
import NavbarX from './NavbarX'
import Playlist from './Playlist2'
import Player from './Player';
import Comments from './Comments'
import '../css/App.css';
import { Row, Col } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarX />
        <Row>
          <Col md="9" style={{ paddingLeft: '100px', marginTop: '100px' }}>
            <BrowserRouter>
              <Player {...this.props} />
            </BrowserRouter>
            <Comments />
          </Col>
          <Col md="3" style={{ marginTop: '100px' }} >
            <Playlist />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
