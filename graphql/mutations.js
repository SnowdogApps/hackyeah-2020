export const login = `mutation login(
    $input: UsersPermissionsLoginInput!
  ) {
    login(
        input: $input
    ) {
      jwt
    }
  }
`

export const register = `mutation register(
    $input: UsersPermissionsRegisterInput!
  ) {
    register(
      input: $input
    ) {
      user {
        username
        email
      }
    }
  }
`
