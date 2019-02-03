import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { StyledHeader } from "./styled";
import Navigation from './Nav'
import Title from './Title'
import Search from './Search'

class Header extends Component {
    render() {
        const { pathname } = this.props.location;
        const { title, subtitle } = this.props;
        return (
            <StyledHeader home={pathname === '/'}>
                <Navigation/>
                <Title title={title} subtitle={subtitle}/>
                {pathname === '/' &&
                    <>
                        <Search/>
                    </>
                }
            </StyledHeader>
        )
    }
}

export default withRouter(Header)