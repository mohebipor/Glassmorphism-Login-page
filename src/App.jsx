import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || password.length < 6) {
      alert('Please fill in valid credentials');
      return;
    }
    alert('Login successful! (demo)');
  };

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (signUpData.newPassword !== signUpData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Sign up successful! (demo)');
    setIsSignUp(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div
        className={`
          bg-white/10 backdrop-blur-xl border border-white/20 
          rounded-2xl shadow-2xl p-8 w-full max-w-md
          transition-all duration-500 ease-out overflow-hidden
        `}
      >
        <h1 className="text-3xl font-bold text-white text-center mb-8 tracking-wide">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h1>

        {!isSignUp && (
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-white/80 font-medium mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 transition"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-white/80 font-medium mb-2">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-12 text-white/70 hover:text-white focus:outline-none"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            <div className="text-right">
              <a href="#" className="text-indigo-300 hover:text-indigo-200 text-sm transition">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-2xl transition duration-300 shadow-lg hover:shadow-indigo-500/40"
            >
              Sign In
            </button>
                <div className="mt-6">
                    <p className="text-center text-white/60 text-sm mb-4">Or continue with</p>

                   <div className="flex justify-center gap-5">
                     {/* Google - لوگوی G رنگی استاندارد */}
                     <button
                       type="button"
                       onClick={() => alert('Google Sign In - coming soon')}
                       className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                       title="Sign in with Google"
                     >
                       <svg className="w-6 h-6" viewBox="0 0 24 24">
                         <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.84c-.25 1.31-.98 2.42-2.07 3.16v2.63h3.35c1.96-1.81 3.09-4.47 3.09-7.25z"/>
                         <path fill="#34A853" d="M12 23c2.97 0 5.46-1.01 7.28-2.73l-3.35-2.63c-1.01.68-2.29 1.08-3.93 1.08-3.02 0-5.58-2.04-6.49-4.79H.96v2.67C2.77 20.39 6.62 23 12 23z"/>
                         <path fill="#FBBC05" d="M5.51 14.21c-.23-.68-.36-1.41-.36-2.21s.13-1.53.36-2.21V7.34H.96C.35 8.85 0 10.39 0 12s.35 3.15.96 4.66l4.55-2.45z"/>
                         <path fill="#EA4335" d="M12 4.98c1.64 0 3.11.56 4.27 1.66l3.19-3.19C17.46 1.01 14.97 0 12 0 6.62 0 2.77 2.61.96 6.34l4.55 2.45C6.42 6.02 8.98 4.98 12 4.98z"/>
                       </svg>
                      </button>

                      {/* Apple */}
                     <button
                        type="button"
                        onClick={() => alert('Apple Sign In - coming soon')}
                        className="w-10 h-10 rounded-full bg-black flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                        title="Sign in with Apple"
                      >
                       <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                       </svg>
                     </button>

                     {/* Facebook */}
                     <button
                       type="button"
                       onClick={() => alert('Facebook Sign In - coming soon')}
                       className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-200"
                       title="Sign in with Facebook"
                     >
                       <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                       </svg>
                     </button>
                   </div>
               </div>
          </form>
        )}

        {isSignUp && (
          <div className="animate-slide-up space-y-5">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={signUpData.fullName}
              onChange={handleSignUpChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={signUpData.email}
              onChange={handleSignUpChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition"
              required
            />

            <input
              name="newPassword"
              type="password"
              placeholder="Password"
              value={signUpData.newPassword}
              onChange={handleSignUpChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition"
              required
            />

            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={signUpData.confirmPassword}
              onChange={handleSignUpChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-indigo-400 transition"
              required
            />

            <button
              onClick={handleSignUpSubmit}
              className="w-full bg-indigo-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-2xl transition duration-300 shadow-lg hover:shadow-indigo-500/40"
            >
              Create Account
            </button>
          </div>
        )}

        <p className="text-center text-white/70 mt-6">
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-indigo-300 hover:text-indigo-200 font-medium transition underline"
          >
            {isSignUp ? 'Sign in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;