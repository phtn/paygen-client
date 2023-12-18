import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import '@radix-ui/themes/styles.css'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider attribute='class'>
			<Theme
				appearance='light'
				accentColor='teal'
				grayColor='slate'
				radius='small'
				scaling='100%'>
				<App />
				<Toaster />
			</Theme>
		</ThemeProvider>
	</React.StrictMode>
)
