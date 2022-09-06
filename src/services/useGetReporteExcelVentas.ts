import { useReporteGetAllVentasQuery } from '../generated/graphql'

interface Props {
  fechaInicial: string
  fechaFinal: string
  vendedorId: number | null
  tipoVenta: string
}

export const useGetReporteExcelVentas = ({
  vendedorId,
  fechaFinal,
  fechaInicial,
  tipoVenta
}: Props) => {
  const { data, loading, refetch } = useReporteGetAllVentasQuery({
    fetchPolicy: 'network-only',
    variables: {
      vendedorId,
      fechaFinal,
      fechaInicial,
      tipoVenta
    }
  })

  const reporte = data?.ReporteGetAllVentas ?? ''

  return {
    loading,
    reporte
  }
}
