import { Imagen } from '../components/shared/ModalImages'
import {
  InputMaybe,
  useGetFeriaQuery,
  useUpdateFeriaMutation
} from '../generated/graphql'

export interface IUpdateFeria {
  feriaId: InputMaybe<string> | undefined
  titulo: string
  descripcionCorta: string
  descripcionLarga: string
  terminosCondiciones: string
  imagenPrincipal: Imagen
  imagenSecundaria?: Imagen
  fecha: string
  hora: string
  fechaInicial: string
  horaInicial: string
  fechaFinal: string
  horaFinal: string
  descuento: string
}

const useFeria = () => {
  const { data, loading, refetch } = useGetFeriaQuery({
    fetchPolicy: 'network-only'
  })
  const db = data?.GetFeria ?? {}
  // ACTUALIZAR FERIA
  const [UpdateFeria, { loading: loadingUpdate }] = useUpdateFeriaMutation()

  const updateFeria = async ({
    feriaId,
    titulo,
    descripcionCorta,
    descripcionLarga,
    terminosCondiciones,
    imagenPrincipal,
    imagenSecundaria,
    fecha,
    hora,
    fechaInicial,
    horaInicial,
    fechaFinal,
    horaFinal,
    descuento
  }: IUpdateFeria) => {
    try {
      const res = await UpdateFeria({
        variables: {
          input: {
            feriaId,
            titulo,
            descripcionCorta,
            descripcionLarga,
            terminosCondiciones,
            imagenPrincipal,
            imagenSecundaria,
            fecha,
            hora,
            fechaInicial,
            horaInicial,
            fechaFinal,
            horaFinal,
            descuento
          }
        }
      })
      refetch()
      if (res.data?.UpdateFeria) {
        return { ok: true }
      } else {
        return { ok: false, error: res.data?.UpdateFeria }
      }
    } catch (error: any) {
      return { ok: false, error: 'Hubo un error' }
    }
  }
  return {
    db,
    loading,
    refetch,
    updateFeria,
    loadingUpdate
  }
}

export default useFeria
