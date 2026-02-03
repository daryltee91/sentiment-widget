import "./style.css";

export const SubmitButton = ({
  onClickCallback,
  isDisabled,
}: {
  onClickCallback: () => void;
  isDisabled: boolean;
}) => {
  return (
    <button className="submit-btn" onClick={onClickCallback} disabled={isDisabled}>
      Submit
    </button>
  );
};
