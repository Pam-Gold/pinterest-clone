import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { Button, Flex, Grid, Img, Text, Link } from "@chakra-ui/react";

const ImageDetails = () => {
  const { id } = useParams();

  const [detailData, setDetailData] = useState();

  const apiKey = "N1PqMKgiAyjF5Rq-s_oRmeZ6Wc_JtFg8LQnv2G1wN2A";

  const fetchDetailsData = async () => {
    try {
      // const res = await axios.get(`https://api.unsplash.com/photos/?${id}&client_id=${apiKey}`)
      // setDetailData(res.data)

      const res = await fetch(
        `https://api.unsplash.com/photos/${id}?client_id=${apiKey}`
      );

      const data = await res.json();

      setDetailData(data);
    } catch (err) {
      console.warn(err);
    }
  };

  console.log(detailData);

  useEffect(() => {
    fetchDetailsData();
  }, []);

  return (
    <Flex
      as="main"
      h="100vh"
      w="100%"
      p={{
        base: "25px 10px",
        sm: "25px 10px",
        md: "25px 10px",
        lg: "55px 50px",
        xl: "55px 50px",
      }}
      justify="space-between"
      flexDir={{
        base: "column",
        sm: "column",
        md: "column",
        lg: "row",
        xl: "row",
      }}

      

      bg="#fff"
    >
      <Flex  h={{base:"50%", sm:"50%", md:"50%", lg:"100%", xl:"100%"}} w={{base:"100%", sm:"100%", md:"100%", lg:"50%", xl:"50%"}} pos="relative">

      <Img h="100%" w="100%"  src={detailData?.urls?.regular}  borderRadius={{base:"25px 25px 0px 0px", sm:"25px 25px 0px 0px", md:"25px 25px 0px 0px", lg:"25px 0px 0px 25px", xl:"25px 0px 0px 25px"}}/>

      <Button h="40px" w="40px" borderRadius="50%" fontSize="1.4rem" pos="absolute" top="10px" left="10px"><Link to="/"><i className="fa-solid fa-arrow-left"></i></Link>
      </Button>
      
      </Flex>
      <Flex h={{base:"50%", sm:"50%", md:"50%", lg:"100%", xl:"100%"}} w={{base:"100%", sm:"100%", md:"100%", lg:"50%", xl:"50%"}} bg="#f1f1f1" borderRadius={{base:"0px 0px 25px 25px", sm:"0px 0px 25px 25px", md:"0px 25px 25px 0px", lg:"0px 25px 25px 0px"}} p="15px" flexDir="column" pos="relative">
        <Flex columnGap="15px" fontSize="1.4rem">
          <Flex h="40px" w="40px" justify="content" align="center"><i className="fa-solid fa-ellipsis"></i></Flex>
          <Flex h="40px" w="40px" justify="content" align="center" ><i className="fa-solid fa-arrow-up-from-bracket"></i></Flex>
          <Flex h="40px" w="40px" justify="content" align="center" ><i className="fa-solid fa-link"></i></Flex>
        </Flex>

        <Flex pos="absolute" left="30px" bottom="20px" columnGap="25px"><Text fontWeight="bold">{detailData?.user?.name}</Text> <Link href={detailData?.user?.portfolio_url} target="_blank" ><i className="fa-solid fa-arrow-up-right-from-square"></i></Link></Flex>
      </Flex>
    </Flex>
  );
};

export default ImageDetails;
