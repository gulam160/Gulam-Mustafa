import {
  Heading,
  Image,
  Box,
  Badge,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { searchData } from "../Utils/CommonTypes";

const AdsCard = ({
  imageUrl,
  headline,
  CTA,
  companyId,
  description,
  primaryText,
  name,
  url,
}: searchData): JSX.Element => {
  return (
    <Box
      maxW={"320px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
      _hover={{
        transform: "scale(1.1)",
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <Stack align={"center"} justify={"right"} direction={"row"} mb={4}>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue("gray.300", "gray.800")}
          fontWeight={"400"}
          borderRadius={5}
        >
          Company Id: {companyId}
        </Badge>
      </Stack>
      <Image src={imageUrl} alt={name} mb={4} />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {headline}
      </Heading>

      <Text fontWeight={600} color={"gray.500"} my={4}>
        Company Name : {name}
      </Text>

      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        {primaryText}
      </Text>

      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        <Text
          px={2}
          py={1}
          bg={useColorModeValue("gray.50", "gray.800")}
          fontWeight={"400"}
        >
          <b>Description</b>: <br /> {description}
        </Text>
      </Stack>

      <Stack mt={8} direction={"row"} spacing={4}>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
          onClick={() => window.open(`${url}`, "_blank")}
        >
          {CTA}
        </Button>
      </Stack>
    </Box>
  );
};

export default AdsCard;
