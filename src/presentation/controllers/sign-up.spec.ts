import { UserFactory } from '../../utils/user-factory'
import { SignUpController } from './sign-up'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const { email, password, confirmationPassword } =
      new UserFactory().makeUser()

    const httpRequest = {
      body: {
        email,
        password,
        confirmationPassword
      }
    }

    const sut = new SignUpController()

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toEqual(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: name'))
  })

  test('Should return 400 if no email is provided', () => {
    const { name, password, confirmationPassword } =
      new UserFactory().makeUser()

    const httpRequest = {
      body: {
        name,
        password,
        confirmationPassword
      }
    }

    const sut = new SignUpController()

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toEqual(400)
    expect(httpResponse.body).toEqual(new Error('Missing param: email'))
  })
})
