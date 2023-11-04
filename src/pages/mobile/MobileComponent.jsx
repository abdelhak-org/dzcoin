import React from 'react'
import { Container ,Row } from 'react-bootstrap'
import MobileCard from '../../components/MobileCard'
const MobileComponent = () => {
  return (
   <Container >
    <Row className="gap-2 ">
    <MobileCard/>
    <MobileCard/>
    <MobileCard/>
    <MobileCard/>
    <MobileCard/>
    <MobileCard/>
    <MobileCard/>
    <MobileCard/>

    </Row>

   </Container>
  )
}

export default MobileComponent
