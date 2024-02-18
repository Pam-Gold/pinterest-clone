import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

const NotificationBubble = () => {
  return (
    <Flex
      h="fit-content"
      w="100%"
      flexDir="column"
      bg="#111"
      color="#f1f1f1"
      rowGap="25px"
      p="50px 15px"
    >
    
      <Flex align="center" justify="space-between" columnGap="5px">
        <Heading>Addition Of New Beta Features </Heading>
        <Box p="5px 15px"  bg="green" borderRadius="5px">New</Box>
      </Flex>

      <Text color="grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam
        culpa saepe sint consectetur eum?
      </Text>
      <Text>Date Posted: 10-03-2024</Text>
    </Flex>
  );
};

export default NotificationBubble;
