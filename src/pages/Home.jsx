import React, { useState } from 'react'

import Card from '../components/Card'
import Button from '../components/Button'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="page home-page">
      <div
        className="hero"
        
      >
        <h1>create-a-ip-tv-services-can-user-can-see-all-count</h1>
        <p className="tagline">Create a Ip tv services Can user can see All country yv channels use color green and blaack</p>
      </div>

      <section className="features">
        <Card title="Feature 1" description="Amazing functionality">
          <Button onClick={() => setCount(count + 1)}>
            Clicked {count} times
          </Button>
        </Card>

        <Card title="Feature 2" description="Beautiful design">
          <p>Built with modern technologies</p>
        </Card>

        <Card title="Feature 3" description="Easy to use">
          <p>Get started in minutes</p>
        </Card>
      </section>
    </div>
  )
}

export default Home