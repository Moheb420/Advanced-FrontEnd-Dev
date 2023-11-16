// components/ClientList.tsx
import React, { useEffect, useState } from 'react';


const ClientList: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const jwtToken = typeof window !== 'undefined' ? localStorage.getItem('jwtToken') : null;

  useEffect(() => {
    // Fetch clients from the API with JWT token
    const fetchClients = async () => {
      try {
        const response = await fetch('https://afefitness2023.azurewebsites.net/api/Users/Clients', {
          headers: {
            'Authorization': `Bearer ${jwtToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setClients(data);
        } else {
          console.error('Failed to fetch clients');
        }
      } catch (error) {
        console.error('Error during API request', error);
      }
    };

    fetchClients();
  }, [jwtToken]);

  return (
    <div>
      <h2>Clients</h2>
      <ul>
        {clients.map((client) => (
          <li key={client.clientId}>{client.firstName} {client.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientList;


interface Client {
  clientId: number;
  firstName: string;
  lastName: string;
  email: string;
}