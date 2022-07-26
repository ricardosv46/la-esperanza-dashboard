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
  Image,
  Switch,
  IconButton,
  Spinner
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BtnDestacado from '../../../components/Buttons/BtnDestacado'
import ModalDelete from '../../../components/modal/ModalDelete'
import Pagination from '../../../components/pagination'
import IconDetalle from '../../../icons/IconDetalle'
import IconEyeD from '../../../icons/IconEyeD'
import useAllPedidos from '../../../services/useAllPedidos'

const Pedidos = () => {
  const navigate = useNavigate()
  const { db: pedidos, loading } = useAllPedidos({
    pagina: 1,
    numeroPagina: 10
  })
  console.log(pedidos)
  // pedidos.map((item) => console.log(item.Usuario?.apellidos))
  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Heading as="h1" fontSize={22}>
            Pedidos
          </Heading>
          <Text
            color="blackAlpha.600"
            _dark={{ color: 'gray.400' }}
            fontSize="14px"
            mt={3}
          >
            Desde aquí podrás visualizar la información de todos tus pedidos.
          </Text>
        </Box>
        {loading ? (
          <Flex justifyContent="center" alignItems="center" h={'xl'}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary.500"
              size="xl"
            />
          </Flex>
        ) : (
          <TableContainer mt={10}>
            <Table colorScheme="gray">
              <Thead fontWeight={'black'}>
                <Tr>
                  <Th color="gray.400">Nombres</Th>
                  <Th color="gray.400">Numero de comprobante</Th>
                  <Th color="gray.400">Email</Th>
                  <Th textAlign="center" color="gray.400">
                    Celular
                  </Th>
                  <Th textAlign="center" color="gray.400">
                    Detalles
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {pedidos.map((pedido) => (
                  <Tr key={pedido.pedidoId}>
                    <Td>
                      {pedido?.Usuario?.nombres} {pedido?.Usuario?.apellidos}
                    </Td>
                    <Td>{pedido?.numeroComprobante}</Td>
                    <Td>{pedido?.Usuario?.email}</Td>
                    <Td>{pedido?.Usuario?.celular}</Td>
                    <Td>
                      <Flex justifyContent="center" alignItems="center" gap={5}>
                        <IconButton
                          aria-label="detalle"
                          onClick={() => {
                            navigate(
                              `/home/detalle-pedido/${pedido.pedidoId}}`,
                              {
                                state: pedido
                              }
                            )
                          }}
                        >
                          <IconEyeD />
                        </IconButton>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}

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

export default Pedidos
