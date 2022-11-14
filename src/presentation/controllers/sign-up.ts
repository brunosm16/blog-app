import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const param = !httpRequest.body.name ? 'name' : 'email'

    return badRequest(new MissingParamError(`Missing param: ${param}`))
  }
}
