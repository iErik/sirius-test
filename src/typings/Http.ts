export type ServiceError =
  Error | Response | boolean | null

export type ServiceReturn = [
  ServiceError,
  any
]

export type ApiMethod = 'post' | 'get' | 'delete'

export type ApiFn = {
  [method in ApiMethod]: Function
}
