import React from 'react'

import { TitleWrapper } from "../styled";

export default (props) => (
    <TitleWrapper>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
    </TitleWrapper>
)
