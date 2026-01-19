import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../index.css';

export default function RootLayout() {
    return (
        <div className="root-layout">
            {/* Header / Nav */}
            <nav style={{ padding: '20px', borderBottom: '1px solid var(--color-border)' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h2 style={{ margin: 0 }}>SOYUZ</h2>
                    </Link>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <Link to="/library" style={{ textDecoration: 'none', color: 'var(--color-text-secondary)', transition: 'color 0.2s' }}>
                            My Library
                        </Link>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>

            {/* Footer */}
            <footer style={{ borderTop: '1px solid var(--color-border)', padding: '40px 0', textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                SOYUZ &copy; 2026
            </footer>
        </div>
    );
}
