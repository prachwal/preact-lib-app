import { Button } from '@/components'
import { useState } from 'preact/hooks'

export function Main() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <section class="card">
        <Button variant='secondary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </section>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
    </main>
  )
}