import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import { getusers } from "./JS/userSlice/UserSlice";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);

  useEffect(() => {
    dispatch(getusers());
  }, [ping]);
  return (
    <div className='App'>
      <Header />
      <AddUser ping={ping} setping={setping} />
      <UsersList ping={ping} setping={setping} />
    </div>
  );
}

export default App;
