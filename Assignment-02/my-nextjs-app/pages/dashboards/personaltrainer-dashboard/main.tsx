// pages/trainer-dashboard.tsx
import React, { useState } from 'react';
import TrainerForm from './TrainerForm';
import WorkoutList from './WorkoutList';
import SpecificWorkout from './specificWorkout';
import ClientList from './ClientsList';
import NewWorkoutForm from './NewWorkoutForm';

const TrainerDashboard: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Trainer Dashboard</h1>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <button
          onClick={() => setActiveComponent('TrainerForm')}
          style={{ backgroundColor: '#3498db', color: '#fff', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.25rem' }}
        >
          Trainer Form
        </button>
        <button
          onClick={() => setActiveComponent('NewWorkoutForm')}
          style={{ backgroundColor: '#3498db', color: '#fff', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginLeft: '0.5rem' }}
        >
          Create New WorkoutForm
        </button>
        <button
          onClick={() => setActiveComponent('WorkoutList')}
          style={{ backgroundColor: '#3498db', color: '#fff', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginLeft: '0.5rem' }}
        >
          Workout List
        </button>
        <button
          onClick={() => setActiveComponent('SpecificWorkout')}
          style={{ backgroundColor: '#3498db', color: '#fff', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginLeft: '0.5rem' }}
        >
          Specific Workout
        </button>
        <button
          onClick={() => setActiveComponent('ClientList')}
          style={{ backgroundColor: '#3498db', color: '#fff', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginLeft: '0.5rem' }}
        >
          Client List
        </button>
      </div>

      {activeComponent === 'TrainerForm' && <TrainerForm />}
      {activeComponent === 'NewWorkoutForm' && <NewWorkoutForm />}
      {activeComponent === 'WorkoutList' && <WorkoutList />}
      {activeComponent === 'SpecificWorkout' && <SpecificWorkout />}
      {activeComponent === 'ClientList' && <ClientList />}
    </div>
  );
};

export default TrainerDashboard;
