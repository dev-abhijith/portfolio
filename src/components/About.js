import React from "react";
import TicTacToe from "./TicTacToe.js";
import { Box, Stack, chakra, Text, Flex, Image } from "@chakra-ui/react";
import arrow1 from "../assets/arrow.png";

function About() {
  return (
    <Box px={8} py={20} mx="auto" bg="yellow.400">
      <Box
        w={{
          base: "full",
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        textAlign={{
          base: "left",
          md: "center",
        }}
      >
        <Stack
          direction={{
            base: "column",
            sm: "row",
          }}
          mb={{
            base: 4,
            md: 4,
          }}
          justifyContent="space-between"
        >
          <chakra.h1
            mb={6}
            fontSize={{
              base: "4xl",
              md: "6xl,",
            }}
            fontWeight="bold"
            py="4px"
          >
            About
            <Text
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              fontWeight="normal"
            >
              I am a self motivated and task oriented professional with
              experience co-founding a SaaS startup. Driven towards the big
              picture, excited to use and acquire new skills to solve the
              problem at hand optimally.
              <br />
              <Text fontWeight="bold">
                Not to mention, i'm always up for a challenge...
              </Text>
              <Flex justifyContent="end">
                <Image
                  display={{ base: "none", md: "block" }}
                  src={arrow1}
                  transform={{ rotate: "deg(90)" }}
                />
              </Flex>
            </Text>
          </chakra.h1>
          <TicTacToe />
        </Stack>
      </Box>
    </Box>
  );
}

export default About;
