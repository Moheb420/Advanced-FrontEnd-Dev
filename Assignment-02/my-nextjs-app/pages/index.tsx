// pages/index.tsx
import { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [apiData, setApiData] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setApiData(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello Next.js</h1>
      <p>Data from server: {apiData}</p>
    </div>
  );
};

export default HomePage;
