import { HttpResponse } from '../protocols/http'

export const badRequest = (err): HttpResponse => ({
  statusCode: 400,
  body: err
})
