import { Flex, Img } from "@chakra-ui/react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ImageTile = (props) => {
  return(
<Flex h={{base:"250px", sm:"250px", md:"350px", lg:"350px", xl:"350px"}} w="100%"  >
  <Link to={props.id.toString()}>
  
  <Img src={props.urls.small}  h="100%" w="100%" borderRadius="20px" />
  </Link>
</Flex>
  )
}

export default ImageTile;