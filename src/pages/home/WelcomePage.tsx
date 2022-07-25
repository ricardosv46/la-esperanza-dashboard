import { Container, Flex, Heading, Image, Text } from '@chakra-ui/react'

import Welcome from '../../assets/imgs/welcome.png'

const WelcomePage = () => {
  return (
    <Container p={10} /* _dark={{ bg: 'gray.700' }} h="full" */>
      <Flex
        px={{ base: 4, md: 12 }}
        py={8}
        alignItems='center'
        justifyContent='space-between'
        bg='gray.300'
        rounded='lg'
      >
        <Flex
          color='gray.700'
          flexDirection='column'
          gap={5}
          fontWeight='semibold'
        >
          <Heading>Bienvenido Rich!</Heading>
          <Text>
            Desde el panel de administración podrás,agregar,modificar,eliminar
            información referente atu tienda.
          </Text>
          <Text>
            Recuerda que si tienes algún problema o duda puedes contactarnos a{' '}
            <Text as='span' color='red.500'>
              soporte@softaki.com
            </Text>
          </Text>
          <Text fontWeight='bold'>
            Estamos felices de ser tus aliados en el crecimiento de tu negocio.
          </Text>
        </Flex>
        <Image
          display={{ base: 'none', lg: 'block' }}
          boxSize='200px'
          src={Welcome}
          alt='welcome'
        />
      </Flex>
      <Flex
        flexDirection={{ base: 'column', sm: 'row' }}
        alignItems='center'
        mt={10}
        gap={10}
        justifyContent='center'
        color='gray.700'
        fontWeight='bold'
        fontSize='3xl'
        textAlign='center'
      >
        <Flex
          w={60}
          h={36}
          px={10}
          cursor='pointer'
          bg='gray.300'
          rounded='lg'
          alignItems='center'
          justifyContent='center'
        >
          <Text>Visitar Tienda</Text>
        </Flex>
        <Flex
          w={60}
          h={36}
          px={10}
          cursor='pointer'
          bg='gray.300'
          rounded='lg'
          alignItems='center'
          justifyContent='center'
        >
          <Text>Productos Registrados</Text>
        </Flex>
      </Flex>
    </Container>
  )
}

export default WelcomePage
