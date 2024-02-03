'use client'

import { StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      {children}
    </StyledEngineProvider>
  )
}

export default Providers
