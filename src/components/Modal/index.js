import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeModal } from "../../actions";

import { ModalWrapper, ModalBody } from './styled'

class Modal extends Component {
    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }
    componentWillUnmount() {
        document.body.style.overflow = '';
    }
    render() {
        return (
            <ModalWrapper onClick={this.props.closeModal}>
                <ModalBody onClick={(e) => {e.stopPropagation()}}>
                    {this.props.children}
                </ModalBody>
            </ModalWrapper>
        )
    }
}

export default connect(null, { closeModal })(Modal)