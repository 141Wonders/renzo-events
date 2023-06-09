import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import { PageContextProvider } from './usePageContext'
import { childrenPropType } from './PropTypeValues'
import '@fontsource-variable/montserrat';
import '@fontsource/teko/600.css';
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js';

export { PageShell }

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
}
function PageShell({ pageContext, children }) {
  return (

    <PageContextProvider pageContext={pageContext}>
    <ChakraProvider theme={theme}>

      {children}


    </ChakraProvider>
    </PageContextProvider>
  )
}

Layout.propTypes = {
  children: childrenPropType
}
function Layout({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

Sidebar.propTypes = {
  children: childrenPropType
}
function Sidebar({ children }) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em'
      }}
    >
      {children}
    </div>
  )
}

Content.propTypes = {
  children: childrenPropType
}
function Content({ children }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  )
}
