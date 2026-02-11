import { Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import AccountBasics from "./pages/AccountBasics";
import AccountSetUp from "./pages/AccountSetUp";
import Details from "./pages/Details";
import Review from "./pages/Review";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const location = useLocation();

  const pageConfig = {
    "/": { id: 1, header: "Account basics", backButton: false },
    "/accountsetup": { id: 2, header: "Account setup", backButton: true },
    "/details": { id: 3, header: "Details", backButton: true },
    "/review": { id: 4, header: "Review", backButton: true },
  };

  const currentPage = pageConfig[location.pathname] || pageConfig["/"];


  return (
    <>
      <AuthProvider>
        <Header header={currentPage.header} backOnHeader={currentPage.backButton} pageNumber={currentPage.id} />
        <Routes>
          <Route path="/" element={<AccountBasics />} />
          <Route path="/accountsetup" element={<AccountSetUp />} />
          <Route path="/details" element={<Details />} />
          <Route path="/review" element={<Review />} />
        </Routes>
        <Footer pageNumber={currentPage.id} isHomePage={currentPage.backButton} />
      </AuthProvider>
    </>
  )
}

export default App
