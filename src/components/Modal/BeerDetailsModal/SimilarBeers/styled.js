import styled from 'styled-components'
import {Spinner} from "styled-icons/fa-solid";
import rem from "polished/lib/helpers/rem";

export const Wrapper = styled.div`
  margin-top: ${rem('30px')};
  flex: 0 0 100%;
  h5 {
    color: ${p => p.theme.colors.primary}
  }
`

export const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  grid-template-rows: 1fr 1fr 1fr;
  @media all and (min-width: 991px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid ${p => p.theme.colors.greyBluey };
    padding: ${rem('20px')};
    h4 {
      margin-bottom: 0
    }
  }
`

export const ItemImage = styled.div`
    background-image: url("${p => p.url}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
    min-height: 200px;
    margin-bottom: ${rem('20px')};
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const SpinnerIcon = styled(Spinner)`
  animation: spinner ${p => p.theme.transition.spinner};
  color: ${p => p.theme.colors.primary};
  height: ${rem('50px')};
  width: ${rem('50px')};
  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
`