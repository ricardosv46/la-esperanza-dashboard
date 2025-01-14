import { useDeleteVentaMutation, useGetAllVentasQuery } from '../generated/graphql'

interface IPropsVenta {
  pagina: number
  numeroPagina: number
  vendedorId: number | null
  tipoVenta: string
  fechaInicial: string
  fechaFinal: string
}

const useVentas = ({
  pagina = 1,
  numeroPagina = 10,
  vendedorId = null,
  tipoVenta = '',
  fechaInicial = '',
  fechaFinal = ''
}: IPropsVenta) => {
  const { data, loading, refetch } = useGetAllVentasQuery({
    fetchPolicy: 'network-only',
    variables: {
      pagina,
      numeroPagina,
      vendedorId,
      tipoVenta,
      fechaInicial,
      fechaFinal
    }
  })
  const ventas = data?.GetAllVentas?.data ?? []
  const nTotal = data?.GetAllVentas?.numeroTotal ?? 0

  //DELETE VENTA
  const [DeleteVenta, { loading: loadingCreate }] = useDeleteVentaMutation()

  const deleteVenta = async ({ ventaId }: { ventaId: number }) => {
    try {
      const res = await DeleteVenta({
        variables: {
          ventaId
        }
      })
      refetch()
      if (res.data?.DeleteVenta) {
        return { ok: true }
      }
    } catch (error: any) {
      return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
    }
  }

  return {
    ventas,
    loading,
    refetch,
    nTotal,
    deleteVenta
  }
}

export default useVentas
