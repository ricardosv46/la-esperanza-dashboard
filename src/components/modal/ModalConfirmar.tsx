import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'

interface IModal {
	isOpen: boolean
	onClose: () => void
	onClick: () => void
	header: string
	body: string
	colorScheme?: 'green' | 'red'
}

const ModalConfirmar = ({ isOpen, onClick, onClose, body, header, colorScheme = 'green' }: IModal) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{header}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{body}</ModalBody>

				<ModalFooter>
					<Button mr={3} onClick={onClose}>
						Cancelar
					</Button>
					<Button
						colorScheme={colorScheme}
						onClick={() => {
							onClick()
							onClose()
						}}>
						Confirmar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default ModalConfirmar
