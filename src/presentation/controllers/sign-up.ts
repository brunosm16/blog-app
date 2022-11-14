import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const param = !httpRequest.body.name ? 'name' : 'email'
    return {
      statusCode: 400,
      body: new MissingParamError(`Missing param: ${param}`)
    }
  }
}
