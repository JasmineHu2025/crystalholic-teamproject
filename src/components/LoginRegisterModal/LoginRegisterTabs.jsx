import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function LoginRegisterTabs({ onCloseModal }) {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button className={activeTab === 'register' ? 'active' : ''} onClick={() => setActiveTab('register')}>註冊</button>
        <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>登入</button>
      </div>
      <div className="form-area">
        {activeTab === 'login'
          ? <LoginForm onCloseModal={onCloseModal} />
          : <RegisterForm onCloseModal={onCloseModal} />}
      </div>
    </div>
  );
}
