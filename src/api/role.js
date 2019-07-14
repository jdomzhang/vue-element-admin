import { GET, POST, PUT, DELETE } from '@/utils/request'

export const getRoutes = () => GET('/routes')

export const getRoles = () => GET('/roles')

export const addRole = data => POST('/role', data)

export const updateRole = (id, data) => PUT(`/role/${id}`, data)

export const deleteRole = id => DELETE(`/role/${id}`)
