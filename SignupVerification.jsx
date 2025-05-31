import React, { useState } from 'react';
import { verifyOTP } from '../api';

export default function SignupVerification() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const verify = async () => {
    const res = await verifyOTP(email, otp);
    alert('Verified! Token: ' + res.data?.token);
  };

  return (
    <div className="auth-container">
      <h2>Verify OTP</h2>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
      <button onClick={verify}>Verify</button>
    </div>
  );
}
