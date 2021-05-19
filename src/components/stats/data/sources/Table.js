import React from 'react'
import styled from 'styled-components'

import Tile from 'src/components/layout/Tile'

const Wrapper = styled.table`
  table-layout: fixed;
  width: 100%;
  margin-bottom: 0.5rem;
  background-color: ${(props) => props.theme.colors.background};
  border-bottom: 2px solid ${(props) => props.theme.colors.input};
  border-collapse: collapse;
  overflow: hidden;

  tr:nth-child(2n + 1) {
    background-color: ${(props) => props.theme.colors.tile};
  }

  th {
    font-size: 0.875rem;
    text-align: left;
    border-bottom: 2px solid ${(props) => props.theme.colors.title};
  }
  th {
    padding: 0.75rem;
  }
  td {
    font-size: 0.8125rem;
    width: 60%;
    padding: 0.75rem;
  }
  td + td,
  th + th {
    width: 20%;
    font-weight: 700;
    text-align: right;
  }
`
const Text = styled.p`
  margin: 0;
  font-size: 0.75rem;
  font-weight: 300;
  text-align: right;
`
export default function Table(props) {
  return (
    <Tile.Tile large>
      <Tile.Content>
        <Wrapper>
          <tbody>
            <tr>
              <th>{props.title}</th>
              <th>Visites</th>
              <th>%</th>
            </tr>
            {props.data &&
              props.data.map((line) => (
                <tr key={line.label + line.nb_visits}>
                  <td>{line.label}</td>
                  <td>{line.nb_visits}</td>
                  <td>
                    {props.total &&
                      Math.round((line.nb_visits / props.total) * 10000) / 100}
                    %
                  </td>
                </tr>
              ))}
          </tbody>
        </Wrapper>
        <Text>Données valables pour les 30 derniers jours</Text>
      </Tile.Content>
    </Tile.Tile>
  )
}