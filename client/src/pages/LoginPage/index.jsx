// ============================================
// Enhanced LoginPage - Premium Landing (800+ lines)
// ============================================

import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext.jsx';
import { register, emailLogin } from '../../services/authService.js';
import {
  BsCameraVideo,
  BsMicFill,
  BsFileEarmarkTextFill,
  BsCodeSlash,
  BsBarChartFill,
  BsShieldCheck,
  BsPeopleFill,
  BsX,
  BsClockFill,
  BsCpuFill,
  BsGraphUp,
  BsStarFill,
  BsPlayCircleFill,
  BsAwardFill,
  BsLightningChargeFill,
} from 'react-icons/bs';
import toast from 'react-hot-toast';
import './index.css';

function LoginPage() {

  const [isSignUp, setIsSignUp] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("Weak");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const isStrongPassword = (password) => {
    return (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    );
  };

  const getStrength = (value) => {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[!@#$%^&*]/.test(value)) score++;

    if (score <= 2) return "Weak";
    if (score <= 4) return "Medium";
    return "Strong";
  };

  const openLogin = () => {
    setIsSignUp(false);
    setShowModal(true);
  };

  const openSignup = () => {
    setIsSignUp(true);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp && passwordError) return;

    setLoading(true);

    try {
      let result;

      if (isSignUp) {
        result = await register(name, email, password);
        toast.success('Account created successfully!');
      } else {
        result = await emailLogin(email, password);
        toast.success('Welcome back!');
      }

      login(result.token, result.user);
      closeModal();
      navigate('/');
    } catch (error) {
      const message =
        error.response?.data?.message || 'Something went wrong';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };


  // ================= UI =================
  return (
    <div className="login-page">
      {/* ================= NAVBAR ================= */}
      <nav className="nav">
        <div className="nav__left">
          <BsCameraVideo className="nav__icon" />
          <span className="nav__title">AI Mock Interview</span>
        </div>

        <div className="nav__right">
          <button className="nav__btn" onClick={openLogin}>
            Login
          </button>
          <button className="nav__btn nav__btn_primary" onClick={openSignup}>
            Sign Up Free
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero__left">
          
          <div className="hero__badge">Used by 50K+ Developers</div>

          <h1 className="hero__title">
            Ace Your <span className="hero__highlight">Technical Interviews</span>
            <br />
            with AI-Powered Practice
          </h1>

          <p className="hero__description">
            Practice real interviews with AI. Get instant feedback, detailed 
            analytics, and improve 3x faster than traditional methods.
          </p>

          <div className="hero__buttons">
            <button className="hero__cta" onClick={openSignup}>
              <BsLightningChargeFill className="hero__cta-icon" />
              Start Free Trial
            </button>

            <button className="hero__secondary" onClick={openLogin}>
              Watch Demo
            </button>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong className="hero__stat-number">94%</strong>
              <span className="hero__stat-label">Success Rate</span>
            </div>

            <div className="hero__stat">
              <strong className="hero__stat-number">2.3M</strong>
              <span className="hero__stat-label">Interviews Done</span>
            </div>
          </div>

        </div>

        <div className="hero__right">
          <div className="hero__mockup">
            <img
              className="hero__image"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800"
              alt="AI Interview Platform"
            />
            <div className="hero__glow"></div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <h2 className="features__title">
          Everything You Need to Ace Interviews
        </h2>

        <div className="features__grid">

          <div className="features__card features__card--voice">
            <BsMicFill className="features__icon" />
            <h4 className="features__card-title">Voice Interviews</h4>
            <p className="features__card-description">
              Talk naturally with AI interviewer. Real-time speech recognition.
            </p>
          </div>

          <div className="features__card features__card--coding">
            <BsCodeSlash className="features__icon" />
            <h4 className="features__card-title">Live Coding</h4>
            <p className="features__card-description">
              Practice real coding challenges with AI code review.
            </p>
          </div>

          <div className="features__card features__card--feedback">
            <BsBarChartFill className="features__icon" />
            <h4 className="features__card-title">AI Feedback</h4>
            <p className="features__card-description">
              Get structured performance analysis with improvement tips.
            </p>
          </div>

          <div className="features__card features__card--resume">
            <BsFileEarmarkTextFill className="features__icon" />
            <h4 className="features__card-title">Resume Analysis</h4>
            <p className="features__card-description">
              AI-powered resume optimization for ATS systems.
            </p>
          </div>

          <div className="features__card features__card--companies">
            <BsCpuFill className="features__icon" />
            <h4 className="features__card-title">200+ Companies</h4>
            <p className="features__card-description">
              FAANG, startups, and enterprise interview patterns.
            </p>
          </div>

          <div className="features__card features__card--practice">
            <BsClockFill className="features__icon" />
            <h4 className="features__card-title">Unlimited Practice</h4>
            <p className="features__card-description">
              Practice anytime, anywhere across all devices.
            </p>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats">
        <div className="stats__grid">

          <div className="stats__item stats__item--users">
            <BsPeopleFill className="stats__icon" />
            <div className="stats__number">50K+</div>
            <div className="stats__label">Active Users</div>
          </div>

          <div className="stats__item stats__item--success">
            <BsGraphUp className="stats__icon" />
            <div className="stats__number">94%</div>
            <div className="stats__label">Success Rate</div>
          </div>

          <div className="stats__item stats__item--interviews">
            <BsPlayCircleFill className="stats__icon" />
            <div className="stats__number">2.3M</div>
            <div className="stats__label">Interviews Completed</div>
          </div>

          <div className="stats__item stats__item--rating">
            <BsStarFill className="stats__icon" />
            <div className="stats__number">4.9/5</div>
            <div className="stats__label">User Rating</div>
          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="how">
        <h2 className="how__title">How It Works (3 Minutes)</h2>

        <div className="how__steps">
          
          <div className="how__step how__step--1">
            <div className="how__step-number">1</div>
            <h4 className="how__step-title">Choose Role & Level</h4>
            <p className="how__step-description">
              Select from 50+ roles (SDE, Frontend, Data Science, etc.)
            </p>
          </div>

          <div className="how__step how__step--2">
            <div className="how__step-number">2</div>
            <h4 className="how__step-title">AI Interview</h4>
            <p className="how__step-description">
              30-min live interview with follow-up questions
            </p>
          </div>

          <div className="how__step how__step--3">
            <div className="how__step-number">3</div>
            <h4 className="how__step-title">Get Report</h4>
            <p className="how__step-description">
              Detailed feedback + improvement roadmap
            </p>
          </div>

        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="trust">
        
        <div className="trust__item">
          <BsShieldCheck className="trust__icon" />
          <span className="trust__label">End-to-End Encryption</span>
        </div>

        <div className="trust__item">
          <BsAwardFill className="trust__icon" />
          <span className="trust__label">94% Pass Rate</span>
        </div>

        <div className="trust__item">
          <BsLightningChargeFill className="trust__icon" />
          <span className="trust__label">Real-time Feedback</span>
        </div>

        <div className="trust__item">
          <BsPeopleFill className="trust__icon" />
          <span className="trust__label">50K+ Developers</span>
        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="final-cta">
        <h2>Ready to Ace Your Next Interview?</h2>
        <p>Join 50K+ developers who got hired at top companies</p>
        <div className="cta-buttons">
          <button className="cta-primary" onClick={openSignup}>
            Start Free Trial
          </button>
          <button className="cta-secondary" onClick={openLogin}>
            Login
          </button>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer__container">

          <div className="footer__brand">
            <div className="footer__logo">
              <BsCameraVideo className="footer__logo-icon" />
            </div>
            <div className="footer__brand-text">
              <h3 className="footer__title">AI Mock Interview</h3>
              <p className="footer__tagline">
                Practice smarter, crack interviews faster
              </p>
            </div>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Privacy Policy</a></li>
              <li><a href="#" className="footer__link">Terms & Conditions</a></li>
              <li><a href="#" className="footer__link">Support</a></li>
              <li><a href="#" className="footer__link">API</a></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4 className="footer__heading">Contact</h4>
            <p className="footer__contact-item">
              Email: <a href="mailto:support@aimock.com" className="footer__link">support@aimock.com</a>
            </p>
            <p className="footer__contact-item">
              Phone: <a href="tel:+919876543210" className="footer__link">+91 98765 43210</a>
            </p>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 AI Mock Interview. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            
            <div className="modal-header">
              <h3>
                {isSignUp ? '📝 Create Account' : '👋 Welcome Back'}
              </h3>
              <BsX className="modal-close" onClick={closeModal} />
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              
              {isSignUp && (
                <div className="modal-input-group">
                  <span className="modal-icon"></span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="modal-input-group">
                <span className="modal-icon"></span>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="modal-input-group password-group">
                <span className="modal-icon"></span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPassword(value);
                  }}
                  required
                />

                <span
                  className="modal-eye"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>

              <button
                type="submit"
                disabled={loading || passwordError}
                className="modal-btn"
              >
                {loading
                  ? '⏳ Processing...'
                  : isSignUp
                  ? '🚀 Create Account'
                  : '🔑 Sign In'}
              </button>
            </form>

            <div className="modal-footer">
              {isSignUp ? (
                <p>
                  Already have an account?{' '}
                  <span onClick={() => setIsSignUp(false)}>Sign In</span>
                </p>
              ) : (
                <p>
                  New here?{' '}
                  <span onClick={() => setIsSignUp(true)}>Create Account</span>
                </p>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;