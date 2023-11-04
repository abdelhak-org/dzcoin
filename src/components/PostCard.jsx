import React from 'react'
import { Button } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';



const PostCard = () => {
  return (
    <Accordion defaultActiveKey={['1']} alwaysOpen >
    <Accordion.Item eventKey="0">
      <Accordion.Header  >Accordion Item #1</Accordion.Header>
      <Accordion.Body className='bg-light'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      <Button variant="outline-info" className='mx-auto d-block my-2'>Read More </Button>
      </Accordion.Body>
    </Accordion.Item>
 
  </Accordion>
  )
}

export default PostCard
