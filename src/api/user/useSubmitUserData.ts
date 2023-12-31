import { useMutation } from '@tanstack/react-query'
import { UserData } from '../dto/usetData.dto'
import { api } from '../../core/api'

export const submitUserData = async (userData: UserData) => {
	await api.post('/users', userData)
}

export const useSubmitUserData = () => {
	const { mutate, isLoading, isError, isSuccess, error } =
		useMutation(submitUserData)
	return { mutate, isLoading, isError, isSuccess, error }
}
