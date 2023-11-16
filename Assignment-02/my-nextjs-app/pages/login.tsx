import React, { useState } from 'react';
import { useRouter } from 'next/router';
import * as jwtDecode from 'jwt-decode';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const jwtToken = typeof window !== 'undefined' ? localStorage.getItem('jwtToken') : null;
  const handleLogin = async () => {
    try {
      const response = await fetch('https://afefitness2023.azurewebsites.net/api/Users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(response)
      if (response.ok) {
        const userData = await response.json();
        console.log(userData?.jwt);
        const jwtToken = userData?.jwt;

        if (jwtToken) {
          localStorage.setItem('jwtToken', jwtToken);
          const decodedToken = jwtDecode.jwtDecode(jwtToken) as { Role?: string };
          console.log(decodedToken);

          const accountType = decodedToken.Role;
          

          if (accountType === 'Manager') {
            router.push('/dashboards/manager-dashboard/main');
          } else if (accountType === 'PersonalTrainer') {
            router.push('/dashboards/personaltrainer-dashboard/main');
          } else if (accountType === 'Client') {
            router.push('/dashboards/client-dashboard/main');
          } else {
            console.error('Unknown accountType:', accountType);
          }
        } else {
          console.error('Authentication failed');
        }
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication', error);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
