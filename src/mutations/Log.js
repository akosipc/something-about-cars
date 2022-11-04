import { gql } from '@apollo/client'

export const ADD_LOG = gql`
  mutation AddLog($object: logs_insert_input!) {
    insert_logs_one(object: $object) {
      id
      type
      amount
      comments
    }
  }
`
