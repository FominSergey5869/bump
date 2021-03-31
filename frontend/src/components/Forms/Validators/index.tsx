export const composeValidators = (...validators:any) => (value: string) =>
  validators.reduce((error: any, validator: any) => error || validator(value), undefined)


export const required = (value: string) => (value ? undefined : 'Required')

export const maxBumpLength = (value: string) => (value.length > 160 ? 'To many symbols' : undefined)
