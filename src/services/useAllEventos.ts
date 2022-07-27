import {
  InputMaybe,
  useCreateEventoMutation,
  useDeleteEventoMutation,
  useGetAllEventosQuery,
  useUpdateEstadoEventoMutation,
  useUpdateEventoMutation
} from '../generated/graphql'

interface IEventos {
  feriaId: number
  estado?: string | null
}
interface ICrearEvento {
  slug: string
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  terminosCondiciones: string
  direccion: string
  ubicacion: string
  fecha: Date
  hora: string
  imagenPrincipal: number
  fechaInicial: Date
  horaInicial: string
  fechaFinal: Date
  horaFinal: string
  estado: string
  feriaId: number
}
interface IUpdateEvento {
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  terminosCondiciones: string
  direccion: string
  ubicacion: string
  fecha: string
  hora: string
  imagenPrincipal: InputMaybe<number> | undefined
  fechaInicial: string
  horaInicial: string
  fechaFinal: string
  horaFinal: string
  eventoId: InputMaybe<string> | undefined
}

const useAllPedidos = ({ feriaId, estado }: IEventos) => {
  const { data, loading, refetch } = useGetAllEventosQuery({
    fetchPolicy: 'network-only',
    variables: {
      feriaId,
      estado
    }
  })
  const db = data?.GetAllEventos?.data ?? []
  // CREAR EVENTO
  const [CreateEvento, { loading: loadingCreate }] = useCreateEventoMutation()

  const createEvento = async ({
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
  }: ICrearEvento) => {
    try {
      const res = await CreateEvento({
        variables: {
          input: {
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
          }
        }
      })
      refetch()
      if (res.data?.CreateEvento) {
        return { ok: true }
      } else {
        return { ok: false, error: res.data?.CreateEvento }
      }
    } catch (error: any) {
      return { ok: false, error: 'Hubo un error' }
    }
  }
  // ACTUALIZAR EVENTO
  const [updateEventoMutation, { loading: loadingUpdate }] =
    useUpdateEventoMutation()

  const updateEvento = async ({
    eventoId,
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
    try {
      const res = await updateEventoMutation({
        variables: {
          input: {
            eventoId,
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
          }
        }
      })
      refetch()
      if (res.data?.UpdateEvento) {
        return { ok: true }
      } else {
        return { ok: false, error: res.data?.UpdateEvento }
      }
    } catch (error: any) {
      return { ok: false, error: 'Hubo un error' }
    }
  }
  // ELIMINAR EVENTO
  const [DeleteEventoMutation] = useDeleteEventoMutation()

  const deleteEvento = async (id: number) => {
    try {
      await DeleteEventoMutation({
        variables: {
          eventoId: id
        }
      })
      refetch()
      return {
        ok: true,
        error: null
      }
    } catch (err: any) {
      return {
        ok: false,
        error: 'Error al eliminar el evento'
      }
    }
  }
  // ACTUALIZAR ESTADO EVENTO

  const [UpdateEstadoEventoMutation] = useUpdateEstadoEventoMutation()

  const updateEstadoEvento = async (
    eventoId: InputMaybe<string>,
    estado: string
  ) => {
    try {
      const res = await UpdateEstadoEventoMutation({
        variables: {
          input: {
            eventoId,
            estado
          }
        }
      })
      refetch()
      if (res.data?.UpdateEstadoEvento) {
        return { ok: true }
      } else {
        return { ok: false, error: res.data?.UpdateEstadoEvento }
      }
    } catch (error: any) {
      return { ok: false, error: 'Hubo un error' }
    }
  }

  return {
    db,
    loading,
    refetch,
    createEvento,
    loadingCreate,
    loadingUpdate,
    updateEvento,
    deleteEvento,
    updateEstadoEvento
  }
}

export default useAllPedidos
