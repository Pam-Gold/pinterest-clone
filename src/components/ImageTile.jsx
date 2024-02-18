import { Flex, Img } from "@chakra-ui/react";

import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageTile = (props) => {
  return(
<Flex h={{base:"250px", sm:"250px", md:"350px", lg:"350px", xl:"350px"}} w="100%"  >
  <Img src={props.urls.small}  h="100%" w="100%" borderRadius="20px" />
</Flex>
  )
}

export default ImageTile;