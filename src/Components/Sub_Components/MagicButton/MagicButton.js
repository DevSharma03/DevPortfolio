import "./MagicButton.css";

const MagicButton = ({ title, icon, onClick }) => {
  return (
    <button className="magic-button" onClick={onClick}>
      {title}
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

export default MagicButton;
