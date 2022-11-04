import { LogForm } from '@forms/LogForm'
import { useQuery } from '@apollo/client'
import { Container } from '@chakra-ui/react'

import { GET_LOGS } from '@queries/Log'

const Home = () => {
  const { loading, error, data } = useQuery(GET_LOGS)

  if (loading) { return <p> Loading </p> }
  if (error) { return <p> Error </p> }

  return (
    <Container>
      <LogForm/>
    </Container>
  )
}

export default Home
