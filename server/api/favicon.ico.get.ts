import { readFile } from 'fs/promises'
import { resolve } from 'path'

export default defineEventHandler(async (event) => {
  try {
    const svgPath = resolve('./public/favicon.svg')
    const svgContent = await readFile(svgPath, 'utf-8')

    // Prevent caching completely
    setHeader(event, 'Content-Type', 'image/svg+xml')
    setHeader(event, 'Cache-Control', 'no-cache, no-store, must-revalidate')
    setHeader(event, 'Pragma', 'no-cache')
    setHeader(event, 'Expires', '0')

    return svgContent
  } catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Favicon not found'
    })
  }
})