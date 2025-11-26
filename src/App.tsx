// import { Route, Routes } from "react-router";
import { Analytics } from "./component/Analytics";
import { ContentPage } from "./component/ContentPage";
import { Invoice } from "./component/Invoice";
import { Schedule } from "./component/Schedule";
import { Calendar } from "./component/Calendar";
import { Messages } from "./component/Messages";
import { Notification } from "./component/Notifications";
import { Settings } from "./component/Settings";

import { Route, Routes } from "react-router";
import  AppLayout  from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  element = {<AppLayout/>}>
          <Route index element={<ContentPage />} /> {/* для / */}
          <Route path="dashboard" element={<ContentPage />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notification" element={<Notification />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
