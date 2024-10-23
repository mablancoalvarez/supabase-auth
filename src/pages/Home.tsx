import { useAuth } from "@/hooks/useAuth";

export const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Home 🎉</h1>
      <div>You are logged in and your email address is {user?.email}</div>
    </div>
  );
};
