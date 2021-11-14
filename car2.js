let car = new Car( "Honda",
                    "CR-V",
                    "New", );
let carInfo = document.querySelector(".car_Info");
carInfo.innerHTML= `&#128578;${car.carStatus} ${car.make} ${car.model}&#128663;`;
let carsBox = new Array();
const colors= ["Velocity Blue"
,"Rapid Red Metallic"
,"Iconic Silver"
,"Antimatter Blue"
,"Star White Metallic"
,"Desert Gold"
,"Carbonized Grey" 
,"Bronze Fire"
,"Agate Black" ];
const levels=["LX", "Special Edition", "EX", "EX-L", "Touring "]
const years =["2020", "2021", "2022"]
for (index=1; index<=10; index++){
    car = new Car( "Honda",
                   "CR-V",
                   "New", 
    colors[Math.floor(Math.random() * colors.length)],
    levels[Math.floor(Math.random() * levels.length)],
    years[Math.floor(Math.random() * years.length)]);
carsBox.push(car)
}
const car_list= document.createElement("ul");
carsBox.forEach(car=>{ 
let str = `Color: ${car.color}. Level: ${car.trimLevels}. Year: ${car.yearBuilt}`
let carListItem = document.createElement("li");
carListItem.textContent = str ;
car_list.append(carListItem);
}
);
let carsArea = document.querySelector(".carsBox");
carsArea.append(car_list);
console.log(carsBox)