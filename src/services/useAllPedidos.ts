import { useGetAllPedidosQuery } from "../generated/graphql";

interface Ipedidos {
  pagina: number;
  numeroPagina: number;
  razonSocial: string;
  email: string;
  fechaInicial: string;
  fechaFinal: string;
}

const useAllPedidos = (values: Ipedidos) => {
  const { data, loading, refetch } = useGetAllPedidosQuery({
    fetchPolicy: "network-only",
    variables: { ...values },
  });
  const db = data?.GetAllPedidos?.data ?? [];

  const nTotal = data?.GetAllPedidos?.numeroTotal ?? 0;
  return {
    db,
    loading,
    refetch,
    nTotal,
  };
};

export default useAllPedidos;
