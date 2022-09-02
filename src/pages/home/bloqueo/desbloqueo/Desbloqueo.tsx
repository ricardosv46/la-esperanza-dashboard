import { DeleteIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
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
	Tr,
	useToast
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ModalConfirmar from '../../../../components/modal/ModalConfirmar'
import useToggle from '../../../../hooks/useToggle'
import useAsientosBloqueados from '../../../../services/useAsientosBloqueados'

const Desbloqueo = () => {
	const navigate = useNavigate()
	const { isOpen, onClose, onOpen } = useToggle()
	const { db: asientos, loading, deleteAsiento } = useAsientosBloqueados()
	const [selectId, setSelectId] = useState<number>(0)
	const toast = useToast()

	const handleDeleteEvento = () => {
		deleteAsiento({ asientoId: selectId }).then((res) => {
			if (res?.ok) {
				toast({
					title: 'Asiento eliminado Correctamente',
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
						Desbloquear Asientos
					</Heading>
					<Text color='blackAlpha.600' _dark={{ color: 'gray.400' }} fontSize='14px' mt={3}>
						Desde aquí podrás desbloquar los asientos.
					</Text>
				</Box>

				{loading ? (
					<Flex justifyContent='center' alignItems='center' h={'xl'}>
						<Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='primary.500' size='xl' />
					</Flex>
				) : (
					<TableContainer mt={10}>
						<Table colorScheme='gray'>
							<Thead fontWeight={'black'}>
								<Tr>
									<Th color='gray.400'>Tendido</Th>
									<Th color='gray.400'>Codigo</Th>
									<Th color='gray.400'>Butaca</Th>
									<Th color='gray.400'>Evento</Th>

									<Th textAlign='center' color='gray.400'>
										Acciones
									</Th>
								</Tr>
							</Thead>
							<Tbody>
								{asientos.map((asiento) => (
									<Tr key={asiento?.asientoId}>
										<Td>{asiento?.tendido}</Td>
										<Td>{asiento?.codigo}</Td>
										<Td>{asiento?.reservado}</Td>
										<Td>{asiento?.Evento?.titulo}</Td>
										<Td>
											<Flex justifyContent='center' alignItems='center' gap={5}>
												<IconButton
													aria-label='eliminar'
													onClick={() => {
														onOpen()
														setSelectId(Number(asiento?.asientoId))
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

				{/* <Pagination state={state} setstate={setstate} paginas={paginas} /> */}
			</Flex>

			<ModalConfirmar
				colorScheme='red'
				isOpen={isOpen}
				onClick={handleDeleteEvento}
				onClose={onClose}
				header='Eliminar Asiento'
				body='¿Estas seguro que deseas eliminar esta asiento?'
			/>
		</Container>
	)
}

export default Desbloqueo
