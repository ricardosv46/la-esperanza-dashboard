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
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputFloat from '../../../components/input/inputFloat'
import InputImage from '../../../components/input/InputImage'
// import { Imagen } from '../../../components/shared/ModalImages'
import useForm, { FormError } from '../../../hooks/useForm'
import useEventos from '../../../services/useEventos'
// import useEventos, { ICrearEvento } from '../../../services/useEventos'
import { isEmpty } from '../../../utils/isEmpty'

export interface Imagen {
  id?: string | null | undefined
  titulo?: string | null | undefined
  url?: string | null | undefined
}

export interface ICrearEvento {
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  terminosCondiciones: string
  direccion: string
  ubicacion: string
  fecha: string
  hora: string
  fechaInicial: string
  horaInicial: string
  fechaFinal: string
  horaFinal: string
}

const initialState: ICrearEvento = {
  titulo: '',
  descripcionCorta: '',
  descripcionLarga: '',
  terminosCondiciones: '',
  direccion: '',
  ubicacion: '',
  fecha: '',
  hora: '',
  // imagenPrincipal: {},
  fechaInicial: '',
  horaInicial: '',
  fechaFinal: '',
  horaFinal: ''
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
  // imagenPrincipal,
  fechaInicial,
  horaInicial,
  fechaFinal,
  horaFinal
}: ICrearEvento) => {
  const error: FormError<ICrearEvento> = {}
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

const CrearEvento = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [imagenPrincipal, setImagenPrincipal] = useState<Imagen>({})
  // initialState.imagenPrincipal = imagenPrincipal
  const { values, ...form } = useForm({
    initialValues: initialState,
    validate: validation
  })
  const { createEvento } = useEventos({ feriaId: 1, estado: null })

  const handleSubmit = () => {
    const { ...rest } = values
    // rest.imagenPrincipal = values?.imagenPrincipal?.id
    createEvento({ ...rest, imagenPrincipal: Number(imagenPrincipal.id) }).then(
      (res) => {
        if (res?.ok) {
          toast({
            title: 'Evento creado Correctamente',
            position: 'top-right',
            isClosable: true,
            status: 'success'
          })
        } else {
          toast({
            title: 'Evento creado Inrrectamente',
            position: 'top-right',
            isClosable: true,
            status: 'error'
          })
        }
        navigate(-1)
      }
    )
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
                _dark={{ bg: '#F0AC42', color: 'primary.500' }}
              >
                <ChevronLeftIcon color={'white'} />
              </Flex>
              <Heading as="h1" fontSize={22}>
                Crear Evento
              </Heading>
            </Flex>
          </Box>

          <Box maxWidth={'full'}>
            <Grid mt={5} templateColumns={{ base: 'repeat(1, 1fr)' }} gap={6}>
              <InputFloat
                type="text"
                label="Titulo"
                {...form.inputProps('titulo')}
              />
            </Grid>
            <Grid
              mt={5}
              templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
              gap={6}
            >
              <InputFloat
                type="text"
                label="Direccion"
                {...form.inputProps('direccion')}
              />
              <InputFloat
                type="text"
                label="Ubicacion"
                {...form.inputProps('ubicacion')}
              />
              <InputFloat
                type="date"
                label="Fecha"
                {...form.inputProps('fecha')}
              />
              <InputFloat
                type="time"
                label="Hora"
                {...form.inputProps('hora')}
              />
              <InputFloat
                type="date"
                label="Fecha Inicial"
                {...form.inputProps('fechaInicial')}
              />
              <InputFloat
                type="date"
                label="Fecha Final"
                {...form.inputProps('fechaFinal')}
              />
              <InputFloat
                type="time"
                label="Hora Inicial"
                {...form.inputProps('horaInicial')}
              />
              <InputFloat
                type="time"
                label="Hora Final"
                {...form.inputProps('horaFinal')}
              />
            </Grid>
            <Grid mt={5} templateColumns={{ base: 'repeat(1, 1fr)' }} gap={6}>
              <InputFloat
                type="text"
                label="Descripción Corta"
                {...form.inputProps('descripcionCorta')}
                h={'150px'}
              />

              <InputFloat
                type="text"
                label="Descripción Larga"
                {...form.inputProps('descripcionLarga')}
                h={'150px'}
              />
              <InputFloat
                type="text"
                label="Terminos Condiciones"
                {...form.inputProps('terminosCondiciones')}
                h={'200px'}
              />
              <InputImage
                label=" Imagen Principal"
                onChange={(img) => setImagenPrincipal(img)}
                value={imagenPrincipal}
              />
            </Grid>
          </Box>
        </Flex>
        <Flex justifyContent="center" py={14}>
          <Button
            type="submit"
            w={96}
            py={7}
            colorScheme="primary"
            _dark={{ bg: '#F0AC42' }}
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

export default CrearEvento
