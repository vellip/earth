import styles from '../styles/video.module.css'
import { IVideo } from '../typings/video'
import React from 'react'
import { useRouter } from 'next/router'

interface IVideoProps {
  video: IVideo
}

const Video: React.FC<IVideoProps> = ({ video }) => {
  const router = useRouter()

  return (
    <div className={styles.video_container}>
      <iframe
        className={styles.video}
        onKeyDown={(e) => {
          if (e.code === 'KeyR' && !e.ctrlKey) router.push('/')
        }}
        src={`https://player.vimeo.com/video/${video.vimeo_id}?color=ffffff`}
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default Video
