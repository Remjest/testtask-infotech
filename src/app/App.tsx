import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { UsersPage } from '@/pages/UsersPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckLogin from './CheckLogin';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route element={<CheckLogin />}>
                    <Route path="/users" element={<UsersPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )

};

export default App;