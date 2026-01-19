import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const MOCK_BOOK = {
    id: 1,
    title: "Start Your Digital Journey",
    subtitle: "A guide to becoming a 1-person brand",
    pricePaper: 25000,
    priceDigital: 15000,
    coverImage: "https://placehold.co/400x600/1a1d24/fff?text=Book+Cover", // Placeholder
    description: "This book reveals the secrets to building a sustainable digital brand from scratch. Learn how to leverage your unique skills and create value in the digital economy.",
};

export default function BookDetailPage() {
    const [selectedOption, setSelectedOption] = useState('paper'); // 'paper' | 'digital'

    const currentPrice = selectedOption === 'paper' ? MOCK_BOOK.pricePaper : MOCK_BOOK.priceDigital;

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Redirect to checkout
        navigate('/checkout');
    };

    return (
        <div className="book-detail-page">
            {/* Header / Nav (Simple for now) */}


            <main className="container" style={{ padding: '60px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
                {/* Left Column: Image */}
                <div className="product-image-section">
                    <div style={{
                        backgroundColor: 'var(--color-surface)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                    }}>
                        <img
                            src={MOCK_BOOK.coverImage}
                            alt={MOCK_BOOK.title}
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: 'var(--radius-sm)' }}
                        />
                    </div>
                </div>

                {/* Right Column: Details & Form */}
                <div className="product-info-section">
                    <span style={{ color: 'var(--color-accent)', fontWeight: '600', letterSpacing: '1px', fontSize: '0.875rem' }}>
                        NEW RELEASE
                    </span>
                    <h1 style={{ fontSize: '3rem', marginTop: '10px', marginBottom: '10px' }}>{MOCK_BOOK.title}</h1>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.25rem', marginBottom: '30px' }}>
                        {MOCK_BOOK.subtitle}
                    </p>

                    <div className="price-tag" style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '40px' }}>
                        {currentPrice.toLocaleString()} KRW
                    </div>

                    <form onSubmit={handleSubmit}>
                        {/* Option Selection */}
                        <div className="options-group" style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', marginBottom: '15px', fontWeight: '600' }}>Select Format</label>
                            <div style={{ display: 'flex', gap: '15px' }}>

                                {/* Paper Option */}
                                <div
                                    onClick={() => handleOptionChange('paper')}
                                    style={{
                                        flex: 1,
                                        padding: '20px',
                                        border: `2px solid ${selectedOption === 'paper' ? 'var(--color-accent)' : 'var(--color-border)'}`,
                                        borderRadius: 'var(--radius-md)',
                                        backgroundColor: selectedOption === 'paper' ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                        cursor: 'pointer',
                                        transition: 'var(--transition-fast)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                                        <strong>Paper Book</strong>
                                        {selectedOption === 'paper' && <span style={{ color: 'var(--color-accent)' }}>●</span>}
                                    </div>
                                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Physical copy shipped to you</div>
                                </div>

                                {/* Digital Option */}
                                <div
                                    onClick={() => handleOptionChange('digital')}
                                    style={{
                                        flex: 1,
                                        padding: '20px',
                                        border: `2px solid ${selectedOption === 'digital' ? 'var(--color-accent)' : 'var(--color-border)'}`,
                                        borderRadius: 'var(--radius-md)',
                                        backgroundColor: selectedOption === 'digital' ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                        cursor: 'pointer',
                                        transition: 'var(--transition-fast)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '5px' }}>
                                        <strong>E-Book</strong>
                                        {selectedOption === 'digital' && <span style={{ color: 'var(--color-accent)' }}>●</span>}
                                    </div>
                                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Read instantly on MyPage</div>
                                </div>

                            </div>
                        </div>

                        {/* Conditional Shipping Form */}
                        {selectedOption === 'paper' && (
                            <div className="shipping-form" style={{
                                marginBottom: '30px',
                                padding: '20px',
                                backgroundColor: 'var(--color-surface)',
                                borderRadius: 'var(--radius-md)',
                                animation: 'fadeSlideIn 0.3s ease-out'
                            }}>
                                <h3 style={{ fontSize: '1.2rem', marginTop: 0 }}>Shipping Information</h3>

                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Receiver Name</label>
                                    <input type="text" placeholder="John Doe" style={inputStyle} required />
                                </div>

                                <div style={{ marginBottom: '15px' }}>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Address</label>
                                    <input type="text" placeholder="123 Street, City" style={inputStyle} required />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Phone</label>
                                    <input type="tel" placeholder="010-1234-5678" style={inputStyle} required />
                                </div>
                            </div>
                        )}

                        <button type="submit" style={{
                            width: '100%',
                            padding: '20px',
                            backgroundColor: 'var(--color-accent)',
                            color: 'white',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            borderRadius: 'var(--radius-md)',
                            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
                            transition: 'var(--transition-fast)'
                        }}>
                            Purchase Now
                        </button>
                    </form>

                    <div style={{ marginTop: '60px', borderTop: '1px solid var(--color-border)', paddingTop: '40px' }}>
                        <h3>Description</h3>
                        <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8' }}>
                            {MOCK_BOOK.description}
                        </p>
                        <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', marginTop: '20px' }}>
                            Detailed chapter breakdown and author information will go here. The layout is optimized for reading and clear information hierarchy.
                        </p>
                    </div>

                </div>
            </main>



            {/* Animation Styles */}
            <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}

const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid var(--color-border)',
    backgroundColor: 'var(--color-bg)',
    color: 'white',
    fontSize: '1rem'
};
