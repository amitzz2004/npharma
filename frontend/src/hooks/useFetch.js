import { useState } from "react";

// Generic hook for handling async submit calls (loading / error / success)
export const useFetch = (asyncFn) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const execute = async (payload) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const result = await asyncFn(payload);
      setSuccess(true);
      return result;
    } catch (err) {
      const message =
        err?.response?.data?.message || "Something went wrong. Please try again.";
      setError(message);
      throw new Error(message);
    } finally {
      setLoading(false);
    }
  };

  return { execute, loading, error, success };
};
