import React, { Component } from 'react';
import NavbarX from './NavbarX'
import Video from './Video'
import Search from './Search'
import '../css/App.css';
import { Grid } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  state = { search: '', data: [] }

  inputSearch = event => {
    this.setState({ search: event.value })
  }
  render() {
    return (<BrowserRouter>
      <div className="App">
        <NavbarX inputSearch={this.inputSearch} />
        <Grid  >
          <Grid.Row columns={2}>
            <Switch>
              <Route path="/" exact render={(props) => <Search search={this.state.search} />} />
              <Route path="/:id" component={Video} />
            </Switch>
          </Grid.Row>
        </Grid>
      </div >
    </BrowserRouter>
    );
  }
}

export default App;
