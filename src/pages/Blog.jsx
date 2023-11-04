import { Container } from "react-bootstrap";
import PostCard from "../components/PostCard";
const Blog = () => {
  
  return (
    <Container className=' px-0 ' style={{height:"100vh" , margin:"16px auto", minHeight:"100vh"}}>
      <h3 className="text-center py-2 bg-warning">Articles </h3>
     <PostCard/>
     <PostCard/>
     <PostCard/>
     <PostCard/>
     <PostCard/>
     <PostCard/>
 

    </Container>
  )
};

export default Blog;
