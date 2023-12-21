import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import { MergedRoutes } from '../../../paygen-server/src/routers/merge'

export const trpc = createTRPCProxyClient<MergedRoutes>({
	links: [httpBatchLink({ url: 'http://localhost:8080/trpc' })],
})
