import Link from 'next/link'
import { ReactElement } from 'react'
import { LikeButton } from './[id]/LikeButton'

interface Post {
    userId: Number,
    id: Number,
    title: String,
    body: String
  }

const fetchPost = (): Promise<Post[]> => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 10
    }
  })
    .then(response => response.json())
}

export default async function ListOfPosts (): Promise<ReactElement<any>> {
  const posts = await fetchPost()

  return (
    <div>
      {posts.slice(0, 5).map((post: Post) => (
        <article key={post.id.toString()}>
          <Link href='/posts/[id]' as={`/posts/${[post.id]}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <LikeButton id={post.id} />
          </Link>

        </article>
      ))}
    </div>
  )
}
