const car =  {
  make : 'Toyota',
  model : 'Camry',
  year : 2021
};

function logProperty(obj){
	for(let count in obj){
	 console.log(`${count} : ${obj[count]}`);
	}
}

logProperty(car)
