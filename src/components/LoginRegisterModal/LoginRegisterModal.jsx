import Modal from './Modal';
import LoginRegisterTabs from './LoginRegisterTabs';
import './LoginRegisterTabs.css';
import './AuthForm.css';

export default function LoginRegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="login-modal-outer">
        <div className="tabs-wrapper">
          <LoginRegisterTabs onCloseModal={onClose} /> {/* 成功後就關閉 */}
        </div>
      </div>
    </Modal>
  );
}
