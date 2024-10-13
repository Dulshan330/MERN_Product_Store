import {
    Button,
    Container,
    Flex,
    HStack,
    Text,
    useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { CiLight, CiDark } from "react-icons/ci";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{ base: "column", sm: "row" }}
        >
            <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
            >
            <Link to={"/"}> Product Store </Link>
            </Text>
            <HStack>
            <Link to={"/create"}>
                <Button>
                <IoMdAdd size={20} />
                </Button>
            </Link>
            <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <CiDark size={20}/> : <CiLight size={20}/>}
            </Button>
            </HStack>
        </Flex>
        </Container>
    );
};

export default Navbar;
