import Data  from "../data";

// api.ts
const API_BASE_URL = 'https://afefitness2023.azurewebsites.net/api/Users';

export const createTrainer = async (newTrainer: Data) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...newTrainer,
        personalTrainerId: 0,
        accountType: 'PersonalTrainer',
      }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to create trainer');
    }
  } catch (error) {
    console.error('Error during trainer creation', error);
    throw error;
  }
};

export default createTrainer;