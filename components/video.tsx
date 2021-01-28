import styles from '../styles/video.module.css'

const Video = () => (
  <div className={styles.video_container}>
    <iframe
      className={styles.video}
      src="https://player.vimeo.com/video/32001208?color=ffffff"
      width="640"
      height="360"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
  </div>
)

export default Video
