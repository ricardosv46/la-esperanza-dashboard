import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

const DetallePedido = () => {
  const { state: detalle } = useLocation() as any
  const navigation = useNavigate()
  console.log(detalle)
  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Flex alignItems={'center'} columnGap={4}>
            <Flex
              justifyContent="center"
              alignItems="center"
              padding={1.5}
              bg="primary.500"
              rounded="full"
              cursor={'pointer'}
              onClick={() => navigation(-1)}
            >
              <ChevronLeftIcon color={'white'} />
            </Flex>
            <Heading as="h1" fontSize={22}>
              Detalle del pedido {detalle?.pedidoId}
            </Heading>
          </Flex>
        </Box>

        <Box maxWidth={'full'}>
          {/* {loadingUpdateVistoPedido ? (
            <Flex justifyContent="center" alignItems="center" h={'xl'}>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="primary.500"
                size="xl"
              />
            </Flex>
          ) : ( */}
          <>
            <Box p={'20px'} rounded={'2xl'} shadow={'2xl'}>
              <Flex pt={2} pb={3} direction="row" justifyContent="center">
                <Text fontSize="lg" color={'gray.500'}>
                  RESÚMEN DE PEDIDO
                </Text>{' '}
              </Flex>

              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Usuario
                </Text>
                <Text color="black" fontWeight={'normal'} fontSize="xl">
                  {detalle.Usuario.nombres} {detalle.Usuario.nombres}
                </Text>
              </Flex>
              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Fecha de Pedido
                </Text>
                <Text color="black" fontWeight={'normal'} fontSize="xl">
                  {detalle.fechaPedido}
                </Text>
              </Flex>

              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Precio de Envio
                </Text>
                <Text color="black" fontWeight={'normal'} fontSize="xl">
                  {detalle.numeroComprobante}
                </Text>
              </Flex>
              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Precio Total
                </Text>
                <Text color="black" fontWeight={'normal'} fontSize="xl">
                  S/ {detalle.precioTotal}
                </Text>
              </Flex>
              <Flex
                py={5}
                borderColor="gray.200"
                borderTopWidth={0.8}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Text fontSize="lg" color={'gray.500'}>
                  Tipo de Comprobante
                </Text>
                <Text color="black" fontWeight={'normal'} fontSize="xl">
                  {detalle.tipoComprobante}
                </Text>
              </Flex>
            </Box>
          </>
          {/* )} */}
        </Box>
      </Flex>
      {/* <Flex justifyContent="center" py={14}>
        <Button
          type="button"
          w={96}
          py={7}
          colorScheme="primary"
          onClick={handleSubmit}
          disabled={isDisable}
        >
          <Text fontWeight="bold" fontSize="xl">
            Emiti Ticket
          </Text>
        </Button>
      </Flex> */}
    </Container>
  )
}

export default DetallePedido
