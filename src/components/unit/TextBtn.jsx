const TextBtn = (props) => {
  const { str, onClick } = props;
  return (
    <div className="h-14">
      <button className="btn absolute bottom-14 right-10" onClick={onClick}>
        {str}
      </button>
    </div>
  );
};

export default TextBtn;
