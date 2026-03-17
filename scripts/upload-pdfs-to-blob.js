import { put } from '@vercel/blob';

const PDFs = [
  {
    oldUrl: 'https://cdn.prod.website-files.com/67bafd4e267713b0ed137fd8/690269964e6db226d3a155f3_Forerunner%20Research_%20Our%20Source%20of%20Truth%20on%20Prosumer.pdf',
    slug: 'our-source-of-truth-on-prosumer-software',
    filename: 'forerunner-prosumer-research.pdf'
  },
  {
    oldUrl: 'https://cdn.prod.website-files.com/67bafd4e267713b0ed137fd8/67d315903bd3c443460668ea_Forerunner%20Research%20-%20Our%20Source%20of%20Truth%20on%20Marketplaces.pdf',
    slug: 'our-source-of-truth-on-marketplaces',
    filename: 'forerunner-marketplaces-research.pdf'
  },
  {
    oldUrl: 'https://cdn.prod.website-files.com/67bafd4e267713b0ed137fd8/67d32555e5f1f18ea7f2a26a_Forerunner%20Consumer%20Trend%20Report%202024.pdf',
    slug: 'consumer-trend-report-2024',
    filename: 'forerunner-consumer-trend-2024.pdf'
  },
  {
    oldUrl: 'https://cdn.prod.website-files.com/67bafd4e267713b0ed137fd8/67da14398387d7948eb8cdac_2025%20Forerunner%20Consumer%20Trend%20Report.pdf',
    slug: 'our-2025-annual-consumer-trend-report',
    filename: 'forerunner-consumer-trend-2025.pdf'
  },
  {
    oldUrl: 'https://cdn.prod.website-files.com/67bafd4e267713b0ed137fd8/67d31790dae3851e148cb484_Forerunner%20State%20of%20the%20Market%20Report%20-%20Fall%202024.pdf',
    slug: 'forerunner-state-of-the-market-ai-fall-2024',
    filename: 'forerunner-state-of-market-fall-2024.pdf'
  }
];

async function uploadPDFs() {
  console.log('Starting PDF upload to Vercel Blob...\n');
  const results = [];

  for (const pdf of PDFs) {
    try {
      console.log(`Downloading: ${pdf.filename}...`);
      const response = await fetch(pdf.oldUrl);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const buffer = await response.arrayBuffer();
      
      console.log(`Uploading to Blob: ${pdf.filename}...`);
      const blob = await put(pdf.filename, buffer, {
        access: 'public',
        contentType: 'application/pdf'
      });
      
      results.push({
        slug: pdf.slug,
        newUrl: blob.url
      });
      
      console.log(`✓ ${pdf.filename}\n  → ${blob.url}\n`);
    } catch (error) {
      console.error(`✗ Failed to upload ${pdf.filename}:`, error.message);
    }
  }

  console.log('\n--- Update perspectives-data.ts with these URLs ---\n');
  results.forEach(r => {
    console.log(`slug: "${r.slug}"\ndownloadUrl: "${r.newUrl}"\n`);
  });
}

uploadPDFs().catch(console.error);
