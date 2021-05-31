import React from 'react'
import styled from 'styled-components'

import FancySelect from 'src/components/base/FancySelect'

const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  text-align: right;

  ${(props) => props.theme.mq.small} {
    font-size: 0.75rem;
    text-align: center;
  }
`
const Input = styled.input`
  width: 2rem;
  padding: 0;
  color: ${(props) => props.color || props.theme.colors.main};
  background-color: transparent;
  box-shadow: 0px 0.1em 0px 0px
    ${(props) => props.color || props.theme.colors.main};
  border: none;
  border-radius: 0.25rem 0.25rem 0 0;
`
export default function Search(props) {
  return (
    <Wrapper>
      Nombre de visites pour les{' '}
      <Input
        type='text'
        inputmode='numeric'
        pattern='[0-9]*'
        value={props.date}
        color={props.color}
        onChange={(e) => props.setDate(e.currentTarget.value)}
      />{' '}
      derni
      {props.period === 'week' ? 'ère' : 'er'}s{' '}
      <FancySelect
        fancy
        value={props.period}
        onChange={props.setPeriod}
        options={[
          { value: 'day', label: 'jours' },
          { value: 'week', label: 'semaines' },
          { value: 'month', label: 'mois' },
        ]}
        color={props.color}
      />
    </Wrapper>
  )
}
