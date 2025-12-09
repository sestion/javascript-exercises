const findTheOldest = function(people) {
    people.sort(compareAge);
    return people[0];
};

function compareAge(a, b) {
    if (!("yearOfDeath" in a)) {
        a.yearOfDeath = new Date().getFullYear();
    }

    if (!("yearOfDeath" in b)) {
        b.yearOfDeath = new Date().getFullYear();
    }

    return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
}

// Do not edit below this line
module.exports = findTheOldest;
