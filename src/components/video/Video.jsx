import "./video.scss";

export default function Video() {


  return (

      <video autoPlay loop muted playsinline id="video">
        <source src="./assets/video-oficial.mp4" type="video/mp4" />
      </video>

  );
}
