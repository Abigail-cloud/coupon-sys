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