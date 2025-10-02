import { PacmanLoader } from "react-spinners";
export default function LoadingSpinner() {
  return (
    <div className="min-h-[calc(100vh-277px)] w-11/12 mx-auto flex justify-center items-center">
      <PacmanLoader></PacmanLoader>
    </div>
  );
}
