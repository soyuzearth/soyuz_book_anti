import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckoutPage() {
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = () => {
        setIsProcessing(true);
        // Simulate payment delay
        setTimeout(() => {
            // Save to localStorage
            const purchasedBooks = JSON.parse(localStorage.getItem('soyuz_purchased_books') || '[]');
            if (!purchasedBooks.includes(1)) { // ID 1 is our mock book
                purchasedBooks.push(1);
                localStorage.setItem('soyuz_purchased_books', JSON.stringify(purchasedBooks));
            }

            setIsProcessing(false);
            navigate('/success');
        }, 1500);
    };

    return (
        <div className="container" style={{ padding: '60px 20px', maxWidth: '600px' }}>
            <h1 style={{ marginBottom: '30px' }}>Checkout</h1>

            <div style={{
                backgroundColor: 'var(--color-surface)',
                padding: '30px',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '30px'
            }}>
                <h3 style={{ marginBottom: '20px' }}>Order Summary</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Item</span>
                    <span>Start Your Digital Journey (Paper)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '20px' }}>
                    <span>Total</span>
                    <span>25,000 KRW</span>
                </div>
            </div>

            <button
                onClick={handlePayment}
                disabled={isProcessing}
                style={{
                    width: '100%',
                    padding: '20px',
                    backgroundColor: 'var(--color-accent)',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    borderRadius: 'var(--radius-md)',
                    opacity: isProcessing ? 0.7 : 1,
                    cursor: isProcessing ? 'not-allowed' : 'pointer'
                }}
            >
                {isProcessing ? 'Processing...' : 'Pay with Card'}
            </button>
        </div>
    );
}
