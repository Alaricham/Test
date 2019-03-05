import React, { Component } from 'react';
import SideMenu from './SideMenu'
import SearchResultsBox from './SearchResultsBox';
import { Grid } from 'semantic-ui-react'

class Search extends Component {
    render() {
        return (<React.Fragment>
            <Grid.Column width={4} style={{ marginTop: '30px' }} >
                <SideMenu />
            </Grid.Column>
            <Grid.Column width={12} style={{ marginTop: '70px' }} >
                <SearchResultsBox
                    search={this.props.search}
                    passCurrent={this.props.passCurrent}
                />
            </Grid.Column>
        </React.Fragment>
        );
    }
}

export default Search;