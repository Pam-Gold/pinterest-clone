import { Box, Button, Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import ImageTile from "../components/ImageTile";

// import { useStore } from "zustand";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  // const { data, fetchData } = useStore();

  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);

  const [moreData, setMoreData] = useState([]);

  const apiKey = "N1PqMKgiAyjF5Rq-s_oRmeZ6Wc_JtFg8LQnv2G1wN2A";
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos?page=${page}&per_page=25&client_id=${apiKey}`
      );

      const data = await res.json();

      setData(data);
    
    } catch (err) {
      console.warn(err);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    
    <Flex
      as="main"
      h="fit-content"
      w="100%"
      p={{
        base: "55px 0px",
        sm: "55px 0px",
        md: "55px 0px",
        lg: "25px 0px",
        xl: "25px 0px",
      }}
      justify="center"
      flexDir="column"
      rowGap="15px"
    >

      <Navbar/>
      <Grid
        gridTemplateColumns={{
          base: "145px 145px",
          sm: "180px 180px ",
          md: "230px 230px 230px ",
          lg: "235px 235px 235px 235px ",
          xl: "235px 235px 235px 235px 235px",
        }}
      
        gridTemplateRows="min-content"
        gap={{ base: "18px", sm: "20px", md: "20px", lg: "25px", xl: "25px" }}
        placeContent="center"
      >
        {data.map((img) => (
          <ImageTile {...img} />
        ))}
      </Grid>
      <Flex align="center" columnGap="15px" justify="center">
        <Button onClick={()=>setPage(1)}>1</Button>
        <Button onClick={()=>setPage(2)}>2</Button>
        <Button onClick={()=>setPage(3)}>3</Button>
        <Button onClick={()=>setPage(4)}>4</Button>
        <Button onClick={()=>setPage(5)}>5</Button>
      </Flex>
    </Flex>
  );
};

export default Home;
