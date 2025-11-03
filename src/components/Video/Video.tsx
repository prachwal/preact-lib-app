import { useRef, useState } from 'preact/hooks';
import type { VideoHTMLAttributes } from 'preact/compat';

export type VideoAspectRatio = '16-9' | '4-3' | '1-1' | '21-9';

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  /** Video source URL */
  src: string;
  /** Video poster/thumbnail image */
  poster?: string;
  /** Aspect ratio of the video */
  aspectRatio?: VideoAspectRatio;
  /** Show custom controls */
  showCustomControls?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Video component - Media category
 * Video player with custom controls, aspect ratio, and responsive design
 */
export const Video = ({
  src,
  poster,
  aspectRatio,
  showCustomControls = false,
  className = '',
  autoPlay = false,
  loop = false,
  muted = false,
  controls: nativeControls = true,
  ...props
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const baseClass = 'video';
  const aspectClass = aspectRatio ? `video-aspect-${aspectRatio}` : '';

  const wrapperClasses = [
    baseClass,
    'video-wrapper',
    aspectClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <div className={wrapperClasses}>
      <video
        ref={videoRef}
        className="video-player"
        src={src}
        poster={poster}
        controls={showCustomControls ? false : nativeControls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        {...props}
      />
      
      {showCustomControls && (
        <div className="video-controls">
          <button
            className="video-control-btn video-play-pause"
            onClick={handlePlayPause}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            type="button"
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          
          <button
            className="video-control-btn video-mute"
            onClick={handleMuteToggle}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            type="button"
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
          
          <button
            className="video-control-btn video-fullscreen"
            onClick={handleFullscreen}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            type="button"
          >
            {isFullscreen ? '⛶' : '⛶'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;
