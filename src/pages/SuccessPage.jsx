import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SuccessPage() {
    const navigate = useNavigate();

    return (
        <div className="container" style={{ padding: '80px 20px', textAlign: 'center', maxWidth: '600px' }}>
            <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(74, 222, 128, 0.1)',
                color: '#4ade80',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px',
                fontSize: '2rem'
            }}>
                ✓
            </div>

            <h1 style={{ marginBottom: '20px' }}>Payment Successful!</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '40px', lineHeight: '1.6' }}>
                Thank you for your purchase.<br />
                Your digital book has been added to your library.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Link to="/library" style={{
                    display: 'block',
                    padding: '16px',
                    backgroundColor: 'var(--color-accent)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: '700',
                    borderRadius: 'var(--radius-md)',
                    transition: 'var(--transition-fast)'
                }}>
                    Go to My Library
                </Link>

                <Link to="/" style={{
                    display: 'block',
                    padding: '16px',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                }}>
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
