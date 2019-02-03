import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-styled-flexboxgrid'
import throttle from 'lodash/throttle'

import { getBeers, resetBeers, handleSearchInput, handleChangePage } from "../../actions";

import BeerCard from './BeerCard';
import { SpinnerIcon, SpinnerWrapper } from './styled'
import Header from "../Header";

class Home extends Component {
    constructor(props) {
        super(props);
        this.throttledScroll = throttle(this.handleScroll, 500);
    }
    componentDidMount() {
        this.props.handleSearchInput('');
        if (this.props.beers.length < 1) {
            this.props.getBeers(this.props.page);
        }
        window.addEventListener('scroll', this.throttledScroll)
    }
    componentWillUnmount() {
        this.props.resetBeers();
        window.removeEventListener('scroll', this.throttledScroll);
    }
    handleScroll = () => {
        const {
            isLoading,
            error,
            getBeers,
            hasMore
        } = this.props;

        if (error || isLoading ) return;
        // Checks that the page has scrolled to the bottom
        if (
            (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
        ) {
            if (hasMore) {
                const newPage = this.props.page + 1;
                this.props.handleChangePage(newPage);
                getBeers(this.props.page);
            }
        }
    };
    render() {
        const { beers, favorites, noResults, loading, error } = this.props;
        const names = beers.map(i => {
            i.favorite = false;
            favorites.forEach(favorite => {
                if(i.id === favorite) {
                    i.favorite = true;
                }
            });
            return (
                <Col key={i.id} xs={12} md={6} lg={4}>
                    <BeerCard id={i.id} src={i.image_url} name={i.name} tagline={i.tagline} favorite={i.favorite}/>
                </Col>
            )
        });
        return (
            <>
                <Header title="The Beer Bank" subtitle="Find your favourite beer here"/>
                <main>
                    <Grid>
                        <Row>
                            { loading && <SpinnerWrapper><SpinnerIcon/></SpinnerWrapper> }
                            { noResults && <div>No results found</div>}
                            { !error && names.length > 0 ? names : null }
                        </Row>
                    </Grid>
                </main>
            </>
        );
    }
}

const mapStateToProps = state => {
    const { beers, loading, noResults, page, error, hasMore } = state.beersData;
    const { favorites } = state;
    return {
        beers,
        error,
        favorites,
        hasMore,
        loading,
        noResults,
        page,
    }
};

export default connect(mapStateToProps, { getBeers, resetBeers, handleSearchInput, handleChangePage })(Home);