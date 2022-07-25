import { useGetAllPedidosQuery } from '../generated/graphql'

interface Ipedidos {
  pagina: number
  numeroPagina: number
}

const useAllPedidos = ({ pagina, numeroPagina }: Ipedidos) => {
  const { data, loading, refetch } = useGetAllPedidosQuery({
    fetchPolicy: 'network-only',
    variables: {
      pagina,
      numeroPagina
    }
  })
  const db = data?.GetAllPedidos?.data ?? []
  return {
    db,
    loading,
    refetch
  }
}

export default useAllPedidos
