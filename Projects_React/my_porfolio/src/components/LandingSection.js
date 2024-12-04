import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

<VStack spacing={8} align="center" justify="center" height="100vh" bg="gray.100">
  <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" />
  <Heading as="h1" size="2xl">{greeting}</Heading>
  <Text fontSize="lg" textAlign="center">{bio1}</Text>
  <Text fontSize="lg" textAlign="center">{bio2}</Text>
</VStack>

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

  </FullScreenSection>
);

export default LandingSection;
