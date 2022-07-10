import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { DarkMode, FilterProvider } from '../src/context'
import { useLocalTheme } from '../src/hooks/useLocalTheme'
import { GlobalStyles } from '../src/styles/globals.styles'
import { darkTheme, globalTheme, lightTheme } from '../src/styles/themes'

function MyApp({ Component, pageProps }: AppProps) {

    const { theme, toggleTheme } = useLocalTheme()

    return (
        <FilterProvider>
            <DarkMode.Provider
                value={{ theme, toggleTheme }}
            >
                <ThemeProvider
                    theme={
                        theme === "dark"
                            ? { ...darkTheme, ...globalTheme }
                            : { ...lightTheme, ...globalTheme }
                    }
                >
                    <Component {...pageProps} />
                    <GlobalStyles />
                </ThemeProvider>
            </DarkMode.Provider>
        </FilterProvider>
    )
}

export default MyApp