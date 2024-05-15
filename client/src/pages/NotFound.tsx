import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const backToHomeHandler = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-dvh w-dvw space-y-14 bg-black1 text-white font-bold tracking-widest text-5xl">
      <p className="text-center text-xl text-red-600">Whoops!</p>
      <p className="text-center">404 Page Not Found.</p>
      <p className="text-lg">
        Back to{" "}
        <span
          onClick={backToHomeHandler}
          className="text-primary-1 hover:text-primary-2 cursor-pointer hover:underline font-semibold"
        >
          HOME
        </span>
      </p>
    </div>
  );
};

export default NotFound;
