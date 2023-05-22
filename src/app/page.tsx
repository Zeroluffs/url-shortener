'use client'
import { InputField } from './InputField'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

export default function Home() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <InputField />
    </QueryClientProvider>
  )
}
