import React from 'react'
import {ItemImage} from "../styled";

export default ({item}) => (
    <div>
        <ItemImage url={item.image_url}/>
        <h5 style={{ textAlign: 'center' }}>{item.name}</h5>
    </div>
)