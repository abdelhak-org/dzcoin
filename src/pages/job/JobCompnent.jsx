import React from 'react'
import { Container } from 'react-bootstrap'
import {useAuthContext} from "../../hooks/useAuthContext"
const JobComponent = () => {
   const {user } = useAuthContext()
   console.log(user)
  return (
    <Container>
        jobPage
        loged as {user?.email}
    </Container>
  )
}

export default JobComponent
