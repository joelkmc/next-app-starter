import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const ReactQueryProvider: React.FC = ({ children }) => {
  const queryClientRef = useRef<QueryClient>()

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          // TODO: if error.code === 404 push to /404
          // TODO: if error.code === 401 push to /401
          // TODO: if error.code === 403 push to /403
          retry: 0,
        },
      },
    })
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children} <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
