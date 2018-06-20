import gql from 'graphql-tag'

export const GET_STEP = gql`
  query {
    steps(sort: "order") {
      _id
      title
      order
      principle(sort: "order") {
        _id
        title
        order
        detail(sort: "order") {
          _id
          title
          text
          order
        }
      }
    }
  }
`
export const GET_PAGE = gql`
  query page($slug: String!) {
    pages(where: { slug: $slug }) {
      _id
      title
      content
      slug
    }
  }
`
