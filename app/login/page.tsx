"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";
import { useRouter } from "next/navigation";

import { loginService } from "../../services/authService";

import { Button, Card, Label, TextInput } from "flowbite-react";

export default function Login() {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Hooks
  const dispatch = useDispatch();

  // Router
  const router = useRouter();

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    // Prevent default form submission
    e.preventDefault();

    setError(""); // Reset error message

    setLoading(true); // Set loading state

    try {
      // Call login service
      const data = await loginService(email, password);

      // Save user data to Redux store
      dispatch(setUser(data.user));

      // Redirect or show success message
      console.log("Login successful", data);

      // Redirect to dashboard
      router.push("/dashboard/product");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section id="loginSection">
      <div className="flex min-h-screen items-center justify-center p-3 dark:bg-gray-800">
        <Card className="w-full max-w-md shadow-lg">
          <h1 className="mb-4 text-center text-2xl font-bold text-white">
            Login
          </h1>
          {/* Error Message */}
          {error && <p className="text-center text-red-500">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Password Field */}
            <div>
              <Label htmlFor="password" value="Password" />
              <TextInput
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            {/* Submit Button */}
            <Button
              type="submit"
              gradientDuoTone="blueToCyan"
              className="w-full bg-blue-400 text-white"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="mr-2 size-4 animate-spin rounded-full border-2 border-blue-400 border-t-transparent"></div>
                  Loading...
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
