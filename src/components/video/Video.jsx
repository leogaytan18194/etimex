import "./video.scss";

export default function Video() {


  return (
    <video autoPlay loop muted id="video">
      <source src="./assets/videoback.webm" type="video/webm" />
    </video>
  );
}
