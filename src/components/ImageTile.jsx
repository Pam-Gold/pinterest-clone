import { Flex, Img } from "@chakra-ui/react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ImageTile = (props) => {
  return(
<Flex h="fit-content" w="fit-content"  >
  <Link to={props.id.toString()}>
  
  <Img src={props.urls.regular}  h={{base:`${props.height / 15}`, sm:`${props.height / 20}`, md:`${props.height / 15}`, lg:"350px", xl:"350px" }} w={{base:"200px", sm:"200px", md:"200px", lg:"100%", xl:"100%"}} borderRadius="20px"  bg={props.color}/>
  </Link>
</Flex>
  )
}

export default ImageTile; 