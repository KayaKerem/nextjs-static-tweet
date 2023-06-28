import { getTweet } from 'react-tweet/api'
import { A, P, Code, Ul, Li, H2, Hr } from '../components/landing/core'
import Page from '../components/landing/page'
import Tweet from '../components/landing/tweet'
import RandomTweet from '../components/landing/random-tweet'
import { Score, Gauge } from '../components/landing/lighthouse-score'
import React, { useState } from 'react'
import { useTheme } from '../components/landing/page'

export async function getStaticProps() {
  const tweet = await getTweet('1249937011068129280')
  return { props: { tweet } }
}

export default function Index({ tweet }) {
  return (
    <Page
      title="Beyzanur Cesurun Klonları"
      description="Beyzanın ilginç vaziyetlerde bulunduğu videolarıyla karşı karşıya gelirseniz hemen en yetkili kişiye danışın."
    >
      <P>
        Beyzanın ilginç vaziyetlerde bulunduğu videolarıyla karşı karşıya
        gelirseniz hemen en yetkili kişiye danışın.
      </P>
      {/* <Tweet data={tweet} /> */}
      <div>
        <video controls>
          <source
            src={
              'https://kk-bucket-public.s3.eu-central-1.amazonaws.com/ssstwitter.com_1687991125309.mp4'
            }
            type="video/mp4"
          />
          Tarayıcınız video etiketini desteklemiyor.
        </video>
      </div>

      <P>
        Bu videodaki şahsın F.O. olup olmadığı bilinmiyor. İncelemeler devam
        ediyor.
      </P>
    </Page>
  )
}
