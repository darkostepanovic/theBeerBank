import 'react-date-range/dist/styles.css'; // main style file for date range
import 'react-date-range/dist/theme/default.css'; // theme css file date range
import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment'
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import { Calendar } from 'react-date-range';
import axios from '../../axios'

import attributes from './config';

import Header from '../Header'
import BeerCard from '../Home/BeerCard'
import { FormItemWrapper, SelectItemWrapper, StyledForm, Button } from "./styled";
import { LoadingWrapper, SpinnerIcon} from "../Favorites/styled";

class AdvancedSearch extends Component {
    state = {
        ibu_lt: '',
        ibu_gt: '',
        abv_lt: '',
        abv_gt: '',
        ebc_lt: '',
        ebc_gt: '',
        brewed_before: null,
        brewed_after: null,
        loading: false,
        showResults: false,
        beers: [],
        error: ''
    };
    handleFormInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleParams = () => {
        const rangeBefore = this.state.brewed_before !== null ? moment(this.state.brewed_before).format('MM-YYYY') : false;
        const rangeAfter = this.state.brewed_after !== null ? moment(this.state.brewed_after).format('MM-YYYY') : false;
        const params = {
            ...this.state
        };
        let query = {};

        Object.keys(params).forEach(key => params[key] === '' ||
        key === 'loading' ||
        key === 'beers' ||
        key === 'error' ||
        key === 'brewed_before' ||
        key === 'brewed_after' ||
        key === 'showResults' ?
            delete params[key] : '');

        if(rangeBefore) {
            if(rangeAfter) {
                query = {...params, brewed_before: rangeBefore, brewed_after: rangeAfter}
            } else {
                query = {...params, brewed_before: rangeBefore}
            }
        } else if (rangeAfter) {
            query = {...params, brewed_after: rangeAfter}
        } else {
            query = {...params}
        }

        return query;
    };
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const params = this.handleParams();
        axios.get('/beers', {params})
            .then(res => {
                this.setState({
                    beers: res.data,
                    loading: false,
                    showResults: true
                })
            })
            .catch(err => {
                this.setState({
                    error: err.message,
                    loading: false
                })
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
    handleSelectAfter = (date) => {
        this.setState({ brewed_after: date})
    };
    handleSelectBefore = (date) => {
        this.setState({ brewed_before: date})
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
                                <Col xs={12} md={6} lg={6}>
                                    <SelectItemWrapper>
                                        <label htmlFor="brewed_after">Brewing after</label>
                                        <Calendar
                                            id="brewed_after"
                                            name="brewed_after"
                                            maxDate={new Date()}
                                            date={this.state.brewed_after}
                                            onChange={this.handleSelectAfter}
                                        />
                                    </SelectItemWrapper>
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <SelectItemWrapper>
                                        <label htmlFor="brewed_before">Brewing before</label>
                                        <Calendar
                                            id="brewed_before"
                                            name="brewed_before"
                                            maxDate={new Date()}
                                            date={this.state.brewed_before}
                                            onChange={this.handleSelectBefore}
                                        />
                                    </SelectItemWrapper>
                                </Col>
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