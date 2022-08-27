import { useGetAllButacasQuery, useUpdatePrecioMutation } from '../generated/graphql'

const useButacasAbono = ({ tendido }: { tendido: string }) => {
	const { data, loading, refetch } = useGetAllButacasQuery({
		fetchPolicy: 'network-only',
		variables: {
			tendido
		}
	})
	const db = data?.GetAllButacas?.data ?? []

	// ACTUALIZAR PRECIO BUTACA

	const [UpdatePrecioMutation] = useUpdatePrecioMutation()

	const updatePrecioButaca = async (butacaId: string, precio: number) => {
		try {
			const res = await UpdatePrecioMutation({
				variables: {
					input: {
						butacaId,
						precio
					}
				}
			})
			refetch()
			if (res.data?.UpdatePrecio) {
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

export default useButacasAbono
