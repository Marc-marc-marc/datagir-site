import React, { useState } from 'react'
import styled from 'styled-components'

import Tile from 'src/components/layout/Tile'
import Table from './sources/Table'

const Title = styled.h3`
  text-align: center;
`
export default function Sources(props) {
  const [newWebsites, setNewWebsites] = useState(false)
  return (
    <>
      <Title>Origine des visites</Title>
      <Tile.Wrapper>
        {newWebsites ? (
          <Table
            title='Nouveaux'
            data={props.websites.filter(
              (website) =>
                !props.oldWebsites.find(
                  (oldWebsite) => oldWebsite.label === website.label
                )
            )}
            total={props.total}
            setNewWebsites={setNewWebsites}
            newWebsites={newWebsites}
          />
        ) : (
          <Table
            title='Sites Web'
            data={props.websites}
            total={props.total}
            limit={10}
            setNewWebsites={setNewWebsites}
            newWebsites={newWebsites}
          />
        )}
        <Table
          title='Réseaux Sociaux'
          data={props.socials}
          total={props.total}
          limit={10}
        />
        <Table
          title='Recherches'
          data={props.keywords}
          total={props.total}
          limit={10}
        />
      </Tile.Wrapper>
    </>
  )
}
