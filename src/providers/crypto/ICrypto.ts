export interface ICryptoProvider {
  hash: (string: string) => Promise<string>
  compare: (string: string, hash: string) => Promise<boolean>
}
