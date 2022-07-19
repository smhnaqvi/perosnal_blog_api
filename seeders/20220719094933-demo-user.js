"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert("Users", [
      {
        first_name: "Leanne",
        last_name: "Graham",
        email: "Sincere@april.biz",
        age: 20,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Ervin",
        last_name: "Howell",
        email: "Shanna@melissa.tv",
        age: 21,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Clementine",
        last_name: "Bauch",
        email: "Nathan@yesenia.net",
        age: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Patricia",
        last_name: "Lebsack",
        email: "Julianne.OConner@kory.org",
        age: 26,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Chelsey",
        last_name: "Dietrich",
        email: "Lucio_Hettinger@annie.ca",
        age: 23,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Mrs. Dennis",
        last_name: "Schulist",
        email: "Karley_Dach@jasper.info",
        age: 31,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Kurtis",
        last_name: "Weissnat",
        email: "Telly.Hoeger@billy.biz",
        age: 22,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Nicholas",
        last_name: "Runolfsdottir V",
        email: "Sherwood@rosamond.me",
        age: 28,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Glenna",
        last_name: "Reichert",
        email: "Chaim_McDermott@dana.io",
        age: 25,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Clementina",
        last_name: "DuBuque",
        email: "Rey.Padberg@karina.biz",
        age: 32,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete("Users", null, {});
  },
};
