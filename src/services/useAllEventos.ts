import {
  useCreateEventoMutation,
  useGetAllEventosQuery
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
  return {
    db,
    loading,
    refetch,
    createEvento,
    loadingCreate
  }
}

export default useAllPedidos
