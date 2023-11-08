export default function VideoBackground() {
  return (
    <div className="video-background">
      <video autoPlay muted loop className="video-content">
        <source
          src={
            process.env.PUBLIC_URL +
            "videos/vecteezy_digital-earth-hud-rotating-globe-rotating_4358884.mp4"
          }
          type="video/mp4"
        />
      </video>
    </div>
  );
}
