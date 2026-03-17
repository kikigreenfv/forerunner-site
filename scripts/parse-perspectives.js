const CSV_URL = 'https://blobs.vusercontent.net/blob/Forerunner%20-%20Perspectives%20-%2067bafd4e267713b0ed138012-UFP571RyQU0SwiWKipRifEDHaaXH6B.csv';

// Map CSV author slugs to display names
const authorNames = {
  'kirsten-green': 'Kirsten Green',
  'eurie-kim': 'Eurie Kim',
  'nicole-johnson': 'Nicole Johnson',
  'jason-bornstein': 'Jason Bornstein',
  'fawzi-itani': 'Fawzi Itani',
  'brian-omalley': "Brian O'Malley",
  'kira-mccroden': 'Kira McCroden',
  'forerunner': 'Forerunner Ventures',
  'brian-omalley; jason-bornstein': "Brian O'Malley & Jason Bornstein",
  'kirsten-green; jason-bornstein': 'Kirsten Green & Jason Bornstein',
};

const authorTitles = {
  'Kirsten Green': 'Founder, Partner',
  'Eurie Kim': 'Partner',
  'Nicole Johnson': 'Partner',
  'Jason Bornstein': 'Partner, Head of Research',
  'Fawzi Itani': 'Principal',
  "Brian O'Malley": 'Board Partner',
  'Kira McCroden': 'VP, Head of Marketing & Communications',
  'Forerunner Ventures': '',
  "Brian O'Malley & Jason Bornstein": 'Board Partner & Partner, Head of Research',
  'Kirsten Green & Jason Bornstein': 'Founder, Partner & Partner, Head of Research',
};

function htmlToMarkdown(html) {
  if (!html) return '';
  let md = html;
  md = md.replace(/\s+id="[^"]*"/g, '');
  md = md.replace(/\s+style="[^"]*"/g, '');
  md = md.replace(/\s+class="[^"]*"/g, '');
  md = md.replace(/\s+data-[a-z-]+="[^"]*"/g, '');
  md = md.replace(/\s+(loading|width|height)="[^"]*"/g, '');
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*');
  md = md.replace(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)');
  md = md.replace(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi, '\n\n**$1**\n\n');
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  md = md.replace(/<\/?[ou]l[^>]*>/gi, '\n');
  md = md.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n');
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '');
  md = md.replace(/<img[^>]*\/?>/gi, '');
  md = md.replace(/<div[^>]*>([\s\S]*?)<\/div>/gi, '$1');
  md = md.replace(/<[^>]+>/g, '');
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#39;/g, "'");
  md = md.replace(/&nbsp;/g, ' ');
  md = md.replace(/\u200b/g, '');
  md = md.replace(/\u00a0/g, ' ');
  md = md.replace(/\n{3,}/g, '\n\n');
  return md.trim();
}

function parseCSV(text) {
  const rows = [];
  let current = '';
  let inQuotes = false;
  let row = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];
    if (inQuotes) {
      if (char === '"' && next === '"') { current += '"'; i++; }
      else if (char === '"') { inQuotes = false; }
      else { current += char; }
    } else {
      if (char === '"') { inQuotes = true; }
      else if (char === ',') { row.push(current); current = ''; }
      else if (char === '\n' || (char === '\r' && next === '\n')) {
        row.push(current); current = '';
        if (row.length > 1) rows.push(row);
        row = [];
        if (char === '\r') i++;
      } else { current += char; }
    }
  }
  if (current || row.length > 0) { row.push(current); if (row.length > 1) rows.push(row); }
  return rows;
}

function parseDate(dateStr) {
  if (!dateStr) return { formatted: '', year: 2025 };
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return { formatted: dateStr, year: 2025 };
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return { formatted: `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`, year: d.getUTCFullYear() };
}

function getCategory(title) {
  const lower = title.toLowerCase();
  if (lower.startsWith('introducing ') || lower.startsWith('investing in ')) return 'Investment Announcements';
  if (lower.includes('our investment in ') || lower.includes('our continued investment in ')) return 'Investment Announcements';
  return null;
}

function generateExcerpt(content, maxLength = 200) {
  const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0 && !p.trim().startsWith('#') && !p.trim().startsWith('**#'));
  let first = paragraphs[0] || '';
  let excerpt = first.replace(/\*\*([\s\S]*?)\*\*/g, '$1').replace(/\*([\s\S]*?)\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  // Collapse ALL whitespace (newlines, tabs, etc.) into single spaces
  excerpt = excerpt.replace(/[\r\n\t\u2028\u2029]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (excerpt.length > maxLength) excerpt = excerpt.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
  return excerpt;
}

function escapeQuote(s) { return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, ' ').replace(/\r/g, '').replace(/\u2028/g, ' ').replace(/\u2029/g, ' ').replace(/  +/g, ' ').trim(); }
function escapeBacktick(s) { return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${'); }

async function main() {
  const response = await fetch(CSV_URL);
  if (!response.ok) { process.exit(1); }
  const text = await response.text();

  const rows = parseCSV(text);
  const header = rows[0];

  const articles = [];
  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (row.length < 12) continue;
    const title = (row[0] || '').trim();
    const slug = (row[1] || '').trim();
    const isDraft = (row[6] || '').trim().toLowerCase() === 'true';
    const postBody = row[11] || '';
    const authorSlug = (row[12] || '').trim() || 'forerunner';
    const author = authorNames[authorSlug] || authorSlug;
    const datePub = (row[14] || '').trim();
    const publishedOn = (row[9] || '').trim();
    const perspectivesCategory = (row[13] || '').trim().toLowerCase();
    const investmentCompany = (row[19] || '').trim();
    if (isDraft || !title) continue;

    const { formatted, year } = parseDate(datePub || publishedOn);
    const content = htmlToMarkdown(postBody);
    const excerpt = generateExcerpt(content);
    const authorTitle = authorTitles[author] || '';
    // Use CSV category column, fall back to title-based detection
    let category;
    if (perspectivesCategory === 'thesese' || perspectivesCategory === 'theses') {
      category = 'Theses';
    } else if (perspectivesCategory === 'investments') {
      category = 'Investment Announcements';
    } else {
      category = null; // Blank in CSV = uncategorized
    }

    // Format company names: split on ";", capitalize, remove dashes
    let company = null;
    if (investmentCompany) {
      const companyMap = {
        'amplifymd': 'AmplifyMD', 'makersights': 'MakerSights', 'traveljoy': 'TravelJoy',
        'table22': 'Table22', 'hims-and-hers': 'Hims and Hers', 'a-frame': 'A Frame',
        'teal-health': 'Teal Health', 'topline-pro': 'Topline Pro', 'warby-parker': 'Warby Parker',
        'monarch-money': 'Monarch Money', 'the-yes': 'The Yes', 'tally-health': 'Tally Health',
        'stress-free': 'Stress Free', 'sika-health': 'Sika Health', 'basic-capital': 'Basic Capital',
      };
      company = investmentCompany.split(';').map(c => {
        const t = c.trim();
        if (companyMap[t]) return companyMap[t];
        // Default: capitalize each word, replace dashes with spaces
        return t.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      }).join(', ');
    }

    articles.push({ slug, title, date: formatted, year, author, authorTitle, category, company, excerpt, content });
  }

  articles.sort((a, b) => { const da = new Date(a.date); const db = new Date(b.date); return db.getTime() - da.getTime(); });

  // Build TS file
  const lines = [];
  lines.push('export type ArticleCategory = "Theses" | "Research" | "Investment Announcements"');
  lines.push('');
  lines.push('export type Article = {');
  lines.push('  slug: string');
  lines.push('  title: string');
  lines.push('  date: string');
  lines.push('  year: number');
  lines.push('  author: string');
  lines.push('  authorTitle: string');
  lines.push('  category: ArticleCategory | null');
  lines.push('  company?: string');
  lines.push('  excerpt: string');
  lines.push('  content: string');
  lines.push('}');
  lines.push('');
  lines.push('export const categories: ArticleCategory[] = ["Theses", "Research", "Investment Announcements"]');
  lines.push('');
  lines.push('// Author title mapping');
  lines.push('const authorTitles: Record<string, string> = {');
  for (const [name, title] of Object.entries(authorTitles)) {
    lines.push(`  "${escapeQuote(name)}": "${escapeQuote(title)}",`);
  }
  lines.push('}');
  lines.push('');
  lines.push('export function getAuthorTitle(author: string): string {');
  lines.push('  return authorTitles[author] || ""');
  lines.push('}');
  lines.push('');
  lines.push('export const articles: Article[] = [');

  for (const a of articles) {
    lines.push('  {');
    lines.push(`    slug: "${escapeQuote(a.slug)}",`);
    lines.push(`    title: "${escapeQuote(a.title)}",`);
    lines.push(`    date: "${escapeQuote(a.date)}",`);
    lines.push(`    year: ${a.year},`);
    lines.push(`    author: "${escapeQuote(a.author)}",`);
    lines.push(`    authorTitle: "${escapeQuote(a.authorTitle)}",`);
    lines.push(`    category: ${a.category ? `"${a.category}"` : 'null'},`);
    if (a.company) lines.push(`    company: "${escapeQuote(a.company)}",`);
    // Use backticks for excerpt to handle any surviving newlines
    const cleanExcerpt = a.excerpt.replace(/[\r\n\t\u2028\u2029]+/g, ' ').replace(/\s+/g, ' ').replace(/`/g, "'").replace(/\$\{/g, '$\\{').trim();
    lines.push(`    excerpt: \`${cleanExcerpt}\`,`);
    lines.push(`    content: \`${escapeBacktick(a.content)}\`,`);
    lines.push('  },');
  }

  lines.push(']');
  lines.push('');
  lines.push('export function getArticleBySlug(slug: string): Article | undefined {');
  lines.push('  return articles.find(article => article.slug === slug)');
  lines.push('}');
  lines.push('');
  lines.push('export function getAllArticles(): Article[] {');
  lines.push('  return articles');
  lines.push('}');
  lines.push('');
  lines.push('export function getYears(): number[] {');
  lines.push('  return [...new Set(articles.map(a => a.year))].sort((a, b) => b - a)');
  lines.push('}');
  lines.push('');
  lines.push('export function getCompanies(): string[] {');
  lines.push('  return [...new Set(articles.filter(a => a.company).map(a => a.company!))]');
  lines.push('    .sort((a, b) => a.localeCompare(b))');
  lines.push('}');
  lines.push('');

  const tsContent = lines.join('\n');
  // Output ONLY the TypeScript content
  console.log(tsContent);
}

main().catch(err => { console.error('Error:', err); process.exit(1); });
