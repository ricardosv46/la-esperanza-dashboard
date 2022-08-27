import { useGetAllButacaEventoQuery, useAsignarPrecioButacaEventoMutation } from '../generated/graphql'

const useButacasEvento = ({ tendido, eventoId }: { tendido: string; eventoId: number }) => {
	const { data, loading, refetch } = useGetAllButacaEventoQuery({
		fetchPolicy: 'network-only',
		variables: {
			tendido,
			eventoId
		}
	})
	const db = data?.GetAllButacaEvento?.data ?? []

	// ACTUALIZAR PRECIO BUTACA

	const [UpdatePrecioMutation] = useAsignarPrecioButacaEventoMutation()

	const updatePrecioButaca = async (butacaEventoId: number, eventoId: number, precio: number) => {
		try {
			const res = await UpdatePrecioMutation({
				variables: {
					input: {
						butacaEventoId,
						eventoId,
						precio
					}
				}
			})
			refetch()
			if (res.data?.AsignarPrecioButacaEvento) {
				return { ok: true }
			}
		} catch (error: any) {
			return { ok: false, error: error?.graphQLErrors[0]?.debugMessage }
		}
	}
	return {
		db,
		loading,
		refetch,
		updatePrecioButaca
	}
}

export default useButacasEvento
