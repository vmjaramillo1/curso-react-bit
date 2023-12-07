import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const client = new QueryClient()

export default function Providers({ children }) {
  return (
    <>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}