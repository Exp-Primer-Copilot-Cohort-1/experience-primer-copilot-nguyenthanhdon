// Create web server

// Import express
const express = require('express');
// Create router
const router = express.Router();
// Import comment controller
const commentController = require('../controllers/commentController');

// Get all comments
router.get('/', commentController.index);
// Get comment by id
router.get('/:id', commentController.show);
// Create new comment
router.post('/', commentController.store);
// Update comment
router.put('/:id', commentController.update);
// Delete comment
router.delete('/:id', commentController.destroy);

// Export router
module.exports = router;


