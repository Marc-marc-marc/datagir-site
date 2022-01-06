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
export default function Search(props) {
  return (
    <Wrapper>
      Nombre de visites pour les{' '}
      <FancySelect
        fancy
        value={props.date}
        onChange={(e) => {
          console.log(e)
          props.setDate(e)
        }}
        options={[
          { value: '4', label: '4' },
          { value: '5', label: '5' },
          { value: '6', label: '6' },
          { value: '7', label: '7' },
          { value: '8', label: '8' },
          { value: '9', label: '9' },
          { value: '10', label: '10' },
          { value: '11', label: '11' },
          { value: '12', label: '12' },
          { value: '13', label: '13' },
          { value: '14', label: '14' },
          { value: '15', label: '15' },
          { value: '16', label: '16' },
          { value: '17', label: '17' },
          { value: '18', label: '18' },
          { value: '19', label: '19' },
          { value: '20', label: '20' },
          { value: '21', label: '21' },
          { value: '22', label: '22' },
          { value: '23', label: '23' },
          { value: '24', label: '24' },
          { value: '25', label: '25' },
          { value: '26', label: '26' },
          { value: '27', label: '27' },
          { value: '28', label: '28' },
          { value: '29', label: '29' },
          { value: '30', label: '30' },
          { value: '31', label: '31' },
        ]}
        color={props.color}
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
