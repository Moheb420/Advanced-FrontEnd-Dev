  // TrainerForm.tsx
  import React, { useState } from 'react';
  // import  Data  from '../data';
  
  const TrainerForm: React.FC = () => {
    const [formData, setFormData] = useState<Data>({
      userId: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      personalTrainerId: 0,
      accountType: 'Client', 
    });
  
    const jwtToken = typeof window !== 'undefined' ? localStorage.getItem('jwtToken') : null;
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async () => {
      try {
        const response = await fetch('https://afefitness2023.azurewebsites.net/api/Users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`,
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Handle success, e.g., show a success message
          console.log('Client created successfully');
        } else {
          // Handle failure, e.g., show an error message
          console.error('Failed to create client');
        }
      } catch (error) {
        console.error('Error during API request', error);
      }
    };
  
    return (
      <div>
        <h2>Create Client</h2>
        <form>
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </label>
          <br />
          <label>
            Personal Trainer ID:
            <input type="text" name="personalTrainerId" value={formData.personalTrainerId} onChange={handleInputChange} />
          </label>
          <br />
          <button type="button" onClick={handleSubmit}>
            Create Client
          </button>
        </form>
      </div>
    );
  };
  
  export default TrainerForm;
  
  interface Data {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    personalTrainerId: number; 
    accountType: string; 
  }
  