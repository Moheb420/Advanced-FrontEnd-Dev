// NewWorkoutForm.tsx
import React, { useState } from 'react';
import { WorkoutProgram, Exercise } from '../data'; // Import the necessary interfaces

const NewWorkoutForm: React.FC = () => {
  const [workoutData, setWorkoutData] = useState<WorkoutProgram>({
    workoutProgramId: 0,
    name: '',
    description: '',
    exercises: [],
    personalTrainerId: 0,
    clientId: 0,
  });

  const [exerciseData, setExerciseData] = useState<Exercise>({
    exerciseId: 0,
    name: '',
    description: '',
    sets: 0,
    repetitions: 0,
    time: '',
    workoutProgramId: 0,
    personalTrainerId: 0,
  });

  const jwtToken = typeof window !== 'undefined' ? localStorage.getItem('jwtToken') : null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWorkoutData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleExerciseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExerciseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const addExercise = () => {
    setWorkoutData((prevData) => ({
      ...prevData,
      exercises: [...prevData.exercises, { ...exerciseData }],
    }));
    setExerciseData({
      exerciseId: 0,
      name: '',
      description: '',
      sets: 0,
      repetitions: 0,
      time: '',
      workoutProgramId: 0,
      personalTrainerId: 0,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://afefitness2023.azurewebsites.net/api/WorkoutPrograms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(workoutData),
      });
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Workout program created successfully');
      } else {
        // Handle failure, e.g., show an error message
        console.error('Failed to create workout program');
      }
    } catch (error) {
      console.error('Error during API request', error);
    }
  };

  return (
    <div>
      <h2>Create Workout Program</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={workoutData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" value={workoutData.description} onChange={handleInputChange} />
        </label>
        <br />
        <h3>Exercises</h3>
        <label>
          Exercise Name:
          <input type="text" name="name" value={exerciseData.name} onChange={handleExerciseChange} />
        </label>
        <br />
        <label>
          Exercise Description:
          <input type="text" name="description" value={exerciseData.description} onChange={handleExerciseChange} />
        </label>
        <br />
        <label>
          Sets:
          <input type="number" name="sets" value={exerciseData.sets} onChange={handleExerciseChange} />
        </label>
        <br />
        <label>
          Repetitions:
          <input type="number" name="repetitions" value={exerciseData.repetitions} onChange={handleExerciseChange} />
        </label>
        <br />
        <label>
          Time:
          <input type="text" name="time" value={exerciseData.time} onChange={handleExerciseChange} />
        </label>
        <br />
        <p>Click the add exercise button to add exercise inside the workout program</p>
        <p>*Note: Evertime you click the button it add new exercise inside the workout program</p>
        <button type="button" onClick={addExercise}>
          Add Exercise
        </button>
        <br />
        <button type="button" onClick={handleSubmit}>
          Create Workout Program
        </button>
      </form>
    </div>
  );
};

export default NewWorkoutForm;
