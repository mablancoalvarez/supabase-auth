import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { client } from "../api/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export const SignUp = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSumit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await client.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      setFormData({ email: "", password: "" });
      console.log("result", result);
      if (result.error) {
        setMessage("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
      } else {
        setMessage(
          "Registro exitoso. Por favor, revisa tu correo electrónico."
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>To create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSumit}>
          <div className="grid items-center w-full gap-4">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
            <Button type="submit">Sign up</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter> {message && <p>{message} 📩</p>}</CardFooter>
    </Card>
  );
};
