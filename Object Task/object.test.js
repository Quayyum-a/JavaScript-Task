const { getStudentName, getCourse, getZipCode, getDetails } = require('./object');

const student = {
    name: "John Doe",
    age: 23,
    gpa: 3.8,
    courses: ["Math", "Physics", "Computer science"],
    address: { 
        city : "New York",
        zip: 10001 
    }
};

test('get student name', () => {
    expect(getStudentName(student)).toBe('John Doe');
});

test('get second course', () => {
    expect(getCourse(student)).toBe('Physics');
});

test('get zip code', () => {
    expect(getZipCode(student)).toBe(10001);
});

test('get student details', () => {
    expect(getDetails(student)).toBe('John Doe is 23 years old and has a GPA of 3.8.');
});
