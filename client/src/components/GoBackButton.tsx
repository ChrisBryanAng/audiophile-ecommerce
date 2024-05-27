import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  const handlePreviousPage = () => {
    navigate(-1);
  };

  return (
    <div>
      <button
        onClick={handlePreviousPage}
        className="capitalize hover:underline text-start -mb-16 lg:-mb-14 lg:mt-10 text-black1/80 hover:text-primary-1"
      >
        Go back
      </button>
    </div>
  );
};

export default GoBackButton;
