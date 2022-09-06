import { useReporteGetAllPedidosQuery } from '../generated/graphql'

interface Props {
  fechaInicial: string
  fechaFinal: string
  razonSocial: string
  email: string
}

export const useGetReporteExcelPedidos = ({
  email,
  fechaFinal,
  fechaInicial,
  razonSocial
}: Props) => {
  const { data, loading, refetch } = useReporteGetAllPedidosQuery({
    fetchPolicy: 'network-only',
    variables: {
      email,
      fechaFinal,
      fechaInicial,
      razonSocial
    }
  })

  const reporte = data?.ReporteGetAllPedidos ?? ''

  return {
    loading,
    reporte
  }
}
