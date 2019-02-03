import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import axios from '../../axios'
import attributes from './config';

import Header from '../Header'
import BeerCard from '../Home/BeerCard'
import { FormItemWrapper, StyledForm, Button } from "./styled";
import { LoadingWrapper, SpinnerIcon} from "../Favorites/styled";

class AdvancedSearch extends Component {
    state = {
        ibu_lt: '',
        ibu_gt: '',
        abv_lt: '',
        abv_gt: '',
        ebc_lt: '',
        ebc_gt: '',
        loading: false,
        showResults: false,
        beers: [],
        error: ''
    };
    handleFormInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleFormSubmit = (e) => {
        this.setState({ loading: true });
        e.preventDefault();
        const params = {
            ...this.state
        };
        Object.keys(params).forEach(key => params[key] === '' || key === 'loading' || key === 'beers' || key === 'error' || key === 'showResults' ? delete params[key] : '');
        axios.get('/beers', {params})
            .then(res => {
                this.setState({ beers: res.data, loading: false, showResults: true})
            })
            .catch(err => {
                this.setState({ error: err.message, loading: false })
            })
    };
    handleAttributesMap = () => {
        return attributes.map(item => (
            <Col key={item.id} xs={12} md={6} lg={6}>
                <FormItemWrapper>
                    <label htmlFor={item.id}>{item.label}:</label>
                    <input id={item.id} name={item.id} type="number" value={this.state[item.id]} onChange={this.handleFormInput} min={1} />
                </FormItemWrapper>
            </Col>
        ))
    };
    handleBeerCardsMap = () => {
        const { beers } = this.state;
        const { favorites } = this.props;
        return beers.map(i => {
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
    };
    render() {
        const attr = this.handleAttributesMap();
        const beerCards = this.handleBeerCardsMap();
        const { loading, showResults, beers } = this.state;
        return (
            <div>
                <Header title="Advanced Search" subtitle="Detailed Beer search"/>
                { loading && <LoadingWrapper><SpinnerIcon/></LoadingWrapper> }
                { !loading && !showResults &&
                    <StyledForm onSubmit={this.handleFormSubmit}>
                        <Grid>
                            <Row>
                                {attr}
                            </Row>
                            <Row>
                                <Col xs={12} md={12} lg={12}>
                                    <Button type="submit">Search</Button>
                                </Col>
                            </Row>
                        </Grid>
                    </StyledForm>
                }
                { !loading && showResults &&
                    <Grid>
                        <Button onClick={() => { this.setState({showResults: false }) }}>Back to search</Button>
                        <Row>
                            {beerCards}
                        </Row>
                    </Grid>
                }
                { !loading && showResults && beers.length < 1 && <div><p style={{textAlign: 'center'}}>No results found</p></div>}
            </div>
        );
    }
}

const mapStateToProps = ({ favorites }) => ({ favorites });

export default connect(mapStateToProps, null)(AdvancedSearch)