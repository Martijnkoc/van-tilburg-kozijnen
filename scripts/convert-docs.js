import markdownpdf from 'markdown-pdf';
import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const docsDir = join(__dirname, '..', 'public', 'docs');

try {
  const files = (await readdir(docsDir)).filter(file => file.endsWith('.md'));

  for (const file of files) {
    const mdPath = join(docsDir, file);
    const pdfPath = mdPath.replace('.md', '.pdf');
    
    markdownpdf()
      .from(mdPath)
      .to(pdfPath, () => {
        console.log(`Converted ${file} to PDF`);
      });
  }
} catch (error) {
  console.error('Error:', error);
}
