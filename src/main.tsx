import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme, ThemeOptions } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from '@context'
import { Toaster } from 'sonner'
import { App } from './App.tsx'
import '@radix-ui/themes/styles.css'
import './index.css'

const themeProps: ThemeOptions = {
	appearance: 'light',
	accentColor: 'indigo',
	grayColor: 'slate',
	panelBackground: 'solid',
	radius: 'small',
	scaling: '90%',
}

const toasterProps = {
	expand: true,
	richColors: true,
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider attribute='class'>
			<Theme {...themeProps}>
				<AuthProvider>
					<App />
				</AuthProvider>
			</Theme>
		</ThemeProvider>
		<Toaster {...toasterProps} />
	</StrictMode>
)
