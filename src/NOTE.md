 await queryInterface.bulkInsert(
      'cart',
      [
        {
          id: 1,
          cart_item_id:2,
          totalPrice:81.59,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          cart_item_id:[2,3],
          totalPrice:81.59,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          cart_item_id:[3, 4],
          totalPrice:81.59,
          created_at: new Date(),
          updated_at: new Date(),
        },
        
      ],
      {}
    );

    await queryInterface.bulkInsert(
      'coupon',
      [
        {
          id: 1,
          coupon_code:"Campari123",
          issueDate:new Date(),
          value: 10,
          unit: "%",
          title: "fitCoupon",
          cart_id: 1,
          redeemed_date: new Date(),
          expiration_date: new Date(),
        },
        {
          id: 2,
          coupon_code:"fitcoxwe34",
          issueDate:new Date(),
          value: 10,
          unit: "$",
          title: "fitCoupon",
          cart_id: 2,
          redeemed_date: new Date(),
          expiration_date: new Date(),
        },
      ],
      {}
    );


    FOR COUPON 
    
    await queryInterface.createTable('coupon', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coupon_code: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        defaultValue: Sequelize.STRING
      },
      issueDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.DATE
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cart_id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {
          model: 'cart',
          key: 'id'
         }
      },
      redeemed_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      expiration_date: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });


    ////
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
            {  "name":"Config tarts",
            "price":200.00},
            {  "name":"System cred",
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
