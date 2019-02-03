import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'
import { connect } from 'react-redux'
import axios from '../../axios'

import Header from "../Header";
import BeerCard from "../Home/BeerCard";

import { LoadingWrapper, SpinnerIcon} from "./styled";

class Favorites extends Component {
    state = {
        error: '',
        favorites: [],
        ids: [],
        loading: false
    };
    componentDidMount() {
        if(this.state.favorites.length === 0) {
            this.getFavorites();
        }
    }
    getFavorites = async () => {
        this.setState({ loading: true});
        try {
            const query = this.props.favoritesIds.join('|');
            const res = await axios.get('/beers', {
                params: {
                    ids: query
                }
            });
            this.setState({ favorites: res.data, ids: this.props.favoritesIds, loading: false })
        } catch (e) {
            this.setState({ error: e.message, loading: false})
        }

    };
    render() {
        const { favorites, loading } = this.state;
        const { favoritesIds } = this.props;
        const favoriteBeers = favorites.map(i => {
            return favoritesIds.map(id => {
                if(id === i.id) {
                    return (
                        <Col key={i.id} xs={12} md={6} lg={4}>
                            <BeerCard id={i.id} src={i.image_url} name={i.name} tagline={i.tagline} favorite={true}/>
                        </Col>
                    )
                } else return null
            })
        });
        return (
            <>
                <Header title="Your Favorite Beer" subtitle="List of chosen favorite beers"/>
                <Grid>
                    <Row>
                        { loading && <LoadingWrapper><SpinnerIcon/></LoadingWrapper>}
                        {!loading && favoriteBeers.length > 0 ?
                            favoriteBeers :
                            <Col xs={12} md={12} lg={12} style={{textAlign: 'center'}}>No favorites chosen</Col>
                        }
                    </Row>
                </Grid>
            </>
        )
    }
}

const mapStateToProps = ({ favorites }) => ({
    favoritesIds: favorites
});

export default connect(mapStateToProps, null)(Favorites)