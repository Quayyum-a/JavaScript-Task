const { getSecondEmployee, extractCompanyNameAndLocation, getEmployeeNameAndDepartment } = require('./company');

describe('Company Functions', () => {
  const company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [
      { name: "Alice", department: "Engineering" },
      { name: "Bob", department: "Marketing" },
      { name: "Charlie", department: "HR" },
      { name: "Dave", department: "Engineering" }
    ]
  };

  test('getSecondEmployee returns Bob', () => {
    expect(getSecondEmployee(company)).toBe('Bob');
  });

  test('extractCompanyNameAndLocation returns correct data', () => {
    expect(extractCompanyNameAndLocation(company)).toEqual({
      name: "TechCorp",
      location: "San Francisco"
    });
  });

  test('getEmployeeNameAndDepartment returns formatted string', () => {
    const expected = "Alice works in Engineering, Bob works in Marketing, " +
        "Charlie works in HR, Dave works in Engineering";
    expect(getEmployeeNameAndDepartment(company)).toBe(expected);
  });
});