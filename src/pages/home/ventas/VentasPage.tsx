import { DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
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
  Tr,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputFloat from '../../../components/input/inputFloat'
import ModalConfirmar from '../../../components/modal/ModalConfirmar'
import Pagination from '../../../components/pagination'
import Select from '../../../components/shared/Select'
import useForm from '../../../hooks/useForm'
import useToggle from '../../../hooks/useToggle'
import IconExcel from '../../../icons/IconExcel'
import IconEyeD from '../../../icons/IconEyeD'
import { useGetReporteExcelVentas } from '../../../services/useGetReporteExcelVentas'
import useVendedoras from '../../../services/useVendedoras'
import useVentas from '../../../services/useVentas'
import { generatedTotal } from '../../../utils/generatedTotal'
import { isEmpty } from '../../../utils/isEmpty'

interface IPropsVenta {
  vendedorId: number | null
  tipoVenta: string
  fechaInicial: string
  fechaFinal: string
}

const initialState = {
  fechaInicial: '',
  fechaFinal: ''
}

const dataTipoPago = [
  {
    value: 'Yape',
    label: 'Yape',
    desc: 'Yape'
  },
  {
    value: 'Plin',
    label: 'Plin',
    desc: 'Plin'
  },
  {
    value: 'Efectivo',
    label: 'Efectivo',
    desc: 'Efectivo'
  },
  {
    value: 'Tarjeta',
    label: 'Tarjeta',
    desc: 'Tarjeta'
  }
]

const VentasPage = () => {
  const navigate = useNavigate()
  const [selectId, setSelectId] = useState<number>(0)
  const toast = useToast()
  const { isOpen, onClose, onOpen } = useToggle()
  const [state, setstate] = useState({
    pagina: 1,
    numeroPagina: 10
  })

  const [filtros, setFiltros] = useState<IPropsVenta>({
    vendedorId: null,
    tipoVenta: '',
    fechaInicial: '',
    fechaFinal: ''
  })

  const { ventas, loading, nTotal, deleteVenta } = useVentas({ ...state, ...filtros })
  const [innerValue, setInnerValue] = useState<string>('')
  const [selectValue, setSelectValue] = useState<string>('')
  const [innerValuePago, setInnerValuePago] = useState<string>('')
  const [selectValuePago, setSelectValuePago] = useState<string>('')
  const { db: vendedores, loading: loadinVendedor } = useVendedoras({
    pagina: 1,
    numeroPagina: 200,
    estado: 'Activado'
  })
  const { values, ...form } = useForm({
    initialValues: initialState
  })

  const isDisable =
    isEmpty(values.fechaInicial) &&
    isEmpty(values.fechaFinal) &&
    isEmpty(selectValuePago) &&
    isEmpty(selectValue)

  const dataVendedores = vendedores.map((vendedor) => ({
    value: vendedor?.id!,
    label: vendedor?.nombres! + ' ' + vendedor?.apellidos!,
    desc: vendedor?.email!
  }))

  const { loading: loadingReporte, reporte: linkReporte } = useGetReporteExcelVentas({
    ...filtros
  })

  const paginas = generatedTotal(nTotal, state.numeroPagina)

  const handleSubmit = () => {
    console.log(values)
    setstate({
      pagina: 1,
      numeroPagina: 10
    })
    setFiltros({
      ...values,
      vendedorId: Number(selectValue) ?? null,
      tipoVenta: selectValuePago
    })
  }

  const handleDelete = () => {
    deleteVenta({ ventaId: selectId }).then((res) => {
      if (res?.ok) {
        toast({
          title: 'Venta Eliminada Correctamente',
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

  const limpiarFiltro = () => {
    setFiltros({ vendedorId: null, tipoVenta: '', fechaInicial: '', fechaFinal: '' })
    setstate({
      pagina: 1,
      numeroPagina: 10
    })
    form.clear()
    setInnerValue('')
    setSelectValue('')
    setInnerValuePago('')
    setSelectValuePago('')
  }

  return (
    <>
      <Container maxWidth="1930px" p={'10'}>
        <Flex flexDir={'column'}>
          <Box maxWidth={'full'}>
            <Heading as="h1" fontSize={22}>
              Ventas
            </Heading>
            <Text color="blackAlpha.600" _dark={{ color: 'gray.400' }} fontSize="14px" mt={3}>
              Desde aquí podrás visualizar la información de todos las ventas.
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
            <form
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 xl:md:grid-cols-6 "
              onSubmit={form.onSubmit(handleSubmit)}>
              <Select
                innerValue={innerValue!}
                setValue={setSelectValue}
                setInnerValue={setInnerValue}
                selectOptions={dataVendedores!}
                label="Vendedores"
              />
              <Select
                innerValue={innerValuePago!}
                setValue={setInnerValuePago}
                setInnerValue={setSelectValuePago}
                selectOptions={dataTipoPago!}
                label="Tipo Venta"
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
                disabled={isDisable}
                type="button"
                py="30px"
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
                    <Th color="gray.400">Tipo Comprobante</Th>
                    <Th color="gray.400">Tipo Documento</Th>
                    <Th color="gray.400">Documento</Th>
                    <Th color="gray.400">Celular</Th>
                    <Th color="gray.400">Email</Th>
                    <Th color="gray.400">Fecha Venta</Th>
                    <Th color="gray.400">Tipo Pago</Th>
                    <Th color="gray.400">Monto</Th>
                    <Th color="gray.400">Nombres o Razón social </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {ventas.map((venta) => (
                    <Tr key={venta.ventaId}>
                      <Td>{venta?.tipoComprobante}</Td>
                      <Td>{venta?.tipoDocumento}</Td>
                      <Td>{venta?.numeroDocumento}</Td>
                      <Td>{venta?.celular}</Td>
                      <Td>{venta?.email}</Td>
                      <Td>{venta?.fechaVenta}</Td>
                      <Td>{venta?.tipoVenta}</Td>
                      <Td>{venta?.precioTotal}</Td>
                      <Td>{venta?.razonSocial}</Td>
                      <Td>
                        <Flex justifyContent="center" alignItems="center" gap={5}>
                          <Link to={venta?.ventaId!} state={venta}>
                            <IconButton aria-label="detalle">
                              <IconEyeD />
                            </IconButton>
                          </Link>
                          <IconButton
                            aria-label="eliminar"
                            onClick={() => {
                              onOpen()
                              setSelectId(Number(venta.ventaId))
                            }}>
                            <DeleteIcon w={5} h={5} />
                          </IconButton>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          )}

          <Pagination state={state} setstate={setstate} paginas={paginas} />
        </Flex>
      </Container>
      <ModalConfirmar
        colorScheme="red"
        isOpen={isOpen}
        onClick={handleDelete}
        onClose={onClose}
        header="Eliminar"
        body="¿Estas seguro que deseas Eliminar esta venta?"
      />
    </>
  )
}

export default VentasPage
