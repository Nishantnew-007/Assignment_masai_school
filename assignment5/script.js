// Create an array of user objects
const users = [
    {
        id: 1,
        name: 'Alice',
        age: 30,
        hobbies: ['Reading', 'Hiking']
    },
    {
        id: 2,
        name: 'Bob',
        age: 25,
        hobbies: ['Cooking', 'Gaming']
    },
    {
        id: 3,
        name: 'Charlie',
        age: 35,
        hobbies: ['Traveling', 'Photography']
    }
];

// Use destructuring to extract properties from user objects and display them in the console
users.forEach(({ name, age, hobbies }) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Hobbies: ${hobbies.join(', ')}`);
    console.log('-----------------');
});

// Use the spread operator to combine hobbies from all users into a new array
const allHobbies = [
    ...users[0].hobbies,
    ...users[1].hobbies,
    ...users[2].hobbies
];

// Display the combined hobbies in the console
console.log('All Hobbies:', allHobbies);
