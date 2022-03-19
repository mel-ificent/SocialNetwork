const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:UserId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/thoughts
router.route('/:UserId/thoughts').post(addThought);


module.exports = router;