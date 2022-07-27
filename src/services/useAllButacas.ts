import { useGetAllButacasQuery } from '../generated/graphql'

const useAllButacas = ({ tendido }: { tendido: string }) => {
  const { data, loading, refetch } = useGetAllButacasQuery({
    fetchPolicy: 'network-only',
    variables: {
      tendido
    }
  })
  const db = data?.GetAllButacas?.data ?? []

  // ACTUALIZAR PRECIO BUTACA
  return {
    db,
    loading,
    refetch
  }
}

export default useAllButacas
