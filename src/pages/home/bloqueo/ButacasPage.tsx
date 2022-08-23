import { Box, Center, Container, Flex, Heading, Image, Spinner, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import useEventos from '../../../services/useEventos'
import useFeria from '../../../services/useFeria'

const ButacasPage = () => {
	const { db: abono, loading: loadingFeria } = useFeria()
	const { db: eventos, loading: loadingEventos } = useEventos({ estado: 'Activado', feriaId: 1 })

	return (
		<Container maxWidth='1930px' p={'10'}>
			<Heading as='h1' fontSize={22}>
				Butacas
			</Heading>

			<Heading as='h2' mt={10} fontSize={22}>
				Abono
			</Heading>
			<Flex
				flexDirection={{ base: 'column', sm: 'row' }}
				alignItems='center'
				mt={10}
				gap={10}
				color='gray.700'
				fontWeight='bold'
				textAlign='center'>
				<Link to='/bloqueo/abono'>
					<Box w={64}>
						<Box position='relative' rounded='lg' overflow='hidden' w={64} h={36}>
							<Image
								src={abono?.imagenPrincipal?.url!}
								alt={abono?.titulo!}
								fallback={
									<Center>
										<Spinner colorScheme='primary' size='lg' />
									</Center>
								}
								w='full'
								h='full'
								pos='absolute'
								inset={0}
								objectFit='cover'
								zIndex={10}
							/>
						</Box>

						<Text zIndex={10} color='#F0AC42' _dark={{ color: 'primary.500' }}>
							{abono?.titulo!}
						</Text>
					</Box>
				</Link>
			</Flex>
			<Heading as='h2' my={5} fontSize={22}>
				Eventos
			</Heading>
			<Flex
				flexDirection={{ base: 'column', sm: 'row' }}
				alignItems='center'
				wrap={'wrap'}
				mt={10}
				gap={10}
				color='gray.700'
				fontWeight='bold'
				textAlign='center'>
				{eventos.map((evento) => (
					<Link key={evento?.eventoId} to={`/bloqueo/evento/${evento?.slug!}`} state={{ evento }}>
						<Box w={64}>
							<Box position='relative' rounded='lg' overflow='hidden' w={64} h={36}>
								<Image
									src={evento?.imagenPrincipal?.url!}
									alt={evento?.titulo!}
									fallback={
										<Center>
											<Spinner colorScheme='primary' size='lg' />
										</Center>
									}
									w='full'
									h='full'
									pos='absolute'
									inset={0}
									objectFit='cover'
									zIndex={10}
								/>
							</Box>

							<Text zIndex={10} color='#F0AC42' _dark={{ color: 'primary.500' }}>
								{evento?.titulo}
							</Text>
						</Box>
					</Link>
				))}
			</Flex>
		</Container>
	)
}

export default ButacasPage
