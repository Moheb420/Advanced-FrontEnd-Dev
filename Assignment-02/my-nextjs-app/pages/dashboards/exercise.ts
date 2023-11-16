export default interface Exercise {
    exerciseId: number;
    name: string;
    description: string;
    sets: number;
    repetitions: number;
    time: string;
    workoutProgramId: number;
    personalTrainerId: number;
  }