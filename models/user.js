// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "Anonymous",
      allowNull: true
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    }
  },{
    hooks: {
      beforeCreate: function(user, options){
          user.password = bcrypt.hashSync(
            user.password,
            bcrypt.genSaltSync(10),
            null
          );
      }
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  //User.hook("beforeCreate", function(user) {
  //  user.password = bcrypt.hashSync(
  //    user.password,
  //    bcrypt.genSaltSync(10),
  //    null
  //  );
  //});

  User.associate = function(models) {
    models.User.hasMany(models.Dog, {
      onDelete: "CASCADE"
    }),
    models.User.hasMany(models.EventDayTimePark, {
      onDelete: "CASCADE"
    });
  };
  
  return User;
};
