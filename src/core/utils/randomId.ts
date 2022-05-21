const randomId = (len: number = 6) => Math.random().toString(36).substr(3, len)

export default randomId