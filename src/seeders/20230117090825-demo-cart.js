'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'cart',
      [
        {
          id: 11,
         item:[{ name:"Campari",
         price:81.59},
        {name:"Mini Red Organic",
        price:180.00,}],
        totalPrice:261.59,
         created_at: new Date(),
         updated_at: new Date(),
        },
        {
          id: 12,
          item:[{
            name:"Rioja Crianza",
          price:1870.53,
          },
          {
            name:"Rioja backle",
          price:2070.01,
          },
        ],
        totalPrice: 3940.54,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 13,
          item:[{
            name:"Sachet",
            price:163.92,
          }],
          totalPrice: 163.92,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 14,
          item:[
            {  name:"Tart Shells",
            price:31.90},
            {  name:"Berry Shells",
            price:11.90}
          ],
          totalPrice: 43.8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 15,
          item:[
            {  name:"Glovo Sacks",
            price:39.00},
            {  name:"Berry Shacklel",
            price:20.80}
          ],
          totalPrice: 59.80,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 16,
          item:[
            {  name:"Mackrel",
            price:19.00},
          ],
          totalPrice: 19.00,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 17,
          item:[
            {  name:"Config tarts",
            price:200.00},
            {  name:"System cred",
            price:100.00},
            {  name:"Cyber hat",
            price:170.00},
          ],
          totalPrice: 470,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cartItem', null, bulkDeleteOptions);
    // await queryInterface.bulkDelete('cart', null, bulkDeleteOptions);
    // await queryInterface.bulkDelete('coupon', null, bulkDeleteOptions);
  }
};
