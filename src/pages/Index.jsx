import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaGlobe, FaPlayCircle, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box position="relative" height="70vh" bg="gray.200">
        <Image src="https://images.unsplash.com/photo-1705747894529-df18ecf5025e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZXJlbmUlMjBsYW5kc2NhcGV8ZW58MHx8fHwxNzE0ODQ5MjcyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hero Image" objectFit="cover" width="100%" height="100%" />
        <VStack position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" spacing={4} textAlign="center">
          <Heading as="h1" size="2xl" color="white">
            Empowering Your Business with Omnist Enterprises LLC
          </Heading>
          <Text fontSize="xl" color="gray.100">
            Website Creation, Content Production, AI Consultancy
          </Text>
          <Stack direction="row" spacing={4}>
            <Button colorScheme="teal" leftIcon={<FaRocket />}>
              Get Started
            </Button>
            <Button colorScheme="gray" variant="outline">
              Learn More
            </Button>
          </Stack>
        </VStack>
      </Box>

      {/* Services Section */}
      <Box py={10}>
        <Heading as="h2" size="xl" textAlign="center" mb={6}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <ServiceCard icon={FaGlobe} title="Website Creation" description="Build your online presence with our expert design and development." />
          <ServiceCard icon={FaPlayCircle} title="Video/Image Production" description="Create stunning visuals that captivate and engage." />
          <ServiceCard icon={FaRocket} title="AI Integration" description="Leverage AI to streamline operations and enhance efficiency." />
        </SimpleGrid>
      </Box>

      {/* About Us */}
      <Box bg="gray.50" py={10}>
        <Container centerContent>
          <Heading as="h3" size="lg">
            About Us
          </Heading>
          <Text maxWidth="container.md" textAlign="center" mt={4}>
            At Omnist, we embrace universal values and strive to provide services that cater to a global audience. Our approach integrates diverse perspectives and innovative solutions.
          </Text>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={5}>
        <Flex justifyContent="space-between" alignItems="center" px={10}>
          <Text>&copy; {new Date().getFullYear()} Omnist Enterprises LLC</Text>
          <Stack direction="row" spacing={4}>
            <Button as="a" href="#" variant="link" colorScheme="teal">
              Privacy Policy
            </Button>
            <Button as="a" href="#" variant="link" colorScheme="teal">
              Terms of Service
            </Button>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <VStack bg="white" boxShadow="md" p={5} borderRadius="md" align="stretch">
      <IconComponent size="3em" />
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Text>{description}</Text>
    </VStack>
  );
};

export default Index;
