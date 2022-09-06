import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  Spinner,
  Button
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputFloat from '../../../components/input/inputFloat'
import Pagination from '../../../components/pagination'
import Select from '../../../components/shared/Select'
import useForm from '../../../hooks/useForm'
import IconExcel from '../../../icons/IconExcel'
import IconEyeD from '../../../icons/IconEyeD'
import useAllPedidos from '../../../services/useAllPedidos'
import { useGetReporteExcelPedidos } from '../../../services/useGetReporteExcelPedidos'
import { generatedTotal } from '../../../utils/generatedTotal'
import { isEmpty } from '../../../utils/isEmpty'

const initialState = { searchText: '', fechaInicial: '', fechaFinal: '' }

const dataTipo = [
  {
    value: '1',
    label: 'Email',
    desc: 'Email'
  },
  {
    value: '2',
    label: 'Nombres',
    desc: 'Nombres'
  }
]

const Pedidos = () => {
  const navigate = useNavigate()
  const [innerValue, setInnerValue] = useState<string>('')
  const [selectValue, setSelectValue] = useState<string>('')
  const [state, setState] = useState({
    pagina: 1,
    numeroPagina: 10
  })

  const [filtros, setFiltros] = useState({
    razonSocial: '',
    email: '',
    fechaInicial: '',
    fechaFinal: ''
  })

  const { values, ...form } = useForm({
    initialValues: initialState
  })

  const { db: pedidos, loading, nTotal } = useAllPedidos({ ...state, ...filtros })

  const { loading: loadingReporte, reporte: linkReporte } = useGetReporteExcelPedidos({
    ...filtros
  })

  const paginas = generatedTotal(nTotal, state.numeroPagina)

  const isDisable =
    isEmpty(values.fechaInicial) &&
    isEmpty(values.fechaFinal) &&
    isEmpty(values.searchText) &&
    isEmpty(selectValue)

  const handleSubmit = () => {
    setState({
      pagina: 1,
      numeroPagina: 10
    })
    setFiltros({
      fechaFinal: values.fechaFinal,
      fechaInicial: values.fechaInicial,
      razonSocial: selectValue === '2' ? values.searchText : '',
      email: selectValue === '1' ? values.searchText : ''
    })
  }

  const limpiarFiltro = () => {
    setFiltros({ razonSocial: '', email: '', fechaInicial: '', fechaFinal: '' })
    setState({
      pagina: 1,
      numeroPagina: 10
    })
    form.clear()
    setInnerValue('')
    setSelectValue('')
  }

  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Heading as="h1" fontSize={22}>
            Pedidos
          </Heading>
          <Text color="blackAlpha.600" _dark={{ color: 'gray.400' }} fontSize="14px" mt={3}>
            Desde aquí podrás visualizar la información de todos tus pedidos.
          </Text>
        </Box>
        <Flex justifyContent="flex-end">
          <Button
            as="a"
            href={linkReporte}
            download
            type="button"
            disabled={loadingReporte}
            w="auto"
            h={12}
            colorScheme="green"
            display="flex"
            justifyItems="center"
            alignItems="center"
            px={5}
            gap={3}>
            <Text fontWeight="semibold" fontSize="xl">
              Descargar Reporte
            </Text>
            <IconExcel className="mt-1" />
          </Button>
        </Flex>

        <Box maxWidth={'full'} marginTop="2rem">
          <Heading as="h4" fontSize={18}>
            Filtros
          </Heading>
          <Text color="blackAlpha.600" _dark={{ color: 'gray.400' }} fontSize="14px" mt={3}>
            Desde aquí podrás filtrar tu información.
          </Text>
          <form
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 xl:md:grid-cols-6 "
            onSubmit={form.onSubmit(handleSubmit)}>
            <Select
              innerValue={innerValue!}
              setValue={setSelectValue}
              setInnerValue={setInnerValue}
              selectOptions={dataTipo!}
              label="Buscar por"
            />
            <InputFloat
              type="text"
              label={selectValue === '1' ? 'Email' : 'Nombres'}
              {...form.inputProps('searchText')}
            />
            <InputFloat type="date" label="Fecha Inicial" {...form.inputProps('fechaInicial')} />
            <InputFloat type="date" label="Fecha Final" {...form.inputProps('fechaFinal')} />

            <Button
              disabled={isDisable}
              type="submit"
              w="auto"
              px={16}
              py="30px"
              colorScheme="green">
              <Text fontWeight="semibold" fontSize="xl">
                Filtrar
              </Text>
            </Button>
            <Button
              px={16}
              w="auto"
              type="button"
              py="30px"
              disabled={isDisable}
              colorScheme="red"
              onClick={limpiarFiltro}>
              <Text fontWeight="semibold" fontSize="xl">
                Limpiar Filtro
              </Text>
            </Button>
          </form>
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
                  <Th color="gray.400">Transaccion Id</Th>
                  <Th color="gray.400">Email</Th>
                  <Th textAlign="center" color="gray.400">
                    Celular
                  </Th>
                  <Th textAlign="center" color="gray.400">
                    Fecha
                  </Th>
                  <Th textAlign="center" color="gray.400">
                    Detalles
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {pedidos.map((pedido: any) => (
                  <Tr key={pedido.pedidoId}>
                    <Td>
                      {pedido?.Usuario?.nombres} {pedido?.Usuario?.apellidos}
                    </Td>
                    <Td>{pedido?.numeroComprobante}</Td>
                    <Td>{pedido?.transaccionId}</Td>
                    <Td>{pedido?.Usuario?.email}</Td>
                    <Td>{pedido?.Usuario?.celular}</Td>
                    <Td>{pedido?.fechaPedido}</Td>
                    <Td>
                      <Flex justifyContent="center" alignItems="center" gap={5}>
                        <IconButton
                          aria-label="detalle"
                          onClick={() => {
                            navigate(`/detalle-pedido/${pedido.pedidoId}}`, {
                              state: pedido
                            })
                          }}>
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

        <Pagination state={state} setstate={setState} paginas={paginas} />
      </Flex>
    </Container>
  )
}

export default Pedidos
