import AuthScreen from '@/components/home/auth-screen/AuthScreen';
import HomeScreen from '@/components/home/home-screen/HomeScreen';

export default function Home() {
  const users = false
  return (
    <main>
      {users? <HomeScreen/> : <AuthScreen/>}
    </main>
      
  );
}
