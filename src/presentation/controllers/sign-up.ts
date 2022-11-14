export class SignUpController {
  handle (httpRequest: any): any {
    const param = !httpRequest.body.name ? 'name' : 'email'
    return {
      statusCode: 400,
      body: new Error(`Missing param: ${param}`)
    }
  }
}
