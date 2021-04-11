const {User} = require("../models");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const user = await User.findAll();

      return res.status(200).json({
        success: true,
        result: user,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User found",
        result: { ...user.dataValues, password: null },
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  updateUserbyToken: async (req, res) => {
    try {
      await User.update(req.body, {
        where: {
          id: req.user.id,
        },
      });
      return res.status(200).json({
        success: true,
        message: "Success update profile",
        result: {},
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  updateUserbyParams: async (req, res) => {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({
        success: true,
        message: "Success update user",
        result: {},
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try{
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      return res.status(200).json({
        success: true,
        message: "Success delete user",
        result: {},
      });
    }catch(error){
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};