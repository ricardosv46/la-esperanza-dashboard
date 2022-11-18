import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Pagination from '../../../components/pagination'
import { IconEye } from '../../../icons/IconEye'
import IconEyeD from '../../../icons/IconEyeD'
import IconPdf from '../../../icons/IconPdf'
import { useVentaId } from '../../../services/useVentaId'
import useVentas from '../../../services/useVentas'
import VentasPage from './VentasPage'

const DetalleVenta = () => {
  const { id } = useParams() as { id: string }

  const { venta, loading } = useVentaId({ ventaId: Number(id) })

  const token = localStorage.getItem('token')
  const getReporte = async (code: string) => {
    const res = await fetch('https://apilaesperanza-dev.plazaticket.com/public/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : ''
      },
      body: JSON.stringify({
        query: `
			query ReporteAsientoVendedora($code: String) {
			  ReporteAsientoVendedora(code: $code)
			}
			
			  `,
        variables: {
          code
        }
      })
    }).then((res) => res.json())
    console.log(res.data.ReporteAsientoVendedora)
    return res.data.ReporteAsientoVendedora
  }

  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Heading as="h1" fontSize={22}>
            Detalle Venta {venta.ventaId}
          </Heading>
          <Text color="blackAlpha.600" _dark={{ color: 'gray.400' }} fontSize="14px" mt={3}>
            Desde aquí podrás visualizar la información de todos la venta.
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
                  <Th color="gray.400">Codigo</Th>
                  <Th color="gray.400">Asiento</Th>
                  <Th color="gray.400">Tendido</Th>
                  <Th color="gray.400">Monto</Th>
                  <Th color="gray.400">Evento</Th>
                </Tr>
              </Thead>
              <Tbody>
                {venta?.DetalleVenta?.map((item) => {
                  const code = `${item?.codigo}-${item?.asiento}-${item?.eventoId}`
                  return (
                    <Tr key={item.detalleVentaId}>
                      <Td>{item?.codigo}</Td>
                      <Td>{item?.asiento}</Td>
                      <Td>{item?.tendido}</Td>
                      <Td>{item?.precio}</Td>
                      <Td>{item?.Evento?.titulo}</Td>
                      <Td>
                        <IconButton
                          aria-label="descarga"
                          onClick={async () => {
                            const respuesta = await getReporte(code)
                            window.open(respuesta)
                          }}>
                          <IconPdf />
                        </IconButton>
                      </Td>
                    </Tr>
                  )
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Flex>
    </Container>
  )
}

export default DetalleVenta
