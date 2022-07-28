import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react'

import Welcome from '../../assets/imgs/welcome.png'

const WelcomePage = () => {
  return (
    <Container p={10} /* _dark={{ bg: 'gray.700' }} h="full" */>
      <Flex
        px={{ base: 4, md: 12 }}
        py={8}
        alignItems="center"
        justifyContent="space-between"
        bg="primary.500"
        rounded="lg"
      >
        <Flex color="" flexDirection="column" gap={5} fontWeight="semibold">
          <Heading color="#F0AC42">Bienvenido Rich!</Heading>
          <Text color="white">
            Desde el panel de administración podrás,agregar,modificar,eliminar
            información referente atu tienda.
          </Text>
          <Text color="white">
            Recuerda que si tienes algún problema o duda puedes contactarnos a{' '}
            <Text as="span" color="#F0AC42">
              soporte@softaki.com
            </Text>
          </Text>
          <Text fontWeight="bold" color="white">
            Estamos felices de ser tus aliados en el crecimiento de tu negocio.
          </Text>
        </Flex>
        <Image
          display={{ base: 'none', lg: 'block' }}
          boxSize="200px"
          src={Welcome}
          alt="welcome"
        />
      </Flex>
      <Flex
        flexDirection={{ base: 'column', sm: 'row' }}
        alignItems="center"
        mt={10}
        gap={10}
        justifyContent="center"
        color="gray.700"
        fontWeight="bold"
        fontSize="3xl"
        textAlign="center"
      >
        <Flex
          w={60}
          h={36}
          px={10}
          cursor="pointer"
          // bg="gray.300"
          rounded="lg"
          alignItems="center"
          justifyContent="center"
          bg="primary.500"
        >
          <Text color="#F0AC42">Visitar Tienda</Text>
        </Flex>
        <Flex
          w={60}
          h={36}
          px={10}
          cursor="pointer"
          bg="primary.500"
          rounded="lg"
          alignItems="center"
          justifyContent="center"
        >
          <Text color="#F0AC42">Productos Registrados</Text>
        </Flex>
      </Flex>
    </Container>
  )
}

export default WelcomePage
