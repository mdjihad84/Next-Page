import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import LoadingSpinner from "./Component/LoadingSpinner/LoadingSpinner";

const App = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
