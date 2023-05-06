import "./App.css";
import Landing from "./Page/Landing";
import { Center, Text, useBreakpointValue } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Center>
        <Text
          as="b"
          position={"relative"}
          mt={4}
          fontSize="x-large"
          fontFamily="monospace"
          _after={{
            content: "''",
            width: "full",
            height: useBreakpointValue({ base: "20%", md: "30%" }),
            position: "absolute",
            bottom: 1,
            left: 0,
            bg: "red.400",
            color: "white",
            zIndex: -1,
          }}
          _hover={{
            transform: "scale(1.2, 1.2)",
            transition: "transform 0.2s ease-in-out",
          }}
        >
          Please Type Something Below
        </Text>
      </Center>
      <Landing />
    </div>
  );
}

export default App;
