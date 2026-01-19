import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MOCK_BOOK_DATA = {
    1: {
        id: 1,
        title: "Start Your Digital Journey",
        coverImage: "https://placehold.co/400x600/1a1d24/fff?text=Book+Cover",
        author: "SOYUZ Team" // Added author
    }
};

export default function LibraryPage() {
    const [purchasedBooks, setPurchasedBooks] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('soyuz_purchased_books') || '[]');
        const books = stored.map(id => MOCK_BOOK_DATA[id]).filter(Boolean);
        setPurchasedBooks(books);
    }, []);

    return (
        <div className="container" style={{ padding: '60px 20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h1 style={{ margin: 0 }}>My Library</h1>
                <span style={{ color: 'var(--color-text-secondary)' }}>{purchasedBooks.length} Items</span>
            </div>

            {purchasedBooks.length === 0 ? (
                <div className="empty-state">
                    <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Your library is empty.</p>
                    <p style={{ marginBottom: '30px', color: 'var(--color-text-secondary)' }}>Start your digital journey by purchasing a book.</p>
                    <Link to="/" className="btn-primary">
                        Browse Store &rarr;
                    </Link>
                </div>
            ) : (
                <div className="library-grid">
                    {purchasedBooks.map(book => (
                        <div key={book.id} className="book-card">
                            <div className="card-image-wrapper">
                                <img src={book.coverImage} alt={book.title} />
                                <div className="card-overlay">
                                    <button className="read-btn">Read Now</button>
                                </div>
                            </div>
                            <div className="card-info">
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style>{`
                .empty-state {
                    text-align: center;
                    padding: 80px 0;
                    border: 1px dashed var(--color-border);
                    border-radius: var(--radius-lg);
                    animation: fadeIn 0.5s ease;
                }
                .btn-primary {
                    color: var(--color-accent);
                    text-decoration: none;
                    font-weight: 600;
                    padding: 10px 20px;
                    border: 1px solid var(--color-accent);
                    border-radius: var(--radius-md);
                    transition: all 0.2s;
                }
                .btn-primary:hover {
                    background-color: var(--color-accent);
                    color: white;
                }

                .library-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                    gap: 40px;
                    animation: fadeIn 0.5s ease;
                }

                .book-card {
                    group: 1;
                    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .book-card:hover {
                    transform: translateY(-8px);
                }

                .card-image-wrapper {
                    position: relative;
                    border-radius: var(--radius-md);
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    margin-bottom: 20px;
                    aspect-ratio: 2 / 3;
                }
                .card-image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .book-card:hover .card-image-wrapper img {
                    transform: scale(1.05);
                }

                .card-overlay {
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .book-card:hover .card-overlay {
                    opacity: 1;
                }

                .read-btn {
                    padding: 12px 24px;
                    background-color: white;
                    color: black;
                    border-radius: 30px;
                    font-weight: 700;
                    transform: translateY(20px);
                    transition: transform 0.3s ease;
                }
                .book-card:hover .read-btn {
                    transform: translateY(0);
                }

                .card-info h3 {
                    font-size: 1.1rem;
                    margin: 0 0 5px 0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .card-info p {
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                    margin: 0;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
