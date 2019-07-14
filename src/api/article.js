import { GET, POST } from '@/utils/request'

export const fetchList = query => GET('/article/list', query)

export const fetchArticle = id => GET('/article/detail', { id })

export const fetchPv = pv => GET('/article/pv', { pv })

export const createArticle = data => POST('/article/create', data)

export const updateArticle = data => POST('/article/update', data)
