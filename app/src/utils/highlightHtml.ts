import cheerio from 'cheerio'
import hljs from 'highlight.js'

export const highlightHtml = (html: string): string => {
  if (!html) return ''
  const $ = cheerio.load(html)
  $('pre code').each((_, elm) => {
    if (!$(elm).text().indexOf('$')) {
      $(elm).html(
        hljs.highlight($(elm).text(), {
          language: 'shell',
          ignoreIllegals: true,
        }).value,
      )
    } else {
      $(elm).html(hljs.highlightAuto($(elm).text()).value)
    }
  })
  return $.html()
}
