import "./video_desktop.scss";

export default function Video() {


  return (
    <div className="videoDesktop">
      <video autoPlay loop muted playsinline id="video">
        <source src="./assets/video-oficial.mp4" type="video/mp4" />
      </video>
    </div>
  );
}