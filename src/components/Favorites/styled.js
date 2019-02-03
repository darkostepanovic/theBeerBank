import styled from 'styled-components'
import { Spinner } from 'styled-icons/fa-solid/Spinner'
import { rem } from 'polished'

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
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