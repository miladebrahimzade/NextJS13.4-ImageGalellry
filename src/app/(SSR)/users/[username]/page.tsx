import { UnsplashUser } from '@/models/unsplash-user'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Alert } from '@/components/bootstrap'

interface PageProps {
  params: { username: string }
}

async function getUser(username: string): Promise<UnsplashUser> {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  )

  if (response.status === 404) notFound()

  return await response.json()
}

// if we want to use axios
// const getUserCached = cache(getUser)

export async function generateMetadata({
  params: { username },
}: PageProps): Promise<Metadata> {
  const user = await getUser(username)

  return {
    title:
      ([user.first_name, user.last_name].filter(Boolean).join(' ') ||
        user.username) + ' - NextJS 13.4',
  }
}

export default async function UserPage({ params: { username } }: PageProps) {
  const user = await getUser(username)

  return (
    <div>
      <Alert>This Profile uses async generateMetadata</Alert>
      <h1>{user.username}</h1>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <a href={'https://unsplash.com/' + username}>Unsplash Profile</a>
    </div>
  )
}
