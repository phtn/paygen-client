import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { AccountRouter } from '../../../paygen-server/src/routers/account'

export const trpc = createTRPCProxyClient<AccountRouter>({
	links: [httpBatchLink({ url: 'http://localhost:8080/trpc' })],
})
