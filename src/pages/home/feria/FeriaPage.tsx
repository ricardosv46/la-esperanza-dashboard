import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  Image
} from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom'
import useFeria from '../../../services/useFeria'

const FeriaPage = () => {
  // const navigate = useNavigate()
  const { db: abonados } = useFeria()
  console.log(abonados)
  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Heading as="h1" fontSize={22}>
            Abonados
          </Heading>
          <Text
            color="blackAlpha.600"
            _dark={{ color: 'gray.400' }}
            fontSize="14px"
            mt={3}
          >
            Desde aquí podrás visualizar la información de todos los Abonados.
          </Text>
        </Box>
        <Flex justifyContent="flex-end" alignItems="center" mt={5}>
          {/* <Button
            colorScheme="primary"
            variant="solid"
            leftIcon={<AddIcon />}
            onClick={() => navigate('/home/create-product')}
          >
            <Text lineHeight={0}>Crear abonados</Text>
          </Button> */}
        </Flex>
        {/* {loading ? (
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
        <TableContainer mt={10}>
          <Table colorScheme="gray">
            <Thead fontWeight={'black'}>
              <Tr>
                <Th color="gray.400">Imagen principal</Th>
                <Th color="gray.400">Titulo</Th>
                <Th color="gray.400">Descuento</Th>
                <Th textAlign="center" color="gray.400">
                  Fecha
                </Th>
                <Th textAlign="center" color="gray.400">
                  Hora
                </Th>
                <Th textAlign="center" color="gray.400">
                  Acciones
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr key={abonados?.feriaId}>
                <Td>
                  <Image
                    boxSize="50px"
                    objectFit="contain"
                    src={abonados?.imagenPrincipal?.url ?? ''}
                    alt="imgs"
                  />
                </Td>
                <Td>{abonados?.titulo}</Td>
                <Td>{abonados?.descuento}</Td>
                <Td>{abonados?.fechaInicial}</Td>
                <Td>{abonados?.hora}</Td>
                <Td>
                  <Flex justifyContent="center" alignItems="center" gap={5}>
                    <IconButton
                      aria-label="editar"
                      // onClick={() =>
                      //   navigate(
                      //     `/home/edit-product/${producto.productoId}`,
                      //     {
                      //       state: { producto }
                      //     }
                      //   )
                      // }
                    >
                      <EditIcon w={5} h={5} />
                    </IconButton>
                    <IconButton
                      aria-label="eliminar"
                      // onClick={() => {
                      //   onOpen()
                      //   setSelectId(producto?.productoId)
                      // }}
                    >
                      <DeleteIcon w={5} h={5} />
                    </IconButton>
                  </Flex>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        {/* )} */}

        {/* <Pagination state={state} setstate={setstate} paginas={paginas} /> */}
      </Flex>
      {/* <ModalDelete
        isOpen={isOpen}
        onClick={handleDelete}
        onClose={onClose}
        header="Eliminar Blog"
        body="¿Estas seguro que deseas eliminar este blog?"
      /> */}
    </Container>
  )
}

export default FeriaPage
