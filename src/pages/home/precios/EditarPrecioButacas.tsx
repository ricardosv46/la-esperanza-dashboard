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
import useForm, { FormError } from '../../../hooks/useForm'
import InputImage from '../../../components/input/InputImage'
import useEventos, { IUpdateEvento } from '../../../services/useEventos'
import { isEmpty } from '../../../utils/isEmpty'
// import { useState } from 'react'
// import { Imagen } from '../../../components/shared/ModalImages'

interface IUpdatePrecioButaca {
  canidad: string
  estado
}

const initialState: IUpdateEvento = {
  titulo: '',
  descripcionCorta: '',
  descripcionLarga: '',
  terminosCondiciones: '',
  direccion: '',
  ubicacion: '',
  fecha: '',
  hora: '',
  imagenPrincipal: '',
  fechaInicial: '',
  horaInicial: '',
  fechaFinal: '',
  horaFinal: '',
  eventoId: ''
}
const validation = ({
  titulo,
  descripcionCorta,
  descripcionLarga,
  terminosCondiciones,
  direccion,
  ubicacion,
  fecha,
  hora,
  imagenPrincipal,
  fechaInicial,
  horaInicial,
  fechaFinal,
  horaFinal
}: IUpdateEvento) => {
  const error: FormError<IUpdateEvento> = {}
  if (isEmpty(titulo)) {
    error.titulo = 'Este campo es obligatorio'
  }
  if (isEmpty(descripcionCorta)) {
    error.descripcionCorta = 'Este campo es obligatorio'
  }
  if (isEmpty(descripcionLarga)) {
    error.descripcionLarga = 'Este campo es obligatorio'
  }
  if (isEmpty(terminosCondiciones)) {
    error.terminosCondiciones = 'Este campo es obligatorio'
  }
  if (isEmpty(direccion)) {
    error.direccion = 'Este campo es obligatorio'
  }
  if (isEmpty(ubicacion)) {
    error.ubicacion = 'Este campo es obligatorio'
  }
  if (isEmpty(fecha)) {
    error.fecha = 'Este campo es obligatorio'
  }
  if (isEmpty(hora)) {
    error.hora = 'Este campo es obligatorio'
  }
  // if (isIm(imagenPrincipal)) {
  //   error.imagenPrincipal = 'Este campo es obligatorio'
  // }
  if (isEmpty(fechaInicial)) {
    error.fechaInicial = 'Este campo es obligatorio'
  }
  if (isEmpty(horaInicial)) {
    error.horaInicial = 'Este campo es obligatorio'
  }
  if (isEmpty(fechaFinal)) {
    error.fechaFinal = 'Este campo es obligatorio'
  }
  if (isEmpty(horaFinal)) {
    error.horaFinal = 'Este campo es obligatorio'
  }
  console.log({ error })
  return error
}
const EditarPrecioButaca = () => {
  const { state: butacas } = useLocation() as any
  const butaca = butacas.butaca
  // const evento = eventos.evento
  // const { updateEvento } = useEventos({ feriaId: 1, estado: null })
  const navigate = useNavigate()
  console.log(butaca)
  const toast = useToast()

  // initialState.titulo = evento.titulo
  // initialState.descripcionCorta = evento.descripcionCorta
  // initialState.descripcionLarga = evento.descripcionLarga
  // initialState.fecha = evento.fecha
  // initialState.fechaFinal = evento.fechaFinal
  // initialState.fechaInicial = evento.fechaInicial
  // initialState.hora = evento.hora
  // initialState.horaFinal = evento.horaFinal
  // initialState.horaInicial = evento.horaInicial
  // initialState.terminosCondiciones = evento.terminosCondiciones
  // // initialState.imagenPrincipal = evento.imagenPrincipal
  // initialState.direccion = evento.direccion
  // initialState.ubicacion = evento.ubicacion
  // initialState.eventoId = evento.eventoId

  const { values, ...form } = useForm({
    initialValues: initialState,
    validate: validation
  })

  const handleSubmit = async () => {
    // const { ...rest } = values
    // updateEvento(rest).then((res) => {
    //   if (res?.ok) {
    //     toast({
    //       title: 'Evento actualizar Correctamente',
    //       position: 'top-right',
    //       isClosable: true,
    //       status: 'success'
    //     })
    //   } else {
    //     toast({
    //       title: 'Evento actualizar Inrrectamente',
    //       position: 'top-right',
    //       isClosable: true,
    //       status: 'error'
    //     })
    //   }
    //   navigate(-1)
    // })
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
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
                type="date"
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
                label="Direccion"
                // name="fechaInicial"
                // value={fechaInicial}
                // onChange={onChange}
                {...form.inputProps('direccion')}
              />
              <InputFloat
                type="text"
                label="Ubicacion"
                // name="fechaInicial"
                // value={fechaInicial}
                // onChange={onChange}
                {...form.inputProps('ubicacion')}
              />
              <InputFloat
                type="date"
                label="Fecha Inicial"
                // name="fechaInicial"
                // value={fechaInicial}
                // onChange={onChange}
                {...form.inputProps('fechaInicial')}
              />
              <InputFloat
                type="date"
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
            type="submit"
            w={96}
            py={7}
            colorScheme="primary"
            // onClick={handleSubmit}
            // disabled={isDisable}
          >
            <Text fontWeight="bold" fontSize="xl">
              Actualizar Categoria
            </Text>
          </Button>
        </Flex>
      </Container>
    </form>
  )
}

export default EditarPrecioButaca
