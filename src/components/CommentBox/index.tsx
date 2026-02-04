import "./style.css";

export const CommentBox = ({
  comment,
  error,
  setComment,
}: {
  comment: string;
  error?: string;
  setComment: (newComment: string) => void;
}) => {
  return (
    <div id="comment-box-container">
      <h3>Comments </h3>
      <span className="error-text">{error}</span>

      <div id="comment-box" data-testid="comment-box">
        <textarea
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comments"
          data-testid="comment-box-textarea"
        />
      </div>
    </div>
  );
};
