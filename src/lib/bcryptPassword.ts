import bcrypt from "bcryptjs";

export function createHash(password: string) {
  return new Promise(async (resolve, reject) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    resolve(hash)
    reject(new Error("Error creating Hash"))
  })
}

export function isPasswordMatch(password: string, hashedPassword: string) {
  return new Promise(async (resolve, reject) => {
    let isMatch = await bcrypt.compare(password, hashedPassword)
    resolve(isMatch)
    reject(new Error("Error mathcing password"))
  })
}