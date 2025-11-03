import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function findFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findFiles(fullPath, files);
    } else {
      const ext = path.extname(item);
      if ((ext === '.tsx' || ext === '.ts' || ext === '.scss') && 
          !item.includes('.test.') && !item.includes('.stories.')) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

const srcDir = path.join(__dirname, '..', 'src');
const outputFile = path.join(__dirname, '..', 'dist', 'merged.txt');

const files = findFiles(srcDir);
let content = '';

for (const file of files) {
  const relativePath = path.relative(srcDir, file);
  content += `// ===== File: ${relativePath} =====\n`;
  content += fs.readFileSync(file, 'utf8') + '\n\n';
}

fs.writeFileSync(outputFile, content);
console.log('Merged files to', outputFile);