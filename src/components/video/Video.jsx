import "./video.scss";

export default function Video() {


  return (
    <video autoPlay loop muted id="video">
      <source src="./assets/web-oficial_2.webm" type="video/webm" />
    </video>
  );
}
