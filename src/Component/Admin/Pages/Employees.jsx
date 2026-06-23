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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useState } from "react";
import Attendance from "./Attendance";
export default function Employees() {
  
  let [empData, setEmpData] = useState({});
  let [error, setError] = useState({});
  let [openModal, setOpenModal] = useState(false);
  let [openEditModal, setOpenEditModal] = useState(false);
  let [empFormData, setEmpFormData] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;
    setEmpData({ ...empData, [name] : value})
    // console.log(empData);
  }

  let handleSubmit = () => {
    setEmpFormData(empData)
    setOpenModal(false);
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Dialog
              open={openModal}
              onOpenChange={() => {
                setOpenModal(true);
              }}
            >
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
                      <button
                        onClick={() => {
                          setOpenModal(false);
                        }}
                        className="h-10 w-30 border-2 bg-red-500 text-white rounded-2xl"
                      >
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
                <th class="border border-gray-300 ...">Emp Phone</th>
                <th class="border border-gray-300 ...">Emp Address</th>
                <th class="border border-gray-300 ...">Emp DOB</th>
                <th class="border border-gray-300 ...">Date of Joining</th>
                <th class="border border-gray-300 ...">Department</th>
                <th class="border border-gray-300 ...">Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 ...">{empFormData.empId}</td>
                <td class="border border-gray-300 ...">{empFormData.empName}</td>
                <td class="border border-gray-300 ...">{empFormData.empEmail}</td>
                <td class="border border-gray-300 ...">{empFormData.empPhone}</td>
                <td class="border border-gray-300 ...">{empFormData.empAddress}</td>
                <td class="border border-gray-300 ...">
                  {empFormData.empDateOfBirth}
                </td>
                <td class="border border-gray-300 ...">
                  {empFormData.empJoiningDate}
                </td>
                <td class="border border-gray-300 ...">
                  {" "}
                  {empFormData.empDepartment}
                </td>
                <td class="border border-gray-300 ...">
                  {" "}
                  {empFormData.empDesignation}
                </td>
                <td class="border border-gray-300 ...">
                  <button
                    onClick={() => setOpenEditModal(true)}
                    className="bg-blue-500 w-15 h8 rounded-2xl"
                  >
                    Edit
                  </button>
                  <button className="">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
      <Dialog
        open={openEditModal}
        onOpenChange={() => {
          setOpenEditModal(true);
        }}
      >
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
                  defaultValue={empFormData.empId}
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
                  defaultValue={empFormData.empName}
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
                  defaultValue={empFormData.empAddress}
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
                  defaultValue={empFormData.empPhone}
                />
              </div>
              <div>
                <label className="font-bold text-black">Emp Address</label>
              </div>
              <div className="mb-5">
                <input
                  className="w-full h-8 border border-black rounded"
                  type="text"
                  placeholder="Enter the employee address"
                  name="empAddress"
                  onChange={handleChange}
                  defaultValue={empFormData.empAddress}
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
                  defaultValue={empFormData.empDateOfBirth}
                />
              </div>
              <div>
                <label className="font-bold text-black">Emp Joining Date</label>
              </div>
              <div className="mb-5">
                <input
                  className="w-full h-8 border border-black rounded"
                  type="date"
                  placeholder="Enter the employee joining date"
                  name="empJoiningDate"
                  onChange={handleChange}
                  defaultValue={empFormData.empJoiningDate}
                />
              </div>
              <div>
                <label className="font-bold text-black">Emp Departement</label>
              </div>
              <div className="mb-5">
                <input
                  className="w-full h-8 border border-black rounded"
                  type="text"
                  placeholder="Enter the employee department"
                  name="empDepartment"
                  onChange={handleChange}
                  defaultValue={empFormData.empDepartment}
                />
              </div>
              <div>
                <label className="font-bold text-black">Emp Designation</label>
              </div>
              <div className="mb-5">
                <input
                  className="w-full h-8 border border-black rounded"
                  type="text"
                  placeholder="Enter the employee designation"
                  name="empDesignation"
                  onChange={handleChange}
                  defaultValue={empFormData.empDesignation}
                />
              </div>
              <div className="text-center">
                <button
                  onClick={() => {
                    setOpenEditModal(false);
                  }}
                  className="h-10 w-30 border-2 bg-red-500 text-white rounded-2xl"
                >
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
    </>
  );
}