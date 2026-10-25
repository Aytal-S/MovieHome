
const ErrorMessage = ({ message }) => {
  return (
    <div className="alert alert-error my-4">
      <span>
        {typeof message === "string"
          ? message
          : message?.message || "Something went wrong"}
      </span>
    </div>
  );
};

export default ErrorMessage;
