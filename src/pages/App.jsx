import "./App.css";
import FormContainer from "../components/FormContainer";
import Navbar from "../components/Layout/Navbar";
import { BreadcrumbsCustomStyles } from "../components/Atoms/BreadCrumbs";
import { SideBar } from "../components/Layout/SideNav";

function App() {
  return (
    <div className="flex w-full h-full">
      <SideBar />
      <div className="flex flex-col w-full bg-bgBlue ml-24">
        <Navbar />
        <BreadcrumbsCustomStyles />
        <FormContainer />
      </div>
    </div>
  );
}

export default App;
