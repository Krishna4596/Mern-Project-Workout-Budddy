// import React, { useEffect, useState } from 'react'
import React, { useEffect } from 'react'

//component
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import {useAuthContext} from '../hooks/useAuthContext'



const Home = () => {

  //useState 
  // const [workouts, setWorkouts] = useState(null)

  const {workouts, dispatch} = useWorkoutsContext();
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
     const response =  await fetch('https://workout-backend-aa7z.onrender.com/api/workouts', {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
     })
     const json = await response.json()

     if(response.ok){
      //useState
      // setWorkouts(json)

      dispatch({type: 'SET_WORKOUTS', payload: json})

     }
    }

    if(user){
      fetchWorkouts()
    }
    
  }, [dispatch, user])


  return (
    <div className='home'>
        <div className='workouts'>
          {
            workouts && workouts.map((workout)=>(
              // <p key={workout._id}>{workout.title}</p>
              <WorkoutDetails key={workout._id} workout={workout} />
              
            ))
          }
        </div>
        <div>
          <WorkoutForm/>
        </div>
    </div>
  )
}

export default Home