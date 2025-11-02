import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function findScssFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findScssFiles(fullPath, files);
    } else if (path.extname(item) === '.scss') {
      files.push(fullPath);
    }
  }
  return files;
}

const scssDir = path.join(__dirname, '..', 'src', 'styles');
const outputFile = path.join(__dirname, '..', 'dist', 'merged.scss');

const files = findScssFiles(scssDir);
let content = '';

for (const file of files) {
  const relativePath = path.relative(scssDir, file);
  content += `// File: ${relativePath}\n`;
  content += fs.readFileSync(file, 'utf8') + '\n\n';
}

fs.writeFileSync(outputFile, content);
console.log('Merged SCSS files to', outputFile);