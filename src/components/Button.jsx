import "./Button.module.css";

const Button = ({ children, onClick, color }) => {
  if (color) {
    return (
      <button
        style={{
          backgroundColor: color,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
