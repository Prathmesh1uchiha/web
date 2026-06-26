import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

export default function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
  setError("");
  setLoading(true);
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    setError(error.message);
    setLoading(false);
    return;
  }
  setLoading(false);
  navigate("/home");
};

  return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
    }}
  >
    <div
      style={{
        width: "380px",
        backgroundColor: "#ffffff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#0f172a",
          marginBottom: "10px",
        }}
      >
        NovaTech
      </h1>

      <p
        style={{
          color: "#64748b",
          marginBottom: "30px",
        }}
      >
        Create your account
      </p>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #cbd5e1",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
          border: "1px solid #cbd5e1",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />

      {error && (
        <p
          style={{
            color: "red",
            marginBottom: "15px",
          }}
        >
          {error}
        </p>
      )}

      <button
        onClick={submit}
        disabled={loading}
        style={{
          width: "100%",
          padding: "13px",
          backgroundColor: "#0f172a",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {loading ? "Creating..." : "Create Account"}
      </button>

      <p
        style={{
          marginTop: "20px",
          color: "#64748b",
        }}
      >
        Already have an account?{" "}
        <Link
          to="/login"
          style={{
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Sign In
        </Link>
      </p>
    </div>
  </div>
);
}