'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Carts', 
    [
      {
        id: 1,
        name: 'Campari',
        price: '81.59',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Syrup - Monin - Passion Fruit',
        price: '38.53',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Pork Salted Bellies',
        price: '20.48',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Carrots - Mini Red Organic',
        price: '180.00',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Wild Boar - Tenderloin',
        price: '198.29',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: 'Chicken - Leg, Fresh',
        price: '107.64',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        name: 'Wine - Jackson Triggs Okonagan',
        price: '164.43',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        name: 'Bagelers',
        price: '41.16',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        name: 'Beans - Fava, Canned',
        price: '13.57',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        name: 'Higashimaru Usukuchi Soy',
        price: '163.92',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        name: 'Soup - Knorr, Veg / Beef',
        price: '148.70',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        name: 'Sachet',
        price: '119.87',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        name: 'Potato - Sweet',
        price: '45.55',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        name: 'Broom Handle',
        price: '49.61',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        name: 'Cheese - Asiago',
        price: '123.03',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        name: 'Bread - Italian Sesame Poly',
        price: '124.20',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        name: 'Remy Red',
        price: '32.13',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        name: 'C - Plus, Orange',
        price: '114.76',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        name: 'Wine - Montecillo Rioja Crianza',
        price: '91.18',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        name: 'Bread - English Muffin',
        price: '47.35',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Carts', null, {});
  },
};
