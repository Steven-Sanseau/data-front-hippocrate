import gql from 'graphql-tag'

export const GET_STEP = gql`
  query {
    steps(sort: "order") {
      _id
      title
      order
      principle {
        _id
        title
        detail {
          _id
          title
          text
        }
      }
    }
  }
`
