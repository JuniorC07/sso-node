import { type ICryptoProvider } from '../ICrypto'

import * as bcrypt from 'bcrypt'

export class BcryptProvider implements ICryptoProvider {
  async hash (string: string): Promise<string> {
    return await bcrypt.hash(string, 10)
  }

  async compare (string: string, encrypted: string): Promise<boolean> {
    return await bcrypt.compare(string, encrypted)
  }
}
