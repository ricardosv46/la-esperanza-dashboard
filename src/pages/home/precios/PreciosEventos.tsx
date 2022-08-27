import { EditIcon } from '@chakra-ui/icons'
import { Box, Container, Flex, Heading, Text, TableContainer, Table, Thead, Tr, Th, Tbody, Td, IconButton, useToast, Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import InputFloat from '../../../components/input/inputFloat'
import ModalUpdateEstadoPedido from '../../../components/modal/ModalUpdateEstadoPedido'
import Select from '../../../components/shared/Select'
import useForm from '../../../hooks/useForm'
import useToggle from '../../../hooks/useToggle'
import useButacasEvento from '../../../services/useButacasEvento'
import useEventos from '../../../services/useEventos'
const initialState = {
	precio: 0,
	butacaEventoId: 0
}
const PreciosEventos = () => {
	const toast = useToast()
	const { isOpen, onOpen, onClose } = useToggle()
	const [innerValue, setInnerValue] = useState<string>('')
	const [selectValue, setSelectValue] = useState<string>('')

	const { db: butacas, updatePrecioButaca, loading } = useButacasEvento({ tendido: '', eventoId: Number(selectValue) })
	console.log(selectValue)
	const { values, ...form } = useForm({
		initialValues: initialState
	})
	const { db: eventos, loading: loadingEventos } = useEventos({ estado: 'Activado', feriaId: 1 })

	const categorias = eventos.map((tendido) => ({
		value: tendido?.eventoId!,
		label: tendido?.titulo!,
		desc: tendido?.titulo!
	}))
	const handleUpdatePrecioButaca = (butacaEventoId: number, eventoId: number, precio: number) => {
		updatePrecioButaca(butacaEventoId, eventoId, precio).then((res) => {
			if (res?.ok) {
				toast({
					title: 'Precio actualizado Correctamente',
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
	return (
		<Container maxWidth='1930px' p={'10'}>
			<Flex flexDir={'column'}>
				<Box maxWidth={'full'}>
					<Heading as='h1' fontSize={22}>
						Precios de Eventos
					</Heading>
					<Text color='blackAlpha.600' _dark={{ color: 'gray.400' }} fontSize='14px' mt={3}>
						Desde aquí podrás visualizar la información del precio de los eventos.
					</Text>
				</Box>
				<Flex justifyContent='flex-end' alignItems='center' mt={5}></Flex>
				{loading ? (
					<Flex justifyContent='center' alignItems='center' h={'xl'}>
						<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='primary.500' size='xl' />
					</Flex>
				) : (
					<>
						<Select
							innerValue={innerValue!}
							setValue={setSelectValue}
							setInnerValue={setInnerValue}
							selectOptions={categorias!}
							label='Eventos'
						/>

						<TableContainer mt={10}>
							<Table colorScheme='gray'>
								<Thead fontWeight={'black'}>
									<Tr>
										<Th color='gray.400'>Codigo</Th>
										<Th color='gray.400'>precio</Th>

										<Th textAlign='center' color='gray.400'>
											Acciones
										</Th>
									</Tr>
								</Thead>
								<Tbody>
									{selectValue?.length
										? butacas.map((butaca) => (
												<Tr key={butaca?.butacaEventoId}>
													<Td>{butaca?.codigo}</Td>
													<Td>{butaca?.precio?.toFixed(2) ?? '00.00'}</Td>

													<Td>
														<Flex justifyContent='center' alignItems='center' gap={5}>
															<IconButton
																aria-label='editar'
																onClick={() => {
																	onOpen()
																	values.precio = Number(butaca?.precio)

																	values.butacaEventoId = Number(butaca?.butacaEventoId)
																	console.log(values.precio)
																}}>
																<EditIcon w={5} h={5} />
															</IconButton>
														</Flex>
													</Td>
												</Tr>
										  ))
										: null}
								</Tbody>
							</Table>
						</TableContainer>
					</>
				)}

				{/* <Pagination state={state} setstate={setstate} paginas={paginas} /> */}
			</Flex>
			<ModalUpdateEstadoPedido
				isOpen={isOpen}
				onClose={onClose}
				header='Actualizar Precio'
				onClick={() => handleUpdatePrecioButaca(values?.butacaEventoId, Number(selectValue), values?.precio)}>
				<Box>
					<InputFloat
						type='number'
						label='Precio Butaca'
						// value={values.precio + '.00'}
						{...form.inputProps('precio')}
					/>
				</Box>
			</ModalUpdateEstadoPedido>
		</Container>
	)
}

export default PreciosEventos
