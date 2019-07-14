import { GET, POST } from '@/utils/request'

export const login = data => POST('/user/login', data)

export const getInfo = token => GET('/user/info', { token })

export const logout = () => POST('/user/logout')
