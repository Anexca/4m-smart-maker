export const generateRandomId = (length = 8) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  return Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => characters.charAt(x % charactersLength))
    .join('')
}
