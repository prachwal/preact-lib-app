import type { Meta, StoryObj } from '@storybook/preact';
import { CodeBlock, type CodeBlockProps } from '.';

const meta: Meta<CodeBlockProps> = {
  title: 'Components/Special/CodeBlock',
  tags: ['autodocs'],
  component: CodeBlock,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<CodeBlockProps>;

export const Default: Story = {
  args: {
    children: (
      <pre>
        <code>{`function hello() {
  console.log("Hello, World!");
}`}</code>
      </pre>
    ),
  },
};

export const JavaScriptCode: Story = {
  args: {
    children: (
      <pre>
        <code>{`// JavaScript Example
const greet = (name) => {
  return \`Hello, \${name}!\`;
};

const result = greet("Developer");
console.log(result);`}</code>
      </pre>
    ),
  },
};

export const TypeScriptCode: Story = {
  args: {
    children: (
      <pre>
        <code>{`// TypeScript Example
interface User {
  id: number;
  name: string;
  email: string;
}

const getUser = async (id: number): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
};`}</code>
      </pre>
    ),
  },
};

export const PythonCode: Story = {
  args: {
    children: (
      <pre>
        <code>{`# Python Example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Generate first 10 Fibonacci numbers
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`}</code>
      </pre>
    ),
  },
};

export const HTMLCode: Story = {
  args: {
    children: (
      <pre>
        <code>{`<!-- HTML Example -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Sample Page</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <p>This is a sample page.</p>
  </body>
</html>`}</code>
      </pre>
    ),
  },
};

export const CSSCode: Story = {
  args: {
    children: (
      <pre>
        <code>{`/* CSS Example */
.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}`}</code>
      </pre>
    ),
  },
};

export const JSONCode: Story = {
  args: {
    children: (
      <pre>
        <code>{`{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A sample application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0",
    "react": "^18.2.0"
  }
}`}</code>
      </pre>
    ),
  },
};

export const BashCode: Story = {
  args: {
    children: (
      <pre>
        <code>{`#!/bin/bash
# Bash Script Example

echo "Starting deployment..."
npm install
npm run build
npm test

if [ $? -eq 0 ]; then
  echo "Deployment successful!"
else
  echo "Deployment failed!"
  exit 1
fi`}</code>
      </pre>
    ),
  },
};
