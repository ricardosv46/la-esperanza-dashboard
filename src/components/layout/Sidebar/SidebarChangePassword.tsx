import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
  Flex
} from '@chakra-ui/react'
import InputFloat from '../../input/inputFloat'

interface IProps {
  isOpen: boolean
  onClose: () => void
}

const SidebarChangePassword = ({ isOpen, onClose }: IProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <Box mt={10}>
          <DrawerHeader>Actualizar Informacion</DrawerHeader>
        </Box>

        <DrawerBody>
          <InputFloat label='Teléfono' />
          <Box mt={5}>
            <InputFloat label='Correo electrónico' />
          </Box>

          <Flex width={'250px'} mt={8} mr={'10px'} >
            <Button colorScheme='gray' textColor='gray.400' fontSize={'16px'} variant='solid' w={'150px'} size={'md'} onClick={onClose}>
              Guardar
            </Button>
            <Button flex={1} colorScheme='gray' fontSize={'16px'} fontWeight={'light'} size={'md'} variant="link">Cancelar</Button>
          </Flex>
        </DrawerBody>

      </DrawerContent>
    </Drawer>
  )
}

export default SidebarChangePassword
