let express = require("express"),
  router = express.Router();

let authenticationController = require("../controllers/authController.js");
let taskController = require("../controllers/taskController.js");

/**
 * (POST Method)
 */
// SignUp
router.post("/signup", authenticationController.signup);
router.post("/getalluser", authenticationController.getAllUser);
router.post("/updateuser", authenticationController.updateUser);
router.post("/deleteuser", authenticationController.deleteUser);
router.post("/resetPassword", authenticationController.resetPassword);
router.post("/forgotPassword", authenticationController.forgotPassword);
router.post("/setPassword", authenticationController.resetPasswordUsingToken);


//SignIn
router.post("/signin", authenticationController.signin);
router.post("/resendVerify", authenticationController.resendVerification);


// add task
router.post("/addTask", taskController.addTask);
router.post("/getAllTask", taskController.getAllTask);
router.post("/addMeetingDetails", taskController.registerMeeting);

router.post("/updateTask", taskController.updateTask);
router.post("/deleteTask", taskController.deleteTask);
router.post("/unRegister", taskController.unRegister);

//Email Verify
router.get("/verify/:id/:token", authenticationController.verify);

//Scavenger data
router.post("/scavenger", authenticationController.scavenger);

module.exports = router;
