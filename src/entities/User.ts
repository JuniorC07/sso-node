export class User {
  public readonly id?: number
  public name: string
  public email: string
  public login: string
  public password: string
  public created_at: Date
  public updated_at?: Date | null

  constructor (props: User) {
    if (props.id) { this.id = props.id }
    this.name = props.name
    this.email = props.email
    this.login = props.login
    this.password = props.password
    this.created_at = props.created_at
    this.updated_at = props.updated_at
  }
}
