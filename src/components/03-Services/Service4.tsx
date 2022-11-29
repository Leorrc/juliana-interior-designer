import { SVGProps } from 'react'
import { FaPenFancy, FaPencilRuler, FaFeatherAlt } from 'react-icons/fa'
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

interface IFeature {
  heading: string
  content: string
  icon: string
}

const features: IFeature[] = [
  {
    heading: 'Payments',
    content:
      'Choose from Stripe, Paddle, Braintree, or PayPal to launch your product quickly.',
    icon: 'FaPenFancy'
  },
  {
    heading: 'Invoicing',
    content:
      'Webhooks are wired up to automatically email customers PDF receipts and invoices.',
    icon: 'FaPencilRuler'
  },
  {
    heading: 'API Included',
    content:
      'Roll your own API to easily connect with other apps or services. Pull in updates.',
    icon: 'FaFeatherAlt'
  }
]

const Features = () => {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Everything your app needs and more
      </chakra.h3>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        placeItems="center"
        spacing={10}
        mb={4}
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue('gray.100', 'gray.700')}
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
          >
            <Flex
              p={2}
              w="max-content"
              color="white"
              bgGradient="linear(to-br, #228be6, #15aabf)"
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4}>
              {feature.content}
            </Text>
            <Link href="#" mt={4} fontSize="sm" color="blue.400">
              Learn more →
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Features
