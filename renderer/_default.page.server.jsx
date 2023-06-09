export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import logoUrl from './logo.svg'

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Renzo Events | Houston'
  const desc = (documentProps && documentProps.description) || 'Compare class schedules of your favorite Renzo Gracie Academy in the Greater Houston Area.'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta name="keywords" content="calendar, events, schedule, organizer, Renzo, Gracie, Renzo Gracie, Renzo Gracie Houston, Houston, BJJ, bjj, no-gi,
        no-gi bjj, nogi bjj, kids bjj, advanced kids bjj, bjj events, bjj school, bjj school houston, Renzo Events, Renzo Gracie Houston, Renzo Gracie Grove,
        the grove, main street bjj, riverstone, uchikomi, open mat, open mat houston, wrestling, warrior wednesday, muay thai, Muay Thai Houston, 
        LEO bjj, leo bjj, veterans bjj, open mat bjj, houston, houston area bjj, houston area BJJ, houston open mat, renzo gracie class, 
        renzo gracie schedule, renzo gracie calendar, judo, early morning bjj, evening bjj, live training, bjj classes, bjj class, BJJ class,
        Renzo Gracie HTX, Houston Downtown BJJ Renzo Gracie Riverstone, houston bjj schedule, bjj schedule, bjj calendar, renzo gracie schedule, renzo gracie
        events">
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
