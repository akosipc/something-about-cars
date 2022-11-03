import { gql, useQuery } from '@apollo/client'

const Home = () => {
  const { loading, error, data } = useQuery(GET_LOGS)

  if (loading) { return <p> Loading </p> }
  if (error) { return <p> Error </p> }

  console.log(data)

  return (
    <h1>
      Test
    </h1>
  )
}

export default Home

const GET_LOGS = gql`
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
