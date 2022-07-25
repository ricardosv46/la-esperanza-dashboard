import { useGetFeriaQuery } from '../generated/graphql'

const useFeria = () => {
  const { data, loading, refetch } = useGetFeriaQuery({
    fetchPolicy: 'network-only'
  })
  const db = data?.GetFeria ?? {}
  return {
    db,
    loading,
    refetch
  }
}

export default useFeria
