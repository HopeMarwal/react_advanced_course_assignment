import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      bg='white'
      color="black"
      align='left'
      borderRadius='10px'
    >
      <Image src={imageSrc} borderRadius='10px' />
      <Heading px="10px" size="md">{title}</Heading>
      <Text 
        px="10px"
        color='gray'
        fontSize='sm'
      >
        {description}
      </Text>
      <HStack px="10px" pb="10px" fontSize='sm'>
        <span>See more</span>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
