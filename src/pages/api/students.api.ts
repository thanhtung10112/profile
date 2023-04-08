import { Students } from '@/interfaces/students.type'
import http from '@/utils/http'

export const fetchStudents = (page: number | string, limit: number | string) =>
  http.get<Students[]>('students', {
    params: {
      _page: page,
      _limit: limit
    }
  })
