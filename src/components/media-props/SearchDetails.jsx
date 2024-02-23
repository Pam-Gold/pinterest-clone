import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Box, Flex, Grid, Img, Text } from "@chakra-ui/react";
import {
  EmailShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  TwitterShareButton,
  EmailIcon,
  WhatsappIcon,
  PinterestIcon,
  XIcon,
} from "react-share";
import useToggle from "../../hooks/useToggle";

import { useToast } from "@chakra-ui/react";

const SearchDetails = () => {
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


  const [shareBox, renderShareBox] = useToggle()
  const [downloadBox, renderDownloadBox] = useToggle()

  const toast = useToast() 

  const downloadImage = (imageUrl, imageName) => {
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a URL for the blob
        const url = URL.createObjectURL(blob);

        

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = url;
        link.download = imageName; // Set desired file name
        document.body.appendChild(link);
        
        // Trigger download
        link.click();

        // Cleanup
        URL.revokeObjectURL(url);
        document.body.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading image:', error);
      });
    

  
  };

  const initiateDownload = () => {

    toast({title: "Image Downloaded",
      colorScheme:'#fff',
      duration: 1000,
      render:()=>(
        <Box bg="#fff" color="#000" p="15px 5px" textAlign="center" fontWeight="bold" borderRadius="5px">
Downloaded Image
        </Box>
      ),
      position:"top"})

      renderDownloadBox()

    setTimeout(()=>{
      downloadImage(detailData?.urls?.regular, detailData?.alt_description)
    },2000)

  }

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
      <Flex
        h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
        pos="relative"
      >
        <Img
          h="100%"
          w="100%"
          src={detailData?.urls?.regular}
          borderRadius={{
            base: "25px 25px 0px 0px",
            sm: "25px 25px 0px 0px",
            md: "25px 25px 0px 0px",
            lg: "25px 0px 0px 25px",
            xl: "25px 0px 0px 25px",
          }}
        />

        <Button
          h="40px"
          w="40px"
          borderRadius="50%"
          fontSize="1.4rem"
          pos="absolute"
          top="10px"
          left="10px"
        >
          <Link to="/search">
            <i className="fa-solid fa-arrow-left"></i>
          </Link>
        </Button>
      </Flex>
      <Flex
        h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
        bg="#f1f1f1"
        borderRadius={{
          base: "0px 0px 25px 25px",
          sm: "0px 0px 25px 25px",
          md: "0px 25px 25px 0px",
          lg: "0px 25px 25px 0px",
        }}
        p="15px"
        flexDir="column"
        pos="relative"
        rowGap="35px"
      >
        <Flex columnGap="15px" fontSize="1.4rem">
          <Flex h="40px" w="40px" justify="content" align="center">
            <i style={{cursor:"pointer"}} className="fa-solid fa-ellipsis" onClick={renderDownloadBox}></i>
          </Flex>
          <Flex h="40px" w="40px" justify="content" align="center">
            <i style={{cursor:"pointer"}} className="fa-solid fa-arrow-up-from-bracket" onClick={renderShareBox}></i>
          </Flex>
          <Flex h="40px" w="40px" justify="content" align="center">
            <i style={{cursor:"pointer"}} className="fa-solid fa-link" onClick={()=>{
              
              toast({  title: "Link Copied",
              status: "success",
              duration: 1000,
              position:"top"})
              
              navigator.clipboard.writeText(detailData?.urls?.regular)}} ></i>
          </Flex>
        </Flex>
        <Flex>
          <Text>{detailData?.alt_description}</Text>
        </Flex>

        <Flex
          pos="absolute"
          left="20px"
          bottom="20px"
          columnGap="25px"
          align="center"
        >
          <Img
            h="40px"
            w="40px"
            borderRadius="50%"
            src={detailData?.user?.profile_image?.small}
          />
          <Text fontWeight="bold">{detailData?.user?.name}</Text>{" "}
          <a
            rel="noreferrer"
            href={detailData?.user?.portfolio_url}
            target="_blank"
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </Flex>

        { shareBox && <Flex top="70px" left="40px" bg="#fff" h="100px" w="fit-content" pos="absolute" borderRadius="15px" columnGap="10px" p="8px">
          <EmailShareButton  onClick={renderShareBox}   url={detailData?.urls?.regular}>
            <EmailIcon size={40} round={true}/>
          </EmailShareButton>
          <WhatsappShareButton onClick={renderShareBox}    url={detailData?.urls?.regular}>
          <WhatsappIcon size={40} round={true}/>
          </WhatsappShareButton>
          <PinterestShareButton   url={detailData?.urls?.regular}>

<PinterestIcon onClick={renderShareBox}   size={40} round={true}/>
          </PinterestShareButton>
          <TwitterShareButton onClick={renderShareBox}   url={detailData?.urls?.regular}>
            <XIcon size={40} round={true}/>
          </TwitterShareButton>
          .
        </Flex>}

        { downloadBox && <Flex top="70px" left="5px" pos="absolute" h="fit-content" w="fit-content" bg="#fff" p="10px 25px" borderRadius="8px">
          <Text cursor="pointer"onClick={initiateDownload} > Download</Text>
        </Flex>}
      </Flex>
    </Flex>
  );
};

export default SearchDetails;
