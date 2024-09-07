import { Layout } from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages/HomePage/HomePage";
import { RegistrationPage } from "pages/RegistrationPage/RegistrationPage";
import { LoginPage } from "pages/LoginPage/LoginPage";
import { ContactsPage } from "pages/ContactsPage/ContactsPage";
import { AppBar } from "./Auth/AppBar/AppBar";

export const App = () => {

  return (
    <>
      <AppBar />
      <Layout>
        <hr />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/registration" element={<RegistrationPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/contacts" element={<ContactsPage/>}/>
        </Routes>
      </Layout>
    </>
  );
};
