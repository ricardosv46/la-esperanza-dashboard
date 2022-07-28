import { useGetAllSuscriptoresQuery } from '../generated/graphql'

interface ISuscriptores {
  pagina: number
  numeroPagina: number
}

const useSuscriptores = ({ pagina, numeroPagina }: ISuscriptores) => {
  const { data, loading, refetch } = useGetAllSuscriptoresQuery({
    fetchPolicy: 'network-only',
    variables: {
      pagina,
      numeroPagina
    }
  })
  const db = data?.GetAllSuscriptores?.data ?? []
  const nTotal = data?.GetAllSuscriptores?.numeroTotal ?? 0
  const datos = data?.GetAllSuscriptores
  return {
    db,
    loading,
    refetch,
    nTotal,
    datos
  }
}

export default useSuscriptores
