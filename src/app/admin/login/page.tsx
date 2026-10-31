'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { BRAND, ROUTES } from '@/lib/constants';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else if (data.user) {
        router.push(ROUTES.admin);
      }
    } catch (err) {
      setError('Failed to log in. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else if (data.user) {
        setMessage('Sign up successful! Redirecting to dashboard...');
        setTimeout(() => router.push(ROUTES.admin), 1500);
      }
    } catch (err) {
      setError('Failed to sign up. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-biahes-navy to-biahes-royal-blue flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="logo-card w-24 h-24 mx-auto mb-4">
            <Image
              src="/images/logos/biahes-logo.png"
              alt="Biahes Logo"
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-white">
            {BRAND.name} Admin
          </h1>
          <p className="text-biahes-gold mt-2">Tour Management Portal</p>
        </div>

        {/* Login Form Card */}
        <div className="card">
          <h2 className="text-2xl font-bold text-biahes-navy mb-6 text-center">
            Admin Login
          </h2>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-biahes-red rounded-lg">
              <p className="text-biahes-red font-semibold text-sm">{error}</p>
            </div>
          )}

          {message && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-biahes-orange rounded-lg">
              <p className="text-biahes-orange font-semibold text-sm">{message}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-biahes-navy mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@biahes.com"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none disabled:bg-gray-100"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-biahes-navy mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-biahes-royal-blue focus:outline-none disabled:bg-gray-100"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-600">or</span>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            onClick={handleSignUp}
            disabled={isLoading}
            className="btn-outline w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Signing up...' : 'Create New Account'}
          </button>

          {/* Demo Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-biahes-bright-blue">
            <p className="text-xs text-biahes-navy font-semibold mb-2">Demo Credentials:</p>
            <p className="text-xs text-gray-700 mb-1">📧 Email: admin@biahes.com</p>
            <p className="text-xs text-gray-700 mb-2">🔑 Password: demo123456</p>
            <p className="text-xs text-gray-600 italic">
              Note: Create a new account or use demo credentials to test the admin panel.
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href={ROUTES.home} className="text-biahes-gold hover:text-white transition-colors font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
