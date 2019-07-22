import { GET, POST } from '@/utils/request'

export const login = data => POST('/v1/admin/login', data)

export const getInfo = () => GET('/v1/admin/info')

export const logout = () => POST('/v1/admin/logout')
