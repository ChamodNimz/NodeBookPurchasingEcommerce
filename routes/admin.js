const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const config = require("../config");
const adminController = require("../controllers/adminController");
const checkRoleMiddleware = require("../middlewares/roleChecker");

// create new customer
router.post("/createCustomer", adminController.createCustomer);

// get all customers
router.get(
  "/getAllCustomers",
  config.authGuard,
  checkRoleMiddleware.checkRole([config.roles.ADMIN]), // admin role set
  adminController.getAllCustomers
);

//#region -- books

// insert new book
router.post(
  "/insertBook",
  config.authGuard,
  checkRoleMiddleware.checkRole([config.roles.ADMIN]),
  adminController.insertBook
);

// get all book details
router.get(
  "/getAllBookDetails",
  config.authGuard,
  checkRoleMiddleware.checkRole([config.roles.ADMIN]),
  adminController.getAllBookDetails
);

// get book states
router.get(
  "/getBookStats",
  config.authGuard,
  checkRoleMiddleware.checkRole([config.roles.ADMIN]),
  adminController.getBookStats
);

// update book
router.put(
  "/updateBook",
  config.authGuard,
  checkRoleMiddleware.checkRole([config.roles.ADMIN]),
  adminController.updateBook
);

// update book
router.delete(
    "/removeBook",
    config.authGuard,
    checkRoleMiddleware.checkRole([config.roles.ADMIN]),
    adminController.removeBook
  );

//#endregion

module.exports = router;
