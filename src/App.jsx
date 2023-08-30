import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar";
import store from "./redux/store.js";
import TaskView from "./Components/TaskView";
import { useState } from "react";
import { TabContext } from "@mui/lab";
import { useSelector } from "react-redux";
function App() {
  // const [tabState,setTab]=useState(0);
  const tabState = useSelector((state) => state.tab);
  return (
    <>
      <Provider store={store}>
        <TabContext value={tabState}>
          <TaskView />
          {/* <Navbar /> */}
        </TabContext>
      </Provider>
    </>
  );
}

export default App;
