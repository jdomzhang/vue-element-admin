import { GET } from '@/utils/request'

export const getToken = () => GET('/qiniu/upload/token')
