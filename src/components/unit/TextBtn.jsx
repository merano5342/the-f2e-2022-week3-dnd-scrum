const TextBtn = (props) => {
  const { str, onClick, active } = props;
  return (
    <div className="h-14">
      <button
        className="btn absolute bottom-14 right-10"
        data-active={active}
        onClick={onClick}
      >
        {str}
      </button>
    </div>
  );
};

export default TextBtn;
