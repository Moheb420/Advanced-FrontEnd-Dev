// components/ClientWorkoutPrograms.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import WorkoutProgram from '../workoutProgram';
import * as jwtDecode from 'jwt-decode';

const ClientWorkoutPrograms: React.FC = () => {
  const router = useRouter();
  const [clientWorkoutPrograms, setClientWorkoutPrograms] = useState<WorkoutProgram[]>([]);
  const [selectedProgram, setSelectedProgram] = useState<WorkoutProgram | null>(null);
  const jwtToken = typeof window !== 'undefined' ? localStorage.getItem('jwtToken') || '' : '';

  useEffect(() => {
    // Decode the JWT to get client information
    const decodedToken = jwtDecode.jwtDecode(jwtToken) as { UserId?: string };
    console.log(decodedToken.UserId);
    if (decodedToken?.UserId) {
      // Fetch workout programs for the client from the API
      const fetchClientWorkoutPrograms = async () => {
        try {
          const response = await fetch(`https://afefitness2023.azurewebsites.net/api/WorkoutPrograms/client/${decodedToken.UserId}`, {
            headers: {
              'Authorization': `Bearer ${jwtToken}`,
            },
          });

          console.log('Response:', response);

          if (response.ok) {
            const data = await response.json();
            console.log('Data:', data);
            setClientWorkoutPrograms(data);
          } else {
            console.error('Failed to fetch client workout programs');
          }
        } catch (error) {
          console.error('Error during API request', error);
        }
      };

      fetchClientWorkoutPrograms();
    }
  }, [jwtToken]);

  const handleProgramClick = (program: WorkoutProgram) => {
    setSelectedProgram(program);
  };

  return (
    <div>
      <h2>Your Workout Programs</h2>
      {clientWorkoutPrograms.length > 1 ? (
        // Display the list of programs if there is more than one program
        <div>
          {clientWorkoutPrograms.map((program) => (
            <div key={program.workoutProgramId} onClick={() => handleProgramClick(program)}>
              <p>{program.name}</p>
            </div>
          ))}
        </div>
      ) : (
        // Display the table if there is only one program or no programs
        <div>
          {clientWorkoutPrograms.map((program) => (
            <div key={program.workoutProgramId}>
              <h3>{program.name}</h3>
              <table className="workout-table">
                <thead>
                  <tr>
                    <th>Exercise</th>
                    <th>Description</th>
                    <th>Set</th>
                    <th>Reps/Time</th>
                  </tr>
                </thead>
                <tbody>
                  {program.exercises.map((exercise) => (
                    <tr key={exercise.exerciseId}>
                      <td>{exercise.name}</td>
                      <td>{exercise.description}</td>
                      <td>{exercise.sets}</td>
                      <td>{exercise.repetitions > 0 ? ` ${exercise.repetitions}` : `Time: ${exercise.time}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .workout-table {
          border-collapse: collapse;
          width: 100%;
        }
        .workout-table th, .workout-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .workout-table th {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
};

export default ClientWorkoutPrograms;

interface WorkoutProgram {
  workoutProgramId: number;
  name: string;
  description: string;
  exercises: Exercise[];
  personalTrainerId: number;
  clientId: number;
}

interface Exercise {
  exerciseId: number;
  name: string;
  description: string;
  sets: number;
  repetitions: number;
  time: string;
  workoutProgramId: number;
  personalTrainerId: number;
}