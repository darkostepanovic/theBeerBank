import React from 'react'
import { connect } from 'react-redux';
import { addFavorite, removeFavorite, getSingleBeer } from '../../../actions'

import { BeerCardWrapper, BeerImage, BeerTitle, BeerTagline, EmptyStarIcon, SolidStarIcon } from '../styled'

const BeerCard = props => {
    const { id, src, name, tagline,
        favorite, addFavorite, removeFavorite, getSingleBeer} = props;
    return (
        <BeerCardWrapper onClick={() => {getSingleBeer(id)}}>
            { favorite ?
                <SolidStarIcon onClick={(e) => {
                    e.stopPropagation();
                    removeFavorite(id)
                }}/> :
                <EmptyStarIcon onClick={(e) => {
                    e.stopPropagation();
                    addFavorite(id)
                }}/>
            }
            <BeerImage url={src}/>
            <BeerTitle>{ name }</BeerTitle>
            <BeerTagline>{ tagline }</BeerTagline>
        </BeerCardWrapper>
    )
};

export default connect(null, { addFavorite, removeFavorite, getSingleBeer })(BeerCard)