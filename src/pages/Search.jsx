import { Box, Input, Grid, Flex } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import ImageTile from "../components/ImageTile";
import Navbar from "../components/Navbar";
const Search = () => {
  //
  const [searchData, setSearchData] = useState([]);

  const [page, setPage] = useState(1);

  const searchInputRef = useRef();

  const apiKey = "N1PqMKgiAyjF5Rq-s_oRmeZ6Wc_JtFg8LQnv2G1wN2A";
  const fetchSearchData = async () => {
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${searchInputRef.current.value}&client_id=${apiKey}&per_page=15`
      );

      const searchResults = await res.json();

      setSearchData(searchResults.results
        );

      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      console.warn(err);
    }
  };

  console.log(searchData);

  const renderSearchResults = (e) => {
    if (e.keyCode === 13) {
      if (searchInputRef.current.value === "") {
        alert("Type in a Search Keyword");
      } else {
        fetchSearchData();
        console.log("it kinda works");
      }
    }
  };

  //
  return (
    <Flex
      as="main"
      h="fit-content"
      w="100%"
      p="15px 10px"
      flexDir="column"
      rowGap="25px"
    >
      <Navbar/>
      <Box>
        <Input
          ref={searchInputRef}
          h="40px"
          w="100%"
          display="flex"
          placeholder="Search Pins..."
          onKeyDown={renderSearchResults}
        />
      </Box>
      <Grid
        gridTemplateColumns={{
          base: "150px 150px",
          sm: "180px 180px ",
          md: "230px 230px 230px ",
          lg: "235px 235px 235px 235px ",
          xl: "235px 235px 235px 235px 235px",
        }}
        gridTemplateRows="min-content"
        gap={{ base: "10px", sm: "20px", md: "20px", lg: "25px", xl: "25px" }}
        placeContent="center"
      >
        {searchData[0] && searchData.map((img) => <ImageTile {...img} />)}
      </Grid>
    </Flex>
  );
};

export default Search;
