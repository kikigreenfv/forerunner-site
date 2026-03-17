const PERSPECTIVES_CSV_URL = 'https://blobs.vusercontent.net/blob/Forerunner%20-%20Perspectives%20-%2067bafd4e267713b0ed138012-UFP571RyQU0SwiWKipRifEDHaaXH6B.csv';
const RESEARCH_CSV_URL = 'https://blobs.vusercontent.net/blob/Forerunner%20-%20Researches%20-%2067bafd4e267713b0ed13805f-qhmmF1v35Fd44yTQKnEfCcpn0xujtc.csv';

const authorNames = {
  'kirsten-green': 'Kirsten Green', 'eurie-kim': 'Eurie Kim', 'nicole-johnson': 'Nicole Johnson',
  'jason-bornstein': 'Jason Bornstein', 'fawzi-itani': 'Fawzi Itani', 'brian-omalley': "Brian O'Malley",
  'kira-mcroden': 'Kira McCroden', 'forerunner': 'Forerunner Ventures',
  'brian-omalley; jason-bornstein': "Brian O'Malley & Jason Bornstein",
  'kirsten-green; jason-bornstein': 'Kirsten Green & Jason Bornstein',
};

const authorTitles = {
  'Kirsten Green': 'Founder, Partner', 'Eurie Kim': 'Partner', 'Nicole Johnson': 'Partner',
  'Jason Bornstein': 'Partner, Head of Research', 'Fawzi Itani': 'Principal',
  "Brian O'Malley": 'Board Partner', 'Kira McCroden': 'VP, Head of Marketing & Communications',
  'Forerunner Ventures': '', "Brian O'Malley & Jason Bornstein": 'Board Partner & Partner, Head of Research',
  'Kirsten Green & Jason Bornstein': 'Founder, Partner & Partner, Head of Research',
};

function parseCSV(text) {
  const lines = text.split('\n');
  const result = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const row = [];
    let current = '';
    let insideQuotes = false;
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      const nextChar = line[j + 1];
      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          current += '"';
          j++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === ',' && !insideQuotes) {
        row.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    row.push(current);
    if (row.some(f => f.trim())) result.push(row);
    i++;
  }
  return result;
}

function htmlToMarkdown(html) {
  if (!html) return '';
  return html
    // Headers
    .replace(/<h1[^>]*>([^<]*)<\/h1>/gi, '# $1\n\n')
    .replace(/<h2[^>]*>([^<]*)<\/h2>/gi, '## $1\n\n')
    .replace(/<h3[^>]*>([^<]*)<\/h3>/gi, '### $1\n\n')
    .replace(/<h4[^>]*>([^<]*)<\/h4>/gi, '#### $1\n\n')
    .replace(/<h5[^>]*>([^<]*)<\/h5>/gi, '##### $1\n\n')
    .replace(/<h6[^>]*>([^<]*)<\/h6>/gi, '###### $1\n\n')
    // Paragraphs
    .replace(/<p[^>]*>([^<]*)<\/p>/gi, '$1\n\n')
    // Line breaks
    .replace(/<br\s*\/?>/gi, '\n')
    // Bold and italic
    .replace(/<strong[^>]*>([^<]*)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>([^<]*)<\/em>/gi, '*$1*')
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([^<]*)<\/a>/gi, '[$2]($1)')
    // Lists
    .replace(/<ul[^>]*>/gi, '\n')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '\n')
    .replace(/<\/ol>/gi, '\n')
    .replace(/<li[^>]*>([^<]*)<\/li>/gi, '- $1\n')
    // Blockquotes
    .replace(/<blockquote[^>]*>([^<]*)<\/blockquote>/gi, '> $1\n\n')
    // Strip remaining HTML tags
    .replace(/<[^>]+>/g, '')
    // HTML entities
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&apos;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    // Normalize whitespace
    .replace(/\n\n\n+/g, '\n\n')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

function generateExcerpt(content, maxLength = 200) {
  const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0 && !p.trim().startsWith('#'));
  let first = paragraphs[0] || '';
  let excerpt = first.replace(/\*\*([\s\S]*?)\*\*/g, '$1').replace(/\*([\s\S]*?)\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  excerpt = excerpt.replace(/[\r\n\t\u2028\u2029]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (excerpt.length > maxLength) excerpt = excerpt.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
  return excerpt;
}

function parseDate(dateStr) {
  if (!dateStr) {
    const now = new Date();
    return { formatted: now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), year: now.getFullYear() };
  }
  const d = new Date(dateStr);
  const formatted = d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const year = d.getFullYear();
  return { formatted, year };
}

function escapeQuote(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\r?\n/g, ' ').replace(/\r/g, '').replace(/\u2028/g, ' ').replace(/\u2029/g, ' ').replace(/  +/g, ' ').trim();
}

async function parseArticles(csvUrl, type) {
  const response = await fetch(csvUrl);
  const text = await response.text();
  const rows = parseCSV(text);
  const header = rows[0];
  const articles = [];

  if (type === 'perspectives') {
    // Perspectives CSV columns
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const slug = (row[1] || '').trim();
      const title = (row[0] || '').trim();
      const isDraft = row[6] === '1';
      const postBody = row[11] || '';
      const authorSlug = (row[12] || '').trim() || 'forerunner';
      const perspectivesCategory = (row[13] || '').trim().toLowerCase();
      const companyField = (row[19] || '').trim();
      const datePub = (row[14] || '').trim();
      const publishedOn = (row[9] || '').trim();

      if (isDraft || !title) continue;

      const { formatted, year } = parseDate(datePub || publishedOn);
      const content = htmlToMarkdown(postBody);
      const excerpt = generateExcerpt(content);
      const author = authorNames[authorSlug] || authorSlug;
      const authorTitle = authorTitles[author] || '';

      let category = null;
      if (perspectivesCategory === 'thesese' || perspectivesCategory === 'theses') category = 'Theses';
      else if (perspectivesCategory === 'investments') category = 'Investment Announcements';

      let company = null;
      if (companyField) {
        const companyMap = {
          'amplifymd': 'AmplifyMD', 'makersights': 'MakerSights', 'traveljoy': 'TravelJoy',
          'table22': 'Table22', 'hims-and-hers': 'Hims and Hers', 'a-frame': 'A Frame',
          'teal-health': 'Teal Health', 'topline-pro': 'Topline Pro', 'warby-parker': 'Warby Parker',
          'monarch-money': 'Monarch Money', 'the-yes': 'The Yes', 'tally-health': 'Tally Health',
          'stress-free': 'Stress Free', 'sika-health': 'Sika Health',
        };
        company = companyField.split(';').map(c => {
          const t = c.trim();
          return companyMap[t] || t.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        }).join(', ');
      }

      articles.push({ slug, title, date: formatted, year, author, authorTitle, category, company: company || null, excerpt, content });
    }
  } else if (type === 'research') {
    // Research CSV columns
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const slug = (row[1] || '').trim();
      const title = (row[0] || '').trim();
      const isDraft = row[6] === '1';
      const postBody = row[11] || '';
      const datePub = (row[14] || '').trim();
      const publishedOn = (row[9] || '').trim();
      const downloadUrl = (row[22] || '').trim(); // Column 22 = Download File

      if (isDraft || !title) continue;

      const { formatted, year } = parseDate(datePub || publishedOn);
      const content = htmlToMarkdown(postBody);
      const excerpt = generateExcerpt(content);

      articles.push({
        slug,
        title,
        date: formatted,
        year,
        author: 'Forerunner Ventures',
        authorTitle: '',
        category: 'Reports',
        company: null,
        excerpt,
        content,
        downloadUrl: downloadUrl || null,
      });
    }
  }

  return articles;
}

async function main() {
  const perspectives = await parseArticles(PERSPECTIVES_CSV_URL, 'perspectives');
  const research = await parseArticles(RESEARCH_CSV_URL, 'research');
  const articles = [...perspectives, ...research].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  const lines = [
    "export type ArticleCategory = 'Investment Announcements' | 'Theses' | 'Reports';",
    "export interface Article {",
    "  slug: string;",
    "  title: string;",
    "  date: string;",
    "  year: number;",
    "  author: string;",
    "  authorTitle: string;",
    "  category: ArticleCategory | null;",
    "  company: string | null;",
    "  excerpt: string;",
    "  content: string;",
    "  downloadUrl?: string | null;",
    "}",
    "",
    "export const articles: Article[] = [",
  ];

  articles.forEach(a => {
    const cleanExcerpt = a.excerpt.replace(/[\r\n\t\u2028\u2029]+/g, ' ').replace(/\s+/g, ' ').replace(/`/g, "'").replace(/\$\{/g, '$\\{').trim();
    const categoryVal = a.category ? `"${a.category}"` : 'null';
    const companyVal = a.company ? `"${a.company}"` : 'null';
    const downloadVal = a.downloadUrl ? `"${a.downloadUrl}"` : 'null';
    
    lines.push('  {');
    lines.push(`    slug: "${a.slug}",`);
    lines.push(`    title: "${a.title}",`);
    lines.push(`    date: "${a.date}",`);
    lines.push(`    year: ${a.year},`);
    lines.push(`    author: "${a.author}",`);
    lines.push(`    authorTitle: "${a.authorTitle}",`);
    lines.push(`    category: ${categoryVal},`);
    lines.push(`    company: ${companyVal},`);
    lines.push(`    excerpt: \`${cleanExcerpt}\`,`);
    lines.push(`    content: \`${a.content.replace(/`/g, "'").replace(/\$\{/g, '$\\{')}\`,`);
    if (a.downloadUrl) lines.push(`    downloadUrl: "${a.downloadUrl}",`);
    lines.push('  },');
  });

  lines.push('];', '', 'export const categories: ArticleCategory[] = ["Investment Announcements", "Theses", "Reports"];');
  lines.push('', 'export function getYears(): number[] {', '  return [...new Set(articles.map(a => a.year))].sort((a, b) => b - a);', '}');
  lines.push('', 'export function getCompanies(): string[] {', '  const allCompanies: string[] = [];', '  articles.forEach(a => {', '    if (a.company) {', "      a.company.split(', ').forEach(c => {", '        const trimmed = c.trim();', '        if (trimmed && !allCompanies.includes(trimmed)) allCompanies.push(trimmed);', '      });', '    }', '  });', '  return allCompanies.sort((a, b) => a.localeCompare(b));', '}');

  const tsContent = lines.join('\n');
  console.log(tsContent);
}

main().catch(console.error);
