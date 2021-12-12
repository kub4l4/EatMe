export class Users {
  id: string
  username: string
  email: string
  password: string
  roles: role[]
}

export class role {
  id: string
  name: string
}
