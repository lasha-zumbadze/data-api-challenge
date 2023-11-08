export default function Image({ img, onPopUp }) {
  return (
    <div onClick={onPopUp} className="img-container">
      <img src={img} alt="user" />
    </div>
  );
}
