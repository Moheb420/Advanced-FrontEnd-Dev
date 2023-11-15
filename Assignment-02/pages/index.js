// pages/index.js
import ClientComponent from '../components/ClientComponent';

export default function Home({ serverData }) {
  return (
    <div>
      <h1>Next.js App</h1>
      <p>{serverData}</p>
      <ClientComponent />
    </div>
  );
}

// Fetch server data at the server side
export async function getServerSideProps() {
  const res = await fetch('https://your-app-url/api/data');
  const data = await res.json();

  return {
    props: {
      serverData: data.serverData,
    },
  };
}
