import { ReactNode } from 'react'
import Counter from './Counter';

export default function PostLayout ({ children }: { children: ReactNode }) {
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}
