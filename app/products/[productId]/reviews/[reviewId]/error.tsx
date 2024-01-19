'use client' // Error components must be Client Components
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      {error.message}
    </div>
  )
}