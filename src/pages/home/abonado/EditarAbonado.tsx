import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  useToast
} from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'
import InputFloat from '../../../components/input/inputFloat'
// import useForm from '../../../hooks/useForm'
import useFeria, { IUpdateFeria } from '../../../services/useFeria'
import useForm from '../../../hooks/useForm'
import InputImage from '../../../components/input/InputImage'
// import { useState } from 'react'
// import { Imagen } from '../../../components/shared/ModalImages'

const initialState: IUpdateFeria = {
  descuento: '',
  descripcionCorta: '',
  descripcionLarga: '',
  fecha: '',
  fechaFinal: '',
  fechaInicial: '',
  hora: '',
  horaFinal: '',
  horaInicial: '',
  terminosCondiciones: '',
  titulo: '',
  feriaId: ''
  // imagenPrincipal: '',
  // imagenSecundaria: ''
}
const EditarAbonado = () => {
  const { state: detalle } = useLocation() as any
  const { updateFeria } = useFeria()
  // const [imagenPrincipal, setImagenPrincipal] = useState<Imagen>()
  // const [imagenSecundaria, setImagenSecundaria] = useState<Imagen>()
  const navigate = useNavigate()
  console.log({ detalle })
  const toast = useToast()

  initialState.titulo = detalle.abonados.titulo
  initialState.descuento = detalle.abonados.descuento
  initialState.descripcionCorta = detalle.abonados.descripcionCorta
  initialState.descripcionLarga = detalle.abonados.descripcionLarga
  initialState.fecha = detalle.abonados.fecha
  initialState.fechaFinal = detalle.abonados.fechaFinal
  initialState.fechaInicial = detalle.abonados.fechaInicial
  initialState.hora = detalle.abonados.hora
  initialState.horaFinal = detalle.abonados.horaFinal
  initialState.horaInicial = detalle.abonados.horaInicial
  initialState.terminosCondiciones = detalle.abonados.terminosCondiciones
  initialState.feriaId = detalle.abonados.feriaId
  initialState.imagenPrincipal = detalle.abonados.imagenPrincipal
  initialState.imagenSecundaria = detalle.abonados.imagenSecundaria
  const { values, ...form } = useForm({
    initialValues: initialState
    // validate: validacion
  })
  console.log(values.imagenSecundaria)

  const handleSubmit = async () => {
    const { ...rest } = values
    updateFeria(rest).then((res) => {
      if (res?.ok) {
        toast({
          title: 'Abonado Actualizado Correctamente',
          position: 'top-right',
          isClosable: true,
          status: 'success'
        })
      } else {
        toast({
          title: 'Abonado Actualizado Inrrectamente',
          position: 'top-right',
          isClosable: true,
          status: 'error'
        })
      }
      navigate(-1)
    })
  }

  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Flex alignItems={'center'} columnGap={4}>
            <Flex
              justifyContent="center"
              alignItems="center"
              padding={1.5}
              bg="primary.500"
              rounded="full"
              cursor={'pointer'}
              onClick={() => navigate(-1)}
            >
              <ChevronLeftIcon color={'white'} />
            </Flex>
            <Heading as="h1" fontSize={22}>
              Actualizar Categoria
            </Heading>
          </Flex>
        </Box>

        <Box maxWidth={'full'}>
          <Grid
            mt={5}
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
            gap={6}
          >
            <InputFloat
              type="text"
              label="Titulo"
              {...form.inputProps('titulo')}
            />

            <InputFloat
              type="text"
              label="Fecha"
              // name={fecha}
              // value={fecha}
              // onChange={onChange}
              {...form.inputProps('fecha')}
            />
            <InputFloat
              type="text"
              label="Descripción Corta"
              // name="descripcionCorta"
              {...form.inputProps('descripcionCorta')}
            />
            <InputFloat
              type="text"
              label="Descripción Larga"
              // name="descripcionLarga"
              // value={descripcionLarga}
              // onChange={onChange}
              {...form.inputProps('descripcionLarga')}
            />
            <InputFloat
              type="text"
              label="Descuento"
              // name="descuento"
              // value={detalle.abonados.descuento}
              // onChange={onChange}
              {...form.inputProps('descuento')}
            />

            <InputFloat
              type="text"
              label="Fecha Inicial"
              // name="fechaInicial"
              // value={fechaInicial}
              // onChange={onChange}
              {...form.inputProps('fechaInicial')}
            />
            <InputFloat
              type="text"
              label="Fecha Final"
              // name="fechaFinal"
              // value={fechaFinal}
              // onChange={onChange}
              {...form.inputProps('fechaFinal')}
            />
            <InputFloat
              type="text"
              label="Hora"
              // name="hora"
              // value={hora}
              // onChange={onChange}
              {...form.inputProps('hora')}
            />
            <InputFloat
              type="text"
              label="Hora Inicial"
              // name="horaInicial"
              // value={horaInicial}
              // onChange={onChange}
              {...form.inputProps('horaInicial')}
            />
            <InputFloat
              type="text"
              label="Hora Final"
              // name="horaFinal"
              // value={horaFinal}
              // onChange={onChange}
              {...form.inputProps('horaFinal')}
            />
            <InputFloat
              type="text"
              label="Terminos Condiciones"
              // name="terminosCondiciones"
              // value={terminosCondiciones}
              // onChange={onChange}

              {...form.inputProps('terminosCondiciones')}
            />
            <InputImage
              value={values.imagenPrincipal}
              // onChange={setImagenPrincipal}
              label=" Imagen Principal"
              // {...form.inputProps('imagenPrincipal')}
            />
            {/* <InputImage
              // value={values.imagenSecundaria}
              // onChange={setImagenSecundaria}
              label="Imagen Secundaria"
            /> */}
            <Box></Box>
            {/* <InputImage
              // value={imagenPrincipal}
              // onChange={setImagenPrincipal}
              label=" Imagen Principal"
            />
            <InputImage
              // value={imagenSecundaria}
              // onChange={setImagenSecundaria}
              label=" Imagen Secundaria"
            /> */}
          </Grid>
        </Box>
      </Flex>
      <Flex justifyContent="center" py={14}>
        <Button
          type="button"
          w={96}
          py={7}
          colorScheme="primary"
          onClick={handleSubmit}
          // disabled={isDisable}
        >
          <Text fontWeight="bold" fontSize="xl">
            Actualizar Categoria
          </Text>
        </Button>
      </Flex>
    </Container>
  )
}

export default EditarAbonado
