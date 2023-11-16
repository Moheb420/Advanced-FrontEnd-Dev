import Exercise from "./Exercise";
export default interface WorkoutProgram {
    workoutProgramId: number;
    name: string;
    description: string;
    exercises: Exercise[];
    personalTrainerId: number;
    clientId: number;
  }