import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";

export default function Root() {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <div>
      <Navbar></Navbar>
      {navigation.state === "loading" ? (
        <LoadingSpinner />
      ) : (
        <main className="min-h-[calc(100vh-277px)] w-11/12 mx-auto">
          <Outlet></Outlet>
        </main>
      )}

      <Footer></Footer>
    </div>
  );
}
