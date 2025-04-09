import React, { useState } from 'react'
import { tweets } from '@/shared/tweetsData'
import { TweetGrid } from '../ui/tweet-grid'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

function Tweets() {
  // const [tweets, setTweets] = useState()
  const [showMore, setShowMore] = useState<boolean>(false)

  const tweetsIds = tweets.map(tweet => tweet.id)

  return (
    <div>
      <p className='text-secondary text-xl'>Love that we get from our community</p>

      <h1 className='text-secondary text-5xl font-semibold'>Tweet Love</h1>

      <div className={cn('overflow-hidden',
        showMore && "h-fit",
        !showMore && "h-[150dvh] fade-bottom"
      )}>
        <TweetGrid tweets={tweetsIds} />
      </div>
      <Button className='bg-transparent border-2 border-primary text-primary cursor-pointer hover:text-black'
        onClick={() => setShowMore(!showMore  )}
      >
        {showMore ? 'Show less' : 'Show More'}
      </Button>
    </div>
    
  )
}

export default Tweets