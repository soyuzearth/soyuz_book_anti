import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import BookDetailPage from './pages/BookDetailPage';
import LibraryPage from './pages/LibraryPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/book/1" replace />
      },
      {
        path: 'book/:id',
        element: <BookDetailPage />
      },
      {
        path: 'library',
        element: <LibraryPage />
      },
      {
        path: 'checkout',
        element: <CheckoutPage />
      },
      {
        path: 'success',
        element: <SuccessPage />
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
