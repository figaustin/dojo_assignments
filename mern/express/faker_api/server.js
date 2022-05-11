const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.get("/api/users/new", (req, res) => {
  res.json(newFakeUser);
});

app.get("/api/companies/new", (req, res) => {
  res.json(newFakeCompany);
});

app.get("/api/user/company", (req, res) => {
  res.json({newFakeUser, newFakeCompany});
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

const createUser = () => {
    const newFake = {
      password: faker.internet.password(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.phoneNumber(),
      lastName: faker.name.lastName(),
      firstName: faker.name.firstName(),
      _id: faker.mersenne.rand(1, 100)
    };
    return newFake;
};

const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newFake = {
      _id: faker.mersenne.rand(1, 100),
      name: faker.company.companyName(),
      address:  {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
      }

    };
    return newFake;
}

const newFakeCompany = createCompany();
console.log(newFakeCompany);