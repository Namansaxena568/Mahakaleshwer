import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css"; // same css file use karenge

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const err = {};
    if (!form.name) err.name = "Name required";
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
    if (form.password !== form.confirmPassword) {
      err.confirmPassword = "Passwords do not match";
    }
    return err;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setLoading(true);
      // demo API call
      setTimeout(() => {
        setLoading(false);
        console.log("Register data:", form);
        alert("Registration successful (demo). Now login with your account.");
        navigate("/login");
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
        <h2 className="login-title">Register</h2>

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          <label className="input-label">
            Full Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`input-field ${errors.name ? "input-error" : ""}`}
              placeholder="Your name"
              autoComplete="name"
            />
            {errors.name && <div className="error-text">{errors.name}</div>}
          </label>

          <label className="input-label">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`input-field ${errors.email ? "input-error" : ""}`}
              placeholder="you@example.com"
              autoComplete="email"
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
              placeholder="Enter password"
              autoComplete="new-password"
            />
            {errors.password && <div className="error-text">{errors.password}</div>}
          </label>

          <label className="input-label">
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className={`input-field ${errors.confirmPassword ? "input-error" : ""}`}
              placeholder="Re-enter password"
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <div className="error-text">{errors.confirmPassword}</div>
            )}
          </label>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <div className="signup-line">
            Already have an account?{" "}
            <NavLink to="/login" className="link-small">
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
