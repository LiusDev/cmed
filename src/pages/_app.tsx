import type { AppProps } from "next/app"
import { I18nextProvider } from "react-i18next"
import i18n from "@/translation/i18n"
import "@mantine/core/styles.css"
import "@/styles/globals.css"
import "@mantine/carousel/styles.css"
import "@mantine/notifications/styles.css"

import { MantineProvider, createTheme } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { Notifications } from "@mantine/notifications"

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const theme = createTheme({})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <I18nextProvider i18n={i18n}>
            <MantineProvider theme={theme}>
                <ModalsProvider>
                    <Notifications />
                    <Component {...pageProps} />
                </ModalsProvider>
            </MantineProvider>
        </I18nextProvider>
    )
}
