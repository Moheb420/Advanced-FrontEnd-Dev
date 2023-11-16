import Exercise from "./exercise";
export default interface WorkoutProgram {
    workoutProgramId: number;
    name: string;
    description: string;
    exercises: Exercise[];
    personalTrainerId: number;
    clientId: number;
  }