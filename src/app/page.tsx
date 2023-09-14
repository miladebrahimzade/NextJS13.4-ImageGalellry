import { Alert } from '@/components/bootstrap'

export default async function Home() {
  return (
    <div>
      <Alert>
        <p>
          Simple project with <strong> NextJS 13.4 app directory</strong> and
          lots of its features
        </p>
        <ul className='mb-0'>
          <li>static and dynamic server-side rendering</li>
          <li>incremental static rendering</li>
          <li>client-side rendering</li>
          <li>meta data</li>
          <li>route handlers (API endpoints)</li>
          <li>...</li>
        </ul>
      </Alert>
    </div>
  )
}
