import { j as jsx } from "../chunks/chunk-ac9dafa4.js";
import ReactDOMServer from "react-dom/server";
import React from "react";
import PropTypes from "prop-types";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
import "react/jsx-runtime";
const logoUrl = "/assets/static/logo.0f62d96c.svg";
let childrenPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;
const Context = React.createContext(void 0);
PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
const index = "";
const _600 = "";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false
};
const theme = extendTheme({
  config,
  fonts: {
    heading: `'Teko', sans-serif`,
    body: `'Montserrat Variable', sans-serif`
  }
});
PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageShell({ pageContext, children }) {
  return /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsx(ChakraProvider, { theme, children }) });
}
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Renzo Events | Houston";
  const desc = documentProps && documentProps.description || "Compare class schedules of your favorite Renzo Gracie Academy in the Greater Houston Area.";
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
    </html>`;
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
