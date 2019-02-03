import styled from 'styled-components'
import { rem } from 'polished'

export const StyledHeader = styled.header`
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  min-height: ${p => p.home ? rem('270px') : 'auto'};
  padding: ${rem('10px')};
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 0;
  a {
    margin-left: ${rem('10px')};
    text-transform: uppercase;
  }
`;

export const FixedNav = styled(StyledNav)`
  background-color: ${p => p.theme.colors.primary};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  padding: ${rem('10px')};
`

export const TitleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const StyledInput = styled.input`
  border: none;
  padding: ${rem('10px')};
  width: 100%;
  @media all and (min-width: 768px) {
    width: 700px;
  }
`;