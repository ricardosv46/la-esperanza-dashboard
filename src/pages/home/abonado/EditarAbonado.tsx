import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Heading, Spinner, Text } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

const EditarAbonado = () => {
  const { state: detalle } = useLocation() as any
  const navigation = useNavigate()
  console.log(detalle)

  // const generatedTotal = (items: number, itemporpage: number) => {
  //   const n = Math.ceil(items / itemporpage)
  //   return Array(n)
  //     .fill(null)
  //     .map((_, i) => i + 1)
  // }

  /*  const handleUpdateEstado = (id: string, estado: string) => {
     updateEstadoProducto({
       productoId: id,
       estado: estado === 'Activado' ? 'Desactivado' : 'Activado'
     }).then((res) => {
       if (res?.ok) {
         toast({
           title: 'Estado Actualizado Correctamente',
           position: 'top-right',
           isClosable: true,
           status: 'success'
         })
       } else {
         toast({
           title: res?.error,
           position: 'top-right',
           isClosable: true,
           status: 'error'
         })
       }
     })
   }
  */
  /*   const handleUpdateDestacado = (id: string, destacado: string) => {
      updateDestacadoProducto({
        productoId: id,
        destacado: destacado === 'Activado' ? 'Desactivado' : 'Activado'
      }).then((res) => {
        if (res?.ok) {
          toast({
            title: 'Destacado Actualizado Correctamente',
            position: 'top-right',
            isClosable: true,
            status: 'success'
          })
        } else {
          toast({
            title: res?.error,
            position: 'top-right',
            isClosable: true,
            status: 'error'
          })
        }
      })
    } */
  // const handleSubmit = () => {}
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
              Editar Abonado
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
          <></>
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

export default EditarAbonado
