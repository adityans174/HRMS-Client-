import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";
import Attendance from "./Attendance";
export default function Employees() {
  
  let [empData, setEmpData] = useState({});
  let [error, setError] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;
    setEmpData({ ...empData, [name] : value})
    // console.log(empData);
  }

  let handleSubmit = () => {
    console.log(empData)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Dialog>
              <div className="text-end">
                <DialogTrigger className="h-10 w-50 border border-white text-white rounded-2xl bg-blue-600">
                  Add Employee
                </DialogTrigger>
              </div>
              <DialogContent className="h-150 scroll-smooth overflow-scroll">
                <DialogHeader>
                  <DialogTitle>Employee Form</DialogTitle>
                  <DialogDescription>
                    <div>
                      <label className="font-bold text-black">Emp Id</label>
                    </div>
                    <div className="mb-5">
                      <input
                        className="w-full h-8 border border-black rounded"
                        type="text"
                        placeholder="Enter the employee Id"
                        name="empId"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-bold text-black">Emp Name</label>
                    </div>
                    <div className="mb-5">
                      <input
                        className="w-full h-8 border border-black rounded"
                        type="text"
                        placeholder="Enter the employee name"
                        name="empName"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-bold text-black">Emp Email</label>
                    </div>
                    <div className="mb-5">
                      <input
                        className="w-full h-8 border border-black rounded"
                        type="text"
                        placeholder="Enter the employee email"
                        name="empEmail"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-bold text-black">Emp Phone</label>
                    </div>
                    <div className="mb-5">
                      <input
                        className="w-full h-8 border border-black rounded"
                        type="text"
                        placeholder="Enter the employee phone no"
                        name="empPhone"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-bold text-black">
                        Emp Address
                      </label>
                    </div>
                    <div className="mb-5">
                      <input
                        className="w-full h-8 border border-black rounded"
                        type="text"
                        placeholder="Enter the employee address"
                        name="empAddress"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-bold text-black">
                        Emp Date of Birth
                      </label>
                    </div>
                    <div className="mb-5">
                      <input
                        className="w-full h-8 border border-black rounded"
                        type="date"
                        placeholder="Enter the employee DOB"
                        name="empDateOfBirth"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-bold text-black">
                        Emp Joining Date
                      </label>
                    </div>
                    <div className="mb-5">
                      <input
                        className="w-full h-8 border border-black rounded"
                        type="date"
                        placeholder="Enter the employee joining date"
                        name="empJoiningDate"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-bold text-black">
                        Emp Departement
                      </label>
                    </div>
                    <div className="mb-5">
                      <input
                        className="w-full h-8 border border-black rounded"
                        type="text"
                        placeholder="Enter the employee department"
                        name="empDepartment"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-bold text-black">
                        Emp Designation
                      </label>
                    </div>
                    <div className="mb-5">
                      <input
                        className="w-full h-8 border border-black rounded"
                        type="text"
                        placeholder="Enter the employee designation"
                        name="empDesignation"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="text-center">
                      <button className="h-10 w-30 border-2 bg-red-500 text-white rounded-2xl">
                        Close
                      </button>
                      <button
                        className="h-10 w-30 border-2 bg-blue-500 text-white rounded-2xl"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardAction>
        </CardHeader>
        <CardContent>
          <table class="border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th class="border border-gray-300 ...">Emp Id</th>
                <th class="border border-gray-300 ...">Emp Name</th>
                <th class="border border-gray-300 ...">Emp Email</th>
                <th class="border border-gray-300 ...">Emp Phone Number</th>
                <th class="border border-gray-300 ...">Emp Address</th>
                <th class="border border-gray-300 ...">Emp DOB</th>
                <th class="border border-gray-300 ...">Emp Joining Date </th>
                <th class="border border-gray-300 ...">Emp Department</th>
                <th class="border border-gray-300 ...">Emp Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 ...">{empData.empId}</td>
                <td class="border border-gray-300 ...">{empData.empName}</td>
                <td class="border border-gray-300 ...">{empData.empEmail}</td>
                <td class="border border-gray-300 ...">{empData.empPhone}</td>
                <td class="border border-gray-300 ...">{empData.empAddress}</td>
                <td class="border border-gray-300 ...">{empData.empDateOfBirth}</td>
                <td class="border border-gray-300 ...">{empData.empJoiningDate}</td>
                <td class="border border-gray-300 ...">{empData.empDepartment}</td>
                <td class="border border-gray-300 ...">{empData.empDesignation}</td>
                
              </tr>
            </tbody>
          </table>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}