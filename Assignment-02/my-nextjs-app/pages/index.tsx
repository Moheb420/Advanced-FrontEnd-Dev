// pages/index.tsx
import { useEffect, useState } from 'react';
import LoginPage from './login';

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
      <LoginPage />
    </div>
  );
};

export default HomePage;
