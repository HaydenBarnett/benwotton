import ReactPlayer from "react-player";
import styles from "./Video.module.css";

type VideoProps = {
  url: string;
};

export const Video = ({ url }: VideoProps) => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <ReactPlayer
            className="video"
            url={url}
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: {
                  controls: 1,
                  playsinline: 0,
                  rel: 0,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
