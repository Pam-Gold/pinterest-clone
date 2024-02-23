import { Flex, Img } from "@chakra-ui/react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ImageTile = (props) => {
  return(
<Flex h="fit-content" w="fit-content"  >
  <Link to={props.id.toString()}>
  
  <Img src={props.urls.small}  h={{base:`${props.height > 4500? props.height / 25 : 300}`, sm:`${props.height > 5000? props.height / 20 : 300}`, md:`${props.height / 20}`, lg:"350px", xl:"350px" }} w={{base:"165px", sm:"220px", md:"200px", lg:"235px", xl:"235px"}} borderRadius="20px"  bg={props.color} />
  </Link>
</Flex>
  )
}

export default ImageTile; 