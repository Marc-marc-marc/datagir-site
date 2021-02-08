import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Dropdown from './menu/Dropdown'
import Item from './menu/Item'

const Wrapper = styled.div`
  display: flex;
  font-size: 0.875em;

  ${(props) => props.theme.mq.medium} {
    display: none;
  }
`
export default function Menu() {
  const data = useStaticQuery(
    graphql`
      query {
        applications: allMdx(
          sort: { fields: frontmatter___order }
          filter: { fileAbsolutePath: { regex: "/applications/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        databases: allMdx(
          filter: { fileAbsolutePath: { regex: "/databases/" } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )
  return (
    <Wrapper>
      <Dropdown
        title={'Secteurs'}
        to={'/#sectors'}
        options={[
          { label: 'Alimentation', to: '/alimentation' },
          { label: 'Transport', to: '/transport' },
          { label: 'Logement', to: '/logement' },
        ]}
      />
      <Dropdown
        title={'Simulateurs'}
        to={'/#applications'}
        options={data.applications.edges.map((page) => ({
          label: page.node.frontmatter.title,
          to: `/apps${page.node.fields.slug}`,
        }))}
      />
      <Dropdown
        title={'Jeux de données'}
        to={'/#databases'}
        options={data.databases.edges.map((page) => ({
          label: page.node.frontmatter.title,
          to: `/databases${page.node.fields.slug}`,
        }))}
      />
      <Item to={'/qui-sommes-nous'}>Qui sommes nous</Item>
      <Item to={'/blog'}>Blog</Item>
      <Item to={'https://datagir.gitbook.io/documentation/'}>
        Documentation
      </Item>
    </Wrapper>
  )
}
