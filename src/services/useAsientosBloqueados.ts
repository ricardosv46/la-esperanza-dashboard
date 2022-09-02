import { useDeleteAsientoBloqueadoMutation, useGetAllAsientosBloqueadosQuery } from '../generated/graphql'

const useAsientosBloqueados = () => {
	const { data, loading, refetch } = useGetAllAsientosBloqueadosQuery({
		fetchPolicy: 'network-only'
	})
	const db = data?.GetAllAsientosBloqueados ?? []

	//Delete
	const [DeleteAsiento, { loading: loadingDelete }] = useDeleteAsientoBloqueadoMutation()

	const deleteAsiento = async ({ asientoId }: { asientoId: number }) => {
		try {
			const res = await DeleteAsiento({
				variables: {
					asientoId
				}
			})
			refetch()
			if (res.data?.DeleteAsientoBloqueado) {
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
		deleteAsiento,
		loadingDelete
	}
}

export default useAsientosBloqueados
