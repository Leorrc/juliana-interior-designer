import { Fragment } from 'react'
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { GoLocation } from 'react-icons/go'
import { BsPhone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

const contactOptions = [
  {
    label: 'Address',
    value: 'A108 Adam Street, NY 535022, USA',
    icon: GoLocation
  },
  {
    label: 'Numero de Telefone',
    value: '+1 5589 55488 55',
    icon: BsPhone
  },
  {
    label: 'EMAIL',
    value: 'info@example.com',
    icon: HiOutlineMail
  }
]

const Contact = () => {
  return (
    <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
      <Stack spacing={10}>
        <Flex align="center" justify="center" direction="column">
          <Heading fontSize="4xl" mb={2}>
            Contact Us
          </Heading>
          <Text fontSize="md" textAlign="center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack
                spacing={3}
                direction="column"
                justify="center"
                alignItems="center"
                px={3}
              >
                <Icon as={option.icon} w={10} h={10} color="green.400" />
                <Text fontSize="lg" fontWeight="semibold">
                  {option.label}
                </Text>
                <Text fontSize="md" textAlign="center">
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Contact
