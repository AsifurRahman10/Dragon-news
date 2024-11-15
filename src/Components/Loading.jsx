import { ClimbingBoxLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ClimbingBoxLoader size={20} color="#090909" />
    </div>
  );
};
