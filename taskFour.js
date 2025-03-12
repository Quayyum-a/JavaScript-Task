const person = {
	firstName: 'Quayyum',
	lastName: 'Ariyo'
};
function fullName(person){
	const full = person.firstName + person.lastName;
	return full;
}

console.log(fullName(person));