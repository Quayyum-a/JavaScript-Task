function getStudentName(student) {
    return student.name;
}

function getCourse(student) {
    return student.courses[1];
}

function getZipCode(student) {
    return student.address.zip;
}

function getDetails(student) {
    return `${student.name} is ${student.age} years old and has a GPA of ${student.gpa}.`;
}

module.exports = { getStudentName, getCourse, getZipCode, getDetails };
