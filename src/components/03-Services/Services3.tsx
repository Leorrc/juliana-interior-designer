import React from 'react'
import { Flex, Spacer, Text, useMediaQuery, Icon } from '@chakra-ui/react'
import { FaPenFancy, FaPencilRuler, FaFeatherAlt } from 'react-icons/fa'

const AboutUs = () => {
  const [isLargerThan48] = useMediaQuery('(min-width: 48em)')

  const array = [
    {
      id: 1,
      icon: FaPenFancy,
      title: 'PROJETOS',
      content:
        'Atuação multidisciplinar, se destacando em desenvolver projetos online e presenciais nas seguintes áreas: residenciais, comerciais, hoteleiros e corporativos.'
    },
    {
      id: 2,
      icon: FaPencilRuler,
      title: 'GERENCIAMENTO DE OBRA',
      content:
        'Além de atender o cliente com o projeto de interiores, o objetivo é concretizar e viabilizar a construção dos espaços. Assessoria completa para a implantação da obra, juntamente com time de parceiros que acaba resultando em excelência.'
    },
    {
      id: 3,
      icon: FaFeatherAlt,
      title: 'AMBIENTAÇÃO',
      content:
        'Criação de ambientes únicos, com a personalidade do cliente, visando sempre a estética e a funcionalidade. A decoração é a fase final, a cereja do bolo, que se torna essencial para um resultado harmonioso e coerente.'
    }
  ]

  return (
    <Flex
      minH="70vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThan48 ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThan48 ? 'row' : 'column'}
    >
      {array.map(arr => (
        <>
          <Flex
            height="300px"
            bg="blackAlpha.200"
            width={isLargerThan48 ? '32%' : 'full'}
            shadow="md"
            p="6"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThan48 ? '0' : '4'}
            border="1px solid #8B3712"
          >
            <Icon as={arr.icon} boxSize={14} color="#d18564" mb="5" />
            <Text fontSize={'xl'}>{arr.title}</Text>
            <Text>{arr.content}</Text>
          </Flex>

          <Spacer />
        </>
      ))}
    </Flex>
  )
}

export default AboutUs
