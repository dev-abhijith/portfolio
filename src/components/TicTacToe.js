import React from "react";
import { Box, Center, HStack, VStack } from "@chakra-ui/react";

function TicTacToe() {
  // let arr = [
  //   [0, 0, 0],
  //   [0, 0, 0],
  //   [0, 0, 0],
  // ];
  return (
    <Box px={8} py={1} mx="auto">
      <Box
        w={{
          base: "full",
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        textAlign="left"
      >
        <VStack spacing="0px">
          <MakeRow />
          <MakeRow />
          <MakeRow />
        </VStack>
      </Box>
    </Box>
  );
}

let MakeRow = () => {
  return (
    <HStack spacing="0px">
      <Box w="70px" h="70" bg="white" border="2px" p={4}>
        <Center></Center>
      </Box>
      <Box w="70px" h="70" bg="white" border="2px" p={4}>
        <Center></Center>
      </Box>
      <Box w="70px" h="70" bg="white" border="2px" p={4}>
        <Center></Center>
      </Box>
    </HStack>
  );
};

export default TicTacToe;
