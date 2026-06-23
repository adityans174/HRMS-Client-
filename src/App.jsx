import Login from "./Component/LoginPage/Login";
import SignUp from "./Component/SignUpPage/SignUp";
import Pannel from "./Component/Admin/Pannel";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./Component/Admin/Dashboard";
import Employees from "./Component/Admin/Pages/Employees";
import Attendance from "./Component/Admin/Pages/Attendance"
import Payroll from "./Component/Admin/Pages/Payroll"
import LeaveRequest from "./Component/Admin/Pages/LeaveRequest";
import Settings from "./Component/Admin/Pages/Settings";
import Reports from "./Component/Admin/Pages/Reports";
import Performance from "./Component/Admin/Pages/Performance";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/admin" element={<Pannel />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<Employees />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="payroll" element={<Payroll />} />
            <Route path="leave/rquest" element={<LeaveRequest/>}/>
            <Route path="reports" element={<Reports/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="performance" element={<Performance/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}




export default App;
