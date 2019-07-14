import { GET } from '@/utils/request'

export const searchUser = name => GET('/search/user', { name })

export const transactionList = query => GET('/transaction/list', query)
