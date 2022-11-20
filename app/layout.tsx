import '../styles/globals.css'
import { ReactNode } from 'react'
import { Navigation } from './components/Navigation'

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>NextJs 13</title>
      </head>
      <body>
        <header>
          <h1>NextJs 13</h1>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  )
}
