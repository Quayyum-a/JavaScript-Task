function getSecondEmployee(company) {
  return company.employees[1].name;
}

function extractCompanyNameAndLocation(company) {
  const { name, location } = company;
  return { name, location };
}

function getEmployeeNameAndDepartment(company) {
  return company.employees.map(employee => `${employee.name} works in ${employee.department}`).join(', ');
}

module.exports = { getSecondEmployee, extractCompanyNameAndLocation, getEmployeeNameAndDepartment};