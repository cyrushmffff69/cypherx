import { loginUser, requestOTP, verifyOTP } from '../api';

export const AuthService = {
  loginUser: async (email) => {
    if (!email) throw new Error('Email is required');
    return await loginUser(email);
  },

  requestSignupOTP: async (email) => {
    if (!email) throw new Error('Email is required');
    return await requestOTP(email);
  },

  verifySignupOTP: async (email, otp) => {
    if (!email || !otp) throw new Error('Email and OTP are required');
    return await verifyOTP(email, otp);
  },

  resetPassword: async (email, newPassword) => {
    if (!email || !newPassword) throw new Error('Email and new password are required');

    const res = await fetch('http://localhost:5000/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, newPassword })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Reset failed');
    return data;
  }
};