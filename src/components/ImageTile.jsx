import { Flex, Img } from "@chakra-ui/react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ImageTile = (props) => {
  return(
<Flex h="fit-content" w="fit-content"  >
  <Link to={props.id.toString()}>
  
  <Img src={props.urls.regular}  h={{base:`${props.height / 25}`, sm:`${props.height / 20}`, md:`${props.height / 20}`, lg:"350px", xl:"350px" }} w={{base:"160px", sm:"220px", md:"200px", lg:"235px", xl:"235px"}} borderRadius="20px"  bg={props.color}/>
  </Link>
</Flex>
  )
}

export default ImageTile; 