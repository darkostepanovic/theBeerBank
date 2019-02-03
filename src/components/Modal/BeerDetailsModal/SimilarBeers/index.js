import React, { Component } from 'react';
import axios from '../../../../axios';

import { Wrapper, ItemsWrapper, LoadingWrapper, SpinnerIcon } from "./styled";
import SingleItem from './SingleItem'

class SimilarBeers extends Component {
    state = {
        similarBeers: [],
        loading: false
    };
    componentDidMount() {
        const { ebc, abv, ibu, parentID } = this.props;
        this.setState({ loading: true });
        axios.get('/beers', {
            params: {
                page: 1,
                per_page: 4,
                ibu_gt: ibu - 10 > 0 ? (ibu-10).toFixed(0) : 1,
                ibu_lt: (ibu + 10).toFixed(0),
                ebc_gt: ebc - 10 > 0 ? (ebc-10).toFixed(0) : 1,
                ebc_lt: (ebc + 10).toFixed(0),
                abv_gt: abv - 1 > 0 ? (abv - 1).toFixed(0) : 1,
                abv_lt: (abv + 1).toFixed(0)
            }
        }).then(res => {
            let filtered = res.data.filter(i => i.id !== parentID);
            this.setState({ similarBeers: filtered, loading: false})
        }).catch(err => {
            alert(err.message);
            this.setState({ loading: false })
        })
    }
    render() {
        const { similarBeers, loading } = this.state;
        const similar = similarBeers.map(item => (
           <SingleItem key={item.id} item={item}/>
        ));

        return (
            <Wrapper>
                { loading ? <LoadingWrapper><SpinnerIcon/></LoadingWrapper> : (
                    <>
                    { similar.length > 0 && <h5>You might also like:</h5> }
                        <ItemsWrapper>
                            {similar}
                        </ItemsWrapper>
                    </>
                )}
            </Wrapper>
        );
    }
}

export default SimilarBeers;