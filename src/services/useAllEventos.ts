import { useGetAllEventosQuery } from '../generated/graphql'

interface IEventos {
  feriaId: number
  estado?: string | null
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
  return {
    db,
    loading,
    refetch
  }
}

export default useAllPedidos
