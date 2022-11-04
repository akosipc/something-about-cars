import { gql } from '@apollo/client'

export const GET_LOGS = gql`
  query GET_LOGS {
    logs {
      id
      data
      type
      amount
      location
      comments
    }
  }
`
