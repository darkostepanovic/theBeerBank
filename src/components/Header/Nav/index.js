import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { StyledNav, FixedNav } from "../styled";

class Navigation extends Component {
    state = {
        fixed: false
    };
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, false)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false)
    }
    handleScroll = () => {
        window.scrollY > 0 ? this.setState({ fixed: true }) : this.setState({ fixed: false })
    };
    render() {
        let nav = (
            <StyledNav>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorite</Link>
            </StyledNav>
        );
        if (this.state.fixed) {
            nav = (
                <FixedNav>
                    <Link to="/">Home</Link>
                    <Link to="/favorites">Favorite</Link>
                </FixedNav>
            )
        }
        return (
            <div>
                {nav}
            </div>
        )
    }
}
export default Navigation