//Without arrow function

const profile1 = {
    firstName: 'nothing first name',
    lastName: 'nothing last name',
    setName: function(name) {
        let splitName = function(n) {
            let nameArray = n.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        splitName(name);
    }
}
profile1.setName('John Doe');
console.log(profile1.firstName); // ''
console.log(profile1.lastName); // ''




//With arrow function
const profile = {
    firstName: '',
    lastName: '',
    setName: function(name) {
        let splitName = (n) => {
            let nameArray = n.split(' ');
            this.firstName = nameArray[0];
            this.lastName = nameArray[1];
        }
        splitName(name);
    }
}
profile.setName('John Doe');
console.log(profile.firstName); // 'John'
console.log(profile.lastName); // 'Doe'
//The arrow function allows us to access the object's properties.   
