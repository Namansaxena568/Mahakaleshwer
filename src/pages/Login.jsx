import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css"; // make sure App.css includes the CSS below

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // optional: redirect after login

  const validate = () => {
    const err = {};
    if (!form.email) {
      err.email = "Email required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      err.email = "Invalid email";
    }
    if (!form.password) {
      err.password = "Password required";
    } else if (form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }
    return err;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setLoading(true);
      // demo: simulate API call
      setTimeout(() => {
        setLoading(false);
        console.log("Login data:", form);
        // after successful login redirect or do something:
        // navigate("/dashboard");
        alert("Login successful (demo). Check console for data.");
      }, 1000);
    }
  };

  return (
    <div>
        {/* Hero Section */}
  <section className="hero-section">
    <div className="hero-overlay"></div>

    <div className="hero-content">
      <p className="hero-subtitle">Shri</p>
      <h1 className="hero-title">Mahakaleshwar</h1>
      <p className="hero-location">Mandir, Ujjain</p>

      <div className="hero-divider"></div>
      <p className="hero-tagline">DARSHAN BOOKING</p>
    </div>
  </section>
    <div className="page-center">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          <label className="input-label">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? "input-error" : ""}`}
              placeholder="you@example.com"
              autoComplete="username"
            />
            {errors.email && <div className="error-text">{errors.email}</div>}
          </label>

          <label className="input-label">
            Password
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={`input-field ${errors.password ? "input-error" : ""}`}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            {errors.password && <div className="error-text">{errors.password}</div>}
          </label>

          <div className="row-between" style={{ marginBottom: "1rem" }}>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
              />{" "}
              Remember me
            </label>

            <NavLink to="/forgot" className="link-small">Forgot?</NavLink>
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <div className="divider">or</div>

          <div className="social-row">
            <button type="button" className="btn-outline">Continue with Google</button>
            <button type="button" className="btn-outline">Continue with Facebook</button>
          </div>

          <div className="signup-line">
            Don't have an account? <NavLink to="/register" className="link-small">Register</NavLink>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}