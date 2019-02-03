import styled from 'styled-components'
import { rem } from 'polished'

export const FormItemWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${rem('20px')};
  label {
    flex: 0 0 25%;
  }
  input {
    flex: 0 0 75%;
  }
`;

export const SelectItemWrapper = styled(FormItemWrapper)`
  flex-direction: column;
  justify-content: flex-start;
`

export const StyledForm = styled.form`
  margin: ${rem('40px')} ${rem('60px')};
`

export const Button = styled.button`
  background-color: ${p => p.theme.colors.primary};
  border: none;
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  margin: ${rem('20px')} 0;
  padding: ${rem('8px')} ${rem('40px')};
  text-transform: uppercase;
`
