const express = require('express');
const Workout = require('../models/workoutModal');
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth)


/**
 * Routes: /api/workouts
 * Method: GET
 * Description: Get all workouts
 * Parameters: None
 */
router.get('/',getWorkouts);


/**
 * Routes: /api/workouts/:id
 * Method: GET
 * Description: Get a single workout by its ID
 * Parameters: id
 */
router.get('/:id', getWorkout);


/**
 * Routes: /api/workouts
 * Method: POST
 * Description: Create/add a new workout
 * Parameters: None
 */
router.post('/', createWorkout );


/**
 * Routes: /api/workouts/:id
 * Method: DELETE
 * Description: Delete a workout by its ID
 * Parameters: id
 */
router.delete('/:id',deleteWorkout);

/**
 * Routes: /api/workouts/:id
 * Method: PATCH
 * Description: Update a workout by its ID
 * Parameters: id
 */
router.patch('/:id', updateWorkout);

module.exports = router