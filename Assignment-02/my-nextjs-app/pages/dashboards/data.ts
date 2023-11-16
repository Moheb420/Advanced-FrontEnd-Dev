// Define the TrainerData type
export interface Data {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  personalTrainerId: number; 
  accountType: string; 
}

export default Data;

export interface Exercise {
  exerciseId: number;
  name: string;
  description: string;
  sets: number;
  repetitions: number;
  time: string;
  workoutProgramId: number;
  personalTrainerId: number;
}

export default Exercise;

export interface WorkoutProgram {
  workoutProgramId: number;
  name: string;
  description: string;
  exercises: Exercise[];
  personalTrainerId: number;
  clientId: number;
}

export default WorkoutProgram;

export interface Client {
  clientId: number;
  firstName: string;
  lastName: string;
  email: string;
}

export default Client;
