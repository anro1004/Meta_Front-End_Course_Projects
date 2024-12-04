import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  <HStack
    spacing={4}
    bg="white"
    borderRadius="md"
    boxShadow="md"
    padding={4}
    _hover={{ boxShadow: "lg" }}
  >
    <Image src={imageSrc} alt={title} boxSize="100px" borderRadius="md" />
    <VStack align="start" spacing={2} flex="1">
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
    </VStack>
    <FontAwesomeIcon icon={faArrowRight} size="1x" />
  </HStack>

  return null;
};

export default Card;
