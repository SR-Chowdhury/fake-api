const faker = require('faker');

const data = {
    user: [],
    address: []
}

for (let i = 0; i<50; i++) {
    data.user.push({
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName()
    });
}
for (let i = 0; i<50; i++) {
    data.address.push({
        zipCode: faker.address.zipCode(),
        city: faker.address.city()
    });
}

module.exports = () => data;