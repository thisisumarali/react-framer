import { createClient } from '@sanity/client'


const projectId = 'omqqd1mv'
const dataset = 'production'
const apiVersion = "2025-01-01"
const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})
export default client