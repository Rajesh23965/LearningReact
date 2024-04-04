const WelcomeMsg = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-msg">
      <h1>There are no posts are posted</h1>
      <button
        type="button"
        onClick={onGetPostsClick}
        className="btn btn-primary"
      >
        Get post from server
      </button>
    </center>
  );
};
export default WelcomeMsg;
