# cloneBnB

### Introduction

This is a clone of the Airbnb reviews component. This is built to demonstrate service-oriented architecture.

Author: Shi-Hao Hong

### Installation

1. Run `npm install`
2. To start application with mock data, run `npm run db:genseed`
3. To transpile and bundle, run `npm run build`
4. To start the server, run `npm start`

### Mock Data

In order to seed the database with mock data, run `npm run db:genseed` to run a script that generates .csv files that will be loaded onto your MySQL database. You may edit the number of records for each table in `./db/generateCsv.js`.
