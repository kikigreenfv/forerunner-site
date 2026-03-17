import { generateText } from 'ai'
import { investments } from '@/lib/investments-data'

export async function POST(req: Request) {
  const { query } = await req.json()

  // Build enriched context with both short and long descriptions for better semantic matching
  const investmentContext = investments.map(inv => ({
    company: inv.company,
    year: inv.year,
    category: inv.category,
    categorySecondary: inv.categorySecondary,
    summary: inv.description,
    details: inv.longDescription,
  }))

  const prompt = `You are a helpful assistant for Forerunner Ventures. Given a user's natural language query about investments, return a JSON array of company names that match the query.

Here is the full list of Forerunner's investments with detailed descriptions:
${JSON.stringify(investmentContext, null, 2)}

User query: "${query}"

Analyze the query and return ONLY a JSON array of company names that match. Consider:
- Direct keyword matches in company names, summaries, or detailed descriptions
- Semantic matches (e.g., "women's health" should match companies focused on women's health like Teal Health for cervical cancer screening, even if those exact words aren't used)
- Companies solving related problems (e.g., "mental health" should include therapy, psychology, and wellness companies)
- Category relevance (primary and secondary categories)
- Year if mentioned
- The detailed descriptions provide important context about what problems each company solves

Return ONLY a valid JSON array of strings (company names), nothing else. If no matches found, return an empty array [].
Example response: ["Company A", "Company B"]`

  try {
    const { text } = await generateText({
      model: 'openai/gpt-4o-mini',
      prompt,
      maxOutputTokens: 1000,
      temperature: 0.3,
    })

    // Parse the response to get company names
    const cleanedText = text.trim().replace(/```json\n?|\n?```/g, '')
    const matchedCompanies = JSON.parse(cleanedText) as string[]

    // Validate that returned companies exist in our data
    const validCompanies = matchedCompanies.filter(name =>
      investments.some(inv => inv.company === name)
    )

    return Response.json({ companies: validCompanies })
  } catch (error: unknown) {
    console.error('Search error:', error)
    
    // Check for AI Gateway verification error
    const errorMessage = error instanceof Error ? error.message : String(error)
    if (errorMessage.includes('credit card') || errorMessage.includes('customer_verification_required')) {
      return Response.json({ 
        companies: [], 
        error: 'AI search requires Vercel AI Gateway setup. Please use the Year and Category filters instead.',
        requiresSetup: true 
      }, { status: 200 })
    }
    
    return Response.json({ companies: [], error: 'Search failed. Please try again.' }, { status: 200 })
  }
}
