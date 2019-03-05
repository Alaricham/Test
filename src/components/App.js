import React, { Component } from 'react';
import NavbarX from './NavbarX'
import Video from './Video'
import Search from './Search'
import '../css/App.css';
import { Grid } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  state = { current: [], search: '', data: [] }

  inputSearch = event => {
    this.setState({ search: event.value })
  }

  passCurrent = (current, data) => {
    this.setState({ current, data })
  }

  render() {
    return (<BrowserRouter>
      <div className="App">
        <NavbarX inputSearch={this.inputSearch} />
        <Grid  >
          <Grid.Row columns={2}>
            <Switch>
              <Route path="/" exact render={(props) => <Search
                search={this.state.search}
                passCurrent={this.passCurrent} />} />
              <Route path="/:id" render={(props) => <Video
                current={this.state.current}
                list={this.state.data}
              />} />
            </Switch>
          </Grid.Row>
        </Grid>
      </div >
    </BrowserRouter>
    );
  }
}

export default App;
