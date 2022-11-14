import { faker } from '@faker-js/faker'

export class UserFactory {
  makeUser (): any {
    const password = faker.internet.password()

    return {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password,
      confirmationPassword: password
    }
  }
}
