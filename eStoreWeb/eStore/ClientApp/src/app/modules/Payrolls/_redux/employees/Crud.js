import axios from "axios";
import { BASE_URL } from "../../../../../_estore/URLConstants";

export const API_URL = BASE_URL + "/api/employees";


// CREATE =>  POST: add a new employee to the server
export async function createEmployee(employee) {
  return await axios.post(API_URL,  employee,{
    headers: {         'Content-Type' : 'application/json; charset=utf-8' }
});
}

// READ
export  function getAllEmployees() {
  return  axios.get(API_URL);//.catch(function (error){console.log(error)});
}

export async function getEmployeeById(employeeId) {
  return await axios.get(`${API_URL}/${employeeId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export async function findEmployees(queryParams) {
  //verifyLogin();
  return await axios.get(`${API_URL}`);//find`, { queryParams });
}

// UPDATE => PUT: update the employee on the server
export async function updateEmployee(employee) {
  return await axios.put(`${API_URL}/${employee.employeeId}`, JSON.stringify( employee ),{
    headers: {         'Content-Type' : 'application/json; charset=utf-8' }
});
}

// UPDATE Status
export async function updateStatusForEmployees(ids, status) {
  return await axios.post(`${API_URL}/updateStatusForEmployees`, {
    ids,
    status
  });
}

// DELETE => delete the employee from the server
export async function deleteEmployee(employeeId) {
  return await axios.delete(`${API_URL}/${employeeId}`);
}

// DELETE Employees by ids
export async function deleteEmployees(ids) {
  return await axios.post(`${API_URL}/deleteEmployees`, { ids });
}
