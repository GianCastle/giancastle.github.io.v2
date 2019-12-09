import curry from 'crocks/helpers/curry'

export const log = curry(
  (logger, name, value) =>
    (value.inspect ? logger(name, value.inspect()) : logger(name, value)) ||
    value
)

export const consoleLogger = log(console.log.bind(console))

export const fork = curry((lf, rg, a) => a.fork(lf, rg))
