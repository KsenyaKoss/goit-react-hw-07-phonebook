import { Route, Routes } from "react-router-dom";
import { Navigation } from "./navigation/navigation";
import { HomePage } from "../pages/HomePage";
import { AddContact } from "../pages/AddContact";


export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path='add' element={<AddContact/>}/>
      </Route>
    </Routes>
  );
};
