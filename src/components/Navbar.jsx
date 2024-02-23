import {
  Box,
  Img,
  Button,
  List,
  ListItem,
  Input,
  Flex,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/images/PG (3).png";
import useToggle from "../hooks/useToggle";
import Auth from "./Auth";
const Navbar = () => {
  const navbarMobileButtonStyles = {
    fontSize: "1.6rem",
    bg: "none",
  };

  const [categoryToggle, renderCategoryToggle] = useToggle();

  return (
    <>
      <Flex
        as="nav"
        h="50px"
        w="100%"
        display={{
          base: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        }}
        justifyContent="space-between"
        p="5px 10px"
      >
        <Box className="">
          <Link to="/">

        
          <Img
            src={logo}
            alt=""
            className=""
            h="45px"
            w="45px"
            borderRadius="8px"
          />
            </Link>
        </Box>
        {/*  */}

        {/* <Flex w="100%" pos="relative">
          <Input
            type="search"
            m=" 0px 15px"
            pr="100px"
            placeholder="Search Pins..."
          />
          <Box
            h="30px"
            w="3px"
            bg="lightgrey"
            pos="absolute"
            top="10%"
            right="75px"
            borderRadius="5px"
          ></Box>
          <Button
            pos="absolute"
            right="15px"
            bg="none"
            fontSize="1.4rem"
            zIndex="2"
          >
            <Link to="/search">
                       <i className="fa-solid fa-magnifying-glass"></i>
                       </Link>
 
          </Button>

          <Flex
            h="30px"
            pos="absolute"
            top="20%"
            right="90px"
            borderRadius="5px"
          >
            <Box onPointerDown={renderCategoryToggle} cursor="pointer">
              <i className="fa-solid fa-chevron-down"></i>
            </Box>
            { categoryToggle && <List p="15px" bg="#111" color="#fff" pos="absolute" top="35px" left="0px" borderRadius="8px">
              <ListItem>Pins</ListItem>
              <ListItem>Videos</ListItem>
            </List>}
          </Flex>
        </Flex> */}

        <List
          display="flex"
          alignItems="center"
          columnGap="50px"
          fontSize="1.2rem"
        >
          <ListItem>
            <Link to="/search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          </ListItem>

          <ListItem cursor="pointer">
            <Link to="/notification">
              <i className="fa-solid fa-message"></i>
            </Link>
          </ListItem>
          <ListItem cursor="pointer">
            <Link to="profile">
              <i className="fa-solid fa-user"></i>
            </Link>
          </ListItem>
        </List>
      </Flex>

      <Box
        h="50px"
        w="100%"
        display={{
          base: "flex",
          sm: "flex",
          md: "flex",
          lg: "none",
          xl: "none",
        }}
        pos="fixed"
        bottom="0px"
        justifyContent="center"
        columnGap="25px"
        bg="#fff"
        alignItems="center"
        zIndex="100"
      >
        <Button sx={navbarMobileButtonStyles}>
          <Link to="/">
            <i className="fa-solid fa-house"></i>
          </Link>
        </Button>
        <Button sx={navbarMobileButtonStyles}>
          <Link to="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </Button>
        <Button sx={navbarMobileButtonStyles}>
          <Link>
            <i className="fa-solid fa-plus"></i>
          </Link>
        </Button>
        <Button sx={navbarMobileButtonStyles}>
          <Link to="notification">
            <i className="fa-solid fa-message"></i>
          </Link>
        </Button>
        <Button sx={navbarMobileButtonStyles}>
          <Link>
            <i className="fa-solid fa-user"></i>
          </Link>
        </Button>
      </Box>

      <Box
        h="50px"
        w="100%"
        display={{
          base: "flex",
          sm: "flex",
          md: "flex",
          lg: "none",
          xl: "none",
        }}
        pos="fixed"
        top="0px"
        bg="#fff"
      ></Box>
      {false&&<Auth/>}
    </>
  );
};

export default Navbar;
