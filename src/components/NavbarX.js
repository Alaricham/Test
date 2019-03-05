import React from 'react';
import { Menu } from 'semantic-ui-react'
import logo from "../img/logo.png";
import { withRouter } from 'react-router-dom'

class NavbarX extends React.Component {
    state = { input: '' }
    searchRef = React.createRef()

    updateInput = event => {
        this.setState({ input: event.target.value })
    }

    passSearch = event => {
        if (event.key === 'Enter' || event.target.id === 'searchbtn' || event.target.className === "fas fa-search") {
            this.props.inputSearch(this.searchRef.current)
            this.setState({ input: '' })
            this.props.history.replace('/')
        }
    }


    render() {
        return (<Menu className='borderless' style={{ justifyContent: 'space-between', flexDirection: 'row', position: 'fixed', zIndex: '1', width: '100%' }}>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
                <Menu.Item header><i className="fas fa-bars"></i></Menu.Item>
                <Menu.Item ><img src={logo} style={{ width: '50px', height: '30px' }} /></Menu.Item >
            </div>
            <div  >
                <Menu.Item ><input ref={this.searchRef} id="searchbar" onKeyPress={this.passSearch} value={this.state.input} onChange={this.updateInput} /><button onClick={this.passSearch} id="searchbtn"><i className="fas fa-search"></i></button></Menu.Item >
            </div>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
                <Menu.Item ><i className="fas fa-video"></i></Menu.Item >
                <Menu.Item ><i className="fas fa-ellipsis-v"></i><i className="fas fa-ellipsis-v"></i><i className="fas fa-ellipsis-v"></i></Menu.Item >
                <Menu.Item ><i className="fas fa-comment-medical"></i></Menu.Item >
                <Menu.Item ><i className="fas fa-bell"></i></Menu.Item >
                <Menu.Item ><i className="fas fa-user"></i></Menu.Item >
            </div>
        </Menu >)

    }
}

export default withRouter(NavbarX);