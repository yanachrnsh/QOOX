import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

if (import.meta.env.VITE_API_MOCKED) {
	// When development, setup the MSW.
	// import the worker (under the browser.ts file)
	import('./mocks/browser.ts').then(({ worker }) => {
		// Start the worker.
		worker.start()
	})
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
