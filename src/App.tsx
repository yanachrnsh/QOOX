import './index.css'
import { Landing } from './pages/landing.page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Landing />
		</QueryClientProvider>
	)
}

export default App
