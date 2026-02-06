import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { UsersPage } from '@/pages/UsersPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )

};

export default App;