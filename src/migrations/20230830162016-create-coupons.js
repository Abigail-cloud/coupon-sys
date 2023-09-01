'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coupons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      couponCode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      minTotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      minItems: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discountType: {
        type: Sequelize.ENUM('fixed', 'percent', 'mixed'),
        allowNull: false,
      },
      discountValue: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Coupons');
  }
};