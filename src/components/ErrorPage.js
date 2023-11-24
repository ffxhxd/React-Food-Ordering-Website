import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Ooooopsssssssssss</h1>
      <h2>Error Occurred</h2>
      <h1>{err.status}</h1>
      <h1>{err.statusText}</h1>
    </div>
  );
};

export default ErrorPage;
