// components/WorkoutList.tsx
import React, { useEffect, useState } from 'react';
import { WorkoutProgram } from '../data';

const WorkoutList: React.FC = () => {
  const [workoutPrograms, setWorkoutPrograms] = useState<WorkoutProgram[]>([]);
  const jwtToken = typeof window !== 'undefined' ? localStorage.getItem('jwtToken') : null;

  useEffect(() => {
    // Fetch workout programs from the API
    const fetchWorkoutPrograms = async () => {
      try {
        const response = await fetch('https://afefitness2023.azurewebsites.net/api/workoutPrograms', {
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setWorkoutPrograms(data);
        } else {
          console.error('Failed to fetch workout programs');
        }
      } catch (error) {
        console.error('Error during API request', error);
      }
    };

    fetchWorkoutPrograms();
  }, [jwtToken]);

  return (
    <div>
      <h2>Workout Programs</h2>
      {workoutPrograms.map((program) => (
        <div key={program.workoutProgramId} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
          <h3>{program.name}</h3>
          <p>Description: {program.description}</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', border: '1px solid #ddd' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Exercise</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Sets</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Repetitions</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {program.exercises.map((exercise) => (
                <tr key={exercise.exerciseId}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exercise.name}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exercise.sets}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exercise.repetitions}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{exercise.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
