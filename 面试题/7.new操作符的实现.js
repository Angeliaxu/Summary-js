function create(Con, ...args) {
    let obj = {}
    Object.setPrototypeOf(obj, Con.prototype)
    let result = Con.apply(obj, args)
    return result instanceof Object ? result : obj
  }