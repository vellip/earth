import styles from '../styles/video.module.css'
import { IVideo } from '../typings/video'
import React from 'react'

interface IVideoProps {
  video: IVideo
}

const Video: React.FC<IVideoProps> = ({ video }) => (
  <div className={styles.video_container}>
    <iframe
      className={styles.video}
      src={`https://player.vimeo.com/video/${video.vimeo_id}?color=ffffff`}
      width="640"
      height="360"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  </div>
)

export default Video
