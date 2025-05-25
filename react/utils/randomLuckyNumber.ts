export const randomLuckyNumber = () => {
    const pad = (n: number, len = 2) => n.toString().padStart(len, '0')
    const a = pad(Math.floor(Math.random() * 100))
    const b = pad(Math.floor(Math.random() * 100))
    const c = pad(Math.floor(Math.random() * 10000), 4)
    return `${a}-${b}-${c}`
}