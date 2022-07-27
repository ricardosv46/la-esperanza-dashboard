import { useGetAllPrecioReferencialQuery } from '../generated/graphql'

const usePreciosPreferencial = () => {
  const { data, loading, refetch } = useGetAllPrecioReferencialQuery({
    fetchPolicy: 'network-only'
  })
  const db = data?.GetAllPrecioReferencial ?? []

  return {
    db,
    loading,
    refetch
  }
}

export default usePreciosPreferencial
