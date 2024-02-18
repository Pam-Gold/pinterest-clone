import { Flex, Button } from "@chakra-ui/react";
import NotificationBubble from "../components/NotificationBubble";
import { Link } from "react-router-dom";

const  Notification = () => {
  return(
<Flex h="100vh" w="100%" flexDir="column" bg="lightgray" >
<Button w="100px" m="5px"><Link to="/"><i className="fa-solid fa-house"></i></Link></Button>
<NotificationBubble/>
</Flex>
  )
}

export default Notification;
