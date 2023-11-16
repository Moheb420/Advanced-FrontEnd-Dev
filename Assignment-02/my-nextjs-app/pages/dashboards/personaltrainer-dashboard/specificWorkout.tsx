// components/SpecificWorkout.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Exercise from '../exercise';
import WorkoutProgram from '../workoutProgram';

const SpecificWorkout: React.FC = () => {
  const router = useRouter();
  const [idInput, setIdInput] = useState<string>('');
  const [workoutProgram, setWorkoutProgram] = useState<WorkoutProgram | null>(null);
  const jwtToken = typeof window !== 'undefined' ? localStorage.getItem('jwtToken') : null;

  const handleIdInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdInput(e.target.value);
  };

  const fetchSpecificWorkoutProgram = async () => {
    try {
      if (idInput && jwtToken) {
        const response = await fetch(`https://afefitness2023.azurewebsites.net/api/workoutPrograms/${idInput}`, {
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setWorkoutProgram(data);
        } else {
          console.error('Failed to fetch specific workout program');
        }
      }
    } catch (error) {
      console.error('Error during API request', error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSpecificWorkoutProgram();
  };

  return (
    <div>
      <h2>Specific Workout Program</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Workout Program ID:
          <input type="text" value={idInput} onChange={handleIdInputChange} />
        </label>
        <button type="submit">Fetch Workout Program</button>
      </form>
      {workoutProgram && (
        <div>
          <h3>{workoutProgram.name}</h3>
          <p>Description: {workoutProgram.description}</p>
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' }}>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Description</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sets</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Repetitions</th>
              </tr>
            </thead>
            <tbody>
              {workoutProgram.exercises.map((exercise: Exercise) => (
                <tr key={exercise.exerciseId} style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exercise.name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exercise.description}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exercise.sets}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exercise.repetitions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SpecificWorkout;
