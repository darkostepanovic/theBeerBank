import styled from 'styled-components'
import { rem } from 'polished'
import { Close } from 'styled-icons/material/Close'

export const ModalWrapper = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width:100%;
  z-index: 1;
`;

export const ModalBody = styled.div`
  background-color: ${p => p.theme.colors.white};
  border-radius: 7px;
  max-height: 80%;
  overflow-y: scroll;
  width: 90%;
  @media all and (min-width: 991px) {
    width: 60%;
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${rem('20px')} ${rem('30px')};
`;

export const CloseButton = styled.div`
  cursor: pointer;
  flex: 0 0 100%;
  text-align: right;
`;

export const CloseButtonIcon = styled(Close)`
  height: ${rem('30px')};
  width: ${rem('30px')};
`

export const Image = styled.div`
  background-image: url("${p => p.url}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  flex: 0 0 100%;
  height: ${rem('200px')};
  @media all and (min-width: 991px) {
    flex: 0 0 30%;
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  flex: 0 0 100%;
  @media all and (min-width: 991px) {
    flex: 0 0 70%;
  }
  ul {
    padding-left: 15px;
  }
`;

export const Title = styled.h4`
  color: ${p => p.theme.colors.primary};
  margin-bottom: 0;
`

export const Tagline = styled.p`
  color: ${p => p.theme.colors.greyBluey};
  margin-bottom: ${rem('10px')}
`

export const Divider = styled.div`
  background-color: ${p => p.theme.colors.primary};
  height: ${rem('4px')};
  margin-bottom: ${rem('10px')};
  width: 20%;
`

export const AttributesWrapper = styled.div`
  display: flex;
  flex: 0 0 100%;
  flex-wrap: wrap;
  p {
    margin-right: ${rem('10px')};
  }
`

export const LoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 400px;
  justify-content: center;
  width: 100%;
`

