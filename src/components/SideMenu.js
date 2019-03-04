import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class SideMenu extends Component {
    render() {
        const { activeItem } = this.state || {}
        return (<React.Fragment>
            <Menu vertical>
                <Menu.Item>
                    <Menu.Menu>
                        <Menu.Item
                            name='Home'
                            active={activeItem === 'Home'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Trending'
                            active={activeItem === 'Trending'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Subscriptions'
                            active={activeItem === 'Subscriptions'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Menu>
                        <Menu.Item
                            name='Library'
                            active={activeItem === 'Library'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='History'
                            active={activeItem === 'History'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Watch Later'
                            active={activeItem === 'Watch Later'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Purchases'
                            active={activeItem === 'Purchases'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Liked Videos'
                            active={activeItem === 'Liked Videos'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Menu>
                        <Menu.Item
                            name='Subscriptions'
                            active={activeItem === 'Subscriptions'}
                            onClick={this.handleItemClick}
                            style={{ marginBottom: '10px' }}
                        />
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Menu>
                        <Menu.Item
                            name='MORE FROM YOUTUBE'
                            active={activeItem === 'MORE FROM YOUTUBE'}
                            onClick={this.handleItemClick}
                            style={{ marginBottom: '10px' }}
                        />
                        <Menu.Item
                            name='Youtube Premium'
                            active={activeItem === 'Youtube Premium'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Report History'
                            active={activeItem === 'Report History'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Help'
                            active={activeItem === 'Help'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Send Feedback'
                            active={activeItem === 'Send Feedback'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

            </Menu>
        </React.Fragment>
        );
    }
}

export default SideMenu;