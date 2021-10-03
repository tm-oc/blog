import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export const utcToJST = (isoString: string): string => {
  if (!isoString) return ''
  const utcDate = new Date(isoString)
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo')
  const jstString = format(jstDate, 'yyyy/MM/dd')
  return jstString
}

export const toStringId = (value: string | string[]): string => {
  if (Array.isArray(value)) {
    return value[0]
  }
  return value
}

type Draft = {
  draftKey: string
}
export const isDraft = (arg: any): arg is Draft => {
  if (!arg?.draftKey) {
    return false
  }
  return typeof arg.draftKey === 'string'
}

export const range = (start: number, end: number) => {
  return [...Array(end - start + 1)].map((_, i) => start + i)
}
