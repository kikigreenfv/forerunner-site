"use client"

import { Download } from "lucide-react"
import { useCallback } from "react"

interface PdfDownloadButtonProps {
  title: string
  author: string
  date: string
  className?: string
}

export function PdfDownloadButton({ title, author, date, className }: PdfDownloadButtonProps) {
  const handleDownload = useCallback(() => {
    // Create a print-friendly version and trigger print dialog
    const printWindow = window.open('', '_blank')
    if (!printWindow) {
      alert('Please allow pop-ups to download the PDF')
      return
    }

    // Get the article content
    const articleContent = document.querySelector('article')?.innerHTML || ''
    
    // Create print-friendly HTML
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title} - Forerunner Perspectives</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap');
            
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Source Serif 4', Georgia, serif;
              line-height: 1.7;
              color: #1a1a2e;
              max-width: 700px;
              margin: 0 auto;
              padding: 60px 40px;
            }
            
            .header {
              margin-bottom: 40px;
              padding-bottom: 24px;
              border-bottom: 1px solid #e5e5e5;
            }
            
            .logo {
              font-size: 12px;
              letter-spacing: 0.2em;
              text-transform: uppercase;
              color: #666;
              margin-bottom: 32px;
            }
            
            h1 {
              font-size: 28px;
              font-weight: 600;
              line-height: 1.3;
              margin-bottom: 16px;
              color: #1a1a2e;
            }
            
            .meta {
              font-size: 14px;
              color: #666;
            }
            
            .content h2 {
              font-size: 20px;
              font-weight: 600;
              margin-top: 32px;
              margin-bottom: 16px;
              color: #1a1a2e;
            }
            
            .content p {
              font-size: 16px;
              margin-bottom: 20px;
              color: #333;
            }
            
            .content strong {
              font-weight: 600;
              color: #1a1a2e;
            }
            
            .content a {
              color: #9F7AEA;
              text-decoration: underline;
            }
            
            .footer {
              margin-top: 48px;
              padding-top: 24px;
              border-top: 1px solid #e5e5e5;
              font-size: 12px;
              color: #666;
            }
            
            @media print {
              body {
                padding: 20px;
              }
              
              @page {
                margin: 1in;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">Forerunner Perspectives</div>
            <h1>${title}</h1>
            <div class="meta">${author} · ${date}</div>
          </div>
          <div class="content">
            ${articleContent}
          </div>
          <div class="footer">
            © ${new Date().getFullYear()} Forerunner Ventures. All rights reserved.<br>
            Downloaded from forerunnerventures.com
          </div>
        </body>
      </html>
    `

    printWindow.document.write(printContent)
    printWindow.document.close()
    
    // Wait for content to load then trigger print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print()
      }, 250)
    }
  }, [title, author, date])

  return (
    <button
      onClick={handleDownload}
      className={`group inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground hover:border-lavender hover:bg-lavender hover:text-navy transition-colors ${className || ''}`}
    >
      <Download className="w-4 h-4" />
      Download as PDF
    </button>
  )
}
