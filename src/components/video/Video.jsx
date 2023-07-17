import "./video.scss";

export default function Video() {


  return (
    <div className="fullscreen-video-wrap" dangerouslySetInnerHTML={{ __html: `
      <video autoPlay loop muted id="video">
        <source src="./assets/video-oficial.mp4" type="video/mp4" />
      </video>
    ` }}></div>
  );
}
