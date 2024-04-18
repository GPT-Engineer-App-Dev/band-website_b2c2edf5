import React from "react";
import { Box, Heading, Text, Button, Stack, Image, Flex, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaMusic, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBvbiUyMHN0YWdlfGVufDB8fHx8MTcxMzQwOTI2OHww&ixlib=rb-4.0.3&q=80&w=1080" bgPosition="center" bgSize="cover" h="100vh" display="flex" alignItems="center">
        <Box maxW="2xl" mx="auto" px={4} py={20} textAlign="center" color="white">
          <Heading as="h1" size="4xl" mb={4}>
            The Rockstars
          </Heading>
          <Text fontSize="xl" mb={8}>
            Catch us live on our world tour!
          </Text>
          <Button leftIcon={<FaTicketAlt />} size="lg" colorScheme="blue" as={Link} href="#tickets">
            Get Tickets
          </Button>
        </Box>
      </Box>

      {/* Tour Dates Section */}
      <Box id="tickets" py={20}>
        <Heading as="h2" size="2xl" textAlign="center" mb={10}>
          Upcoming Tour Dates
        </Heading>
        <Stack spacing={8} maxW="2xl" mx="auto">
          <Flex p={6} bg="gray.100" rounded="lg" alignItems="center" justifyContent="space-between">
            <Box>
              <Text fontWeight="bold">New York, NY</Text>
              <Text>Madison Square Garden</Text>
              <Text>July 15, 2023</Text>
            </Box>
            <Button colorScheme="blue" size="lg">
              Buy Tickets
            </Button>
          </Flex>
          {/* Add more tour dates */}
        </Stack>
      </Box>

      {/* Latest Album Section */}
      <Box py={20} bg="gray.100">
        <Heading as="h2" size="2xl" textAlign="center" mb={10}>
          Latest Album
        </Heading>
        <Flex maxW="2xl" mx="auto" alignItems="center">
          <Image src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYWxidW0lMjBjb3ZlcnxlbnwwfHx8fDE3MTM0MDkyNzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Album Cover" w="sm" mr={8} />
          <Box>
            <Heading as="h3" size="xl" mb={4}>
              Rockstar Anthems
            </Heading>
            <Text mb={6}>Check out our latest album featuring hit singles and fan favorites!</Text>
            <Button leftIcon={<FaMusic />} colorScheme="blue">
              Listen Now
            </Button>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={10}>
        <Flex maxW="2xl" mx="auto" justifyContent="space-between">
          <Box>
            <Heading as="h4" size="md" mb={4}>
              The Rockstars
            </Heading>
            <Text>&copy; {new Date().getFullYear()} All rights reserved.</Text>
          </Box>
          <Stack direction="row" spacing={6}>
            <Link href="#" isExternal>
              <FaInstagram size={24} />
            </Link>
            <Link href="#" isExternal>
              <FaTwitter size={24} />
            </Link>
            <Link href="#" isExternal>
              <FaFacebook size={24} />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;
