import { useState, ChangeEvent, useEffect } from "react";
import { Box, Input, Flex, SimpleGrid, Center, Text } from "@chakra-ui/react";
import { searchData } from "../Utils/CommonTypes";
import { useDebounce } from "../Utils/useDebounce";
import { SearchCompaniesAds } from "../Utils/SearchCompaniesAds";
import AdsCard from "../Components/AdsCard";

const Landing = (): JSX.Element => {
  const [data, setData] = useState<searchData[] | undefined>([]);
  const [info, setInfo] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const debounceQuery = useDebounce(query, 2000);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await SearchCompaniesAds(debounceQuery);
        if (res) {
          setData(res);
          setQuery("");
          res?.length === 0
            ? setInfo("No ads found, try something else")
            : setInfo("");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [debounceQuery]);

  return (
    <Box>
      {/* Input to search ads */}
      <Flex wrap={"nowrap"} justify="center" alignItems="center" my={4}>
        <Input
          variant="filled"
          borderWidth={1.5}
          color={"gray.800"}
          _placeholder={{
            color: "gray.400",
            fontFamily: "monospace",
          }}
          w={{ base: "100%", md: "50%" }}
          marginX={6}
          borderColor={"black.700"}
          type="text"
          fontFamily="monospace"
          placeholder="Type here to search for Ads..."
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />
      </Flex>

      {/* Displaying the ads with the respective company names in a grid format */}
      {info.length > 0 ? (
        <Center>
          <Text
            as={"b"}
            fontFamily={"monospace"}
            fontSize={"x-large"}
            mx={6}
            textAlign={"center"}
          >
            {info}
          </Text>
        </Center>
      ) : (
        <SimpleGrid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          placeItems="center"
          spacing="2rem"
          width="90%"
          marginX="auto"
          marginY={"4rem"}
        >
          {data &&
            data.length > 0 &&
            data.map((el) => <AdsCard key={el._id} {...el} />)}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Landing;
