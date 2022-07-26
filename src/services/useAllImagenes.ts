import { useGetAllImagenesQuery } from '../generated/graphql'

interface IImagenes {
  pagina: number
  numeroPagina: number
}

const useAllImagenes = ({ pagina, numeroPagina }: IImagenes) => {
  const { data, loading, refetch } = useGetAllImagenesQuery({
    fetchPolicy: 'network-only',
    variables: {
      pagina,
      numeroPagina
    }
  })
  const db = data?.GetAllImagenes?.data ?? []
  return {
    db,
    loading,
    refetch
  }
}

export default useAllImagenes
