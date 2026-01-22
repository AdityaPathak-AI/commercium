import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [health, setHealth] = useState<string | null>(null)
  const [author, setAuthor] = useState<{ name?: string; blog?: string; bio?: string; location?: string } | null>(null)

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/health')
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        setHealth(JSON.stringify(data, null, 2))
      } catch (err) {
        setHealth(String(err))
      }
    }

    void fetchHealth()
  }, [])

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await fetch('https://api.github.com/users/AdityaPathak-AI')
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        setAuthor({
          name: data.name,
          blog: data.blog,
          bio: data.bio,
          location: data.location,
        })
      } catch (err) {
        console.error('Error fetching author GitHub data:', err)
        setAuthor(null)
      }
    }

    void fetchAuthor()
  }, [])

  return (
    <>
     <div>
      <h3>Author</h3>
      {author ? (
        <div style={{ textAlign: 'left' }}>
          <div><strong>Name:</strong> {author.name ?? '-'}</div>
          <div><strong>Blog:</strong> {author.blog ? <a href={author.blog} target="_blank" rel="noreferrer">{author.blog}</a> : '-'}</div>
          <div><strong>Bio:</strong> {author.bio ?? '-'}</div>
          <div><strong>Location:</strong> {author.location ?? '-'}</div>
        </div>
      ) : (
        <div>Loading author...</div>
      )}
     </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <pre style={{ textAlign: 'left', marginTop: 12, background: '#f6f8fa', padding: 8, borderRadius: 6 }}>
          {health ?? 'Checking backend health...'}
        </pre>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
