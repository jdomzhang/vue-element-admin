import { GET, POST } from '@/utils/request'

export const loginAdmin = data => POST('/v1/admin/login', data)

export const getInfo = () => GET('/v1/admin/info')

export const logoutAdmin = () => POST('/v1/admin/logout')
