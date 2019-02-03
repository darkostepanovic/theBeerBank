import React, { Component } from 'react'
import debounce from 'lodash/debounce'
import { connect } from 'react-redux'
import { getBeers, handleSearchInput } from '../../../actions'

import { StyledInput, StyledLink, InputWrapper } from "../styled";

class Search extends Component {
    constructor(props) {
        super(props);
        this.debouncedSearch = debounce((event) => {
            this.props.getBeers(null, event);
        }, 500)
    }
    handleSearchInput = (e) => {
        e.persist();
        this.debouncedSearch(e.target.value);
        this.props.handleSearchInput(e.target.value);
    };
    render() {
        return (
            <InputWrapper>
                <StyledInput type="text" placeholder="Search for beer here" value={this.props.term} onChange={this.handleSearchInput}/>
                <StyledLink to="/advanced-search">Advanced Search</StyledLink>
            </InputWrapper>
        );
    }
}

const mapStateToProps = ({ beersData }) => ({ term: beersData.term });

export default connect(mapStateToProps, { getBeers, handleSearchInput })(Search)