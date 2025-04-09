
async function fetchTweets() {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TWITTER_BEARER_TOKEN}`
    }
  };
  
  const tweets = await fetch('https://api.twitter.com/2/tweets/search/recent?max_results=10&query=ChaiCode', options)
    .then(response => response.json())
    .then(response => response.data)
    .catch(err => console.error(err));

  return tweets;
}

export default fetchTweets

// {
//   "data": [
//     {
//       "id": "1332327949",
//       "name": "Hitesh Choudhary",
//       "username": "Hiteshdotcom"
//     }
//   ]
// }

// 'https://api.twitter.com/2/users/1332327949/mentions?max_results=5'


// fetch('https://api.twitter.com/2/users/1332327949/mentions?max_results=2&tweet.fields=created_at&tweet.fields=text&tweet.fields=article&tweet.fields=attachments&tweet.fields=author_id&tweet.fields=entities&tweet.fields=id&tweet.fields=public_metrics&tweet.fields=source&user.fields=name&user.fields=profile_banner_url&user.fields=profile_image_url&user.fields=username&user.fields=id&user.fields=url&media.fields=preview_image_url&media.fields=variants&media.fields=alt_text&media.fields=url', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


// fetch('https://api.twitter.com/2/tweets/search/recent?max_results=10&query=Hiteshdotcom&tweet.fields=article&tweet.fields=attachments&tweet.fields=author_id&tweet.fields=card_uri&tweet.fields=created_at&tweet.fields=entities&tweet.fields=source&tweet.fields=public_metrics&media.fields=alt_text&media.fields=preview_image_url&media.fields=url&media.fields=type&media.fields=variants&user.fields=created_at&user.fields=entities&user.fields=id&user.fields=name&user.fields=profile_banner_url&user.fields=profile_image_url&user.fields=url&user.fields=username&user.fields=description', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// fetch('https://api.twitter.com/2/tweets/search/recent?max_results=10&query=Hiteshdotcom&tweet.fields=article&tweet.fields=attachments&tweet.fields=author_id&tweet.fields=card_uri&tweet.fields=created_at&tweet.fields=entities&tweet.fields=public_metrics&tweet.fields=scopes&tweet.fields=source&media.fields=alt_text&media.fields=preview_image_url&media.fields=type&media.fields=url&media.fields=variants&media.fields=media_key&user.fields=affiliation&user.fields=entities&user.fields=id&user.fields=name&user.fields=profile_banner_url&user.fields=url&user.fields=username&user.fields=is_identity_verified&user.fields=profile_image_url', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));