import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeModal } from "../../../actions";

import { LoadingWrapper,
    AttributesWrapper,
    CloseButtonIcon,
    Divider,
    ModalContent,
    CloseButton,
    Image,
    TextWrapper,
    Title,
    Tagline
} from "../styled";
import { SpinnerIcon } from "../../Favorites/styled";
import SimilarBeers from './SimilarBeers';

class BeerDetailsModal extends Component {
    render() {
        const { closeModal, modal } = this.props;
        const { image_url, name, tagline, ibu, abv, ebc, description, food_pairing, id } = modal.modalData;
        let pairingList;
        if (food_pairing) {pairingList = food_pairing.map((i,index) => <li key={index}>{i}</li>);}
        return (
            <div>
                { modal.loadingModalData && <LoadingWrapper><SpinnerIcon/></LoadingWrapper> }
                { !modal.loadingModalData &&
                <ModalContent>
                    <CloseButton onClick={closeModal}><CloseButtonIcon/></CloseButton>
                    <Image url={image_url}/>
                    <TextWrapper>
                        <Title>{name}</Title>
                        <Tagline>{tagline}</Tagline>
                        <Divider/>
                        <AttributesWrapper>
                            <p><strong>IBU:</strong>{ibu}</p>
                            <p><strong>ABV:</strong>{abv}</p>
                            <p><strong>EBC:</strong>{ebc}</p>
                        </AttributesWrapper>
                        <p>{description}</p>
                        <p><strong>Best served with:</strong></p>
                        <ul>
                            {pairingList}
                        </ul>
                    </TextWrapper>
                    <SimilarBeers ebc={ebc} ibu={ibu} abv={abv} parentID={id}/>
                </ModalContent>

                }
            </div>
        );
    }
}

const mapStateToProps = ({ modal }) => ({ modal });

export default connect(mapStateToProps, { closeModal })(BeerDetailsModal);