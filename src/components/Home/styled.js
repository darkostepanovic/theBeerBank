import styled from 'styled-components'
import { Star } from 'styled-icons/boxicons-regular/Star'
import { Star as SolidStar } from 'styled-icons/boxicons-solid/Star'
import { Spinner } from 'styled-icons/fa-solid/Spinner'
import { rem } from 'polished'


export const BeerCardWrapper = styled.div`
    align-items: center;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.15);
    background-color: #fff;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    margin: ${rem('20px')} 0;
    min-height: ${rem('450px')};
    overflow: hidden;
    padding: ${rem('20px')};
    transition: all .5s ease;
    &:hover {
      box-shadow: ${p => p.theme.boxShadow.card};
      cursor: pointer;
      transition: all .5s ease;
    }
`;

export const BeerImage = styled.div`
  background-image: url("${p => p.url}");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  height: ${rem('250px')};
  width: 100%;
`;

export const BeerTitle = styled.h4`
  color: ${p => p.theme.colors.primary};
  margin: ${rem('10px')} 0;
  text-align: center;
`

export const BeerTagline = styled.p`
  color: ${p => p.theme.colors.greyBluey};
  margin: 0;
`

export const EmptyStarIcon = styled(Star)`
  align-self: flex-end;
  color: ${p => p.theme.colors.dark};
  cursor: pointer;
  width: ${rem('30px')};
  height: ${rem('30px')};
`;

export const SolidStarIcon = styled(SolidStar)`
  align-self: flex-end;
  color: ${p => p.theme.colors.primary};
  cursor: pointer;
  width: ${rem('30px')};
  height: ${rem('30px')};
`

export const SpinnerWrapper = styled.div`
  background-color: ${p => p.theme.colors.white};
  bottom: 0;
  left: 0;
  padding: ${rem('10px')} 0;
  position: fixed;
  text-align: center;
  width: 100%;
`

export const SpinnerIcon = styled(Spinner)`
  animation: spinner ${p => p.theme.transition.spinner};
  color: ${p => p.theme.colors.primary};
  height: ${rem('30px')};
  width: ${rem('30px')};
  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
`