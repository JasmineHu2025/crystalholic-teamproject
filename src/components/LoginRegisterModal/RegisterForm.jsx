import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';


export default function RegisterForm({ onCloseModal }) {
    const { login, setUser } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const name = formData.get('username') || '我愛礦礦';
        const avatar = "./images/S-NavBar/navicon_member.svg";

        login();
        setUser({ name, avatar });

        if (onCloseModal) onCloseModal();
        setIsSubmitting(false);
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <form className="auth-form" onSubmit={handleRegisterSubmit}>
            <div className="social-login-box">
                <div className="social-login">
                    <a href="#"><img src="./images/LoginRegister/btn-google.svg" alt="Google" /></a>
                    <a href="#"><img src="./images/LoginRegister/btn-line.svg" alt="LINE" /></a>
                </div>

                <div className="divider"><span>或</span></div>
            </div>

            <input
                type="text"
                name="username"
                placeholder="用戶名"
                required
                maxLength="6"
                pattern="[\u4e00-\u9fa5]{1,4}|[A-Za-z]{1,6}"
                title="中文最多 4 字，英文最多 6 字"
            />
            <input type="email" placeholder="Email" />
            <input
                type="password"
                name="password"
                placeholder="密碼"
                required
                minLength="8"
                title="密碼至少需 8 個字元"
            />
            <span className="hint">至少 8 個字元</span>

            <div className="gender">
                <select required defaultValue="">
                    <option value="" disabled hidden>性別</option>
                    <option value="female">女性</option>
                    <option value="male">男性</option>
                    <option value="others">其他</option>
                </select>
            </div>

            <div className="birthday">
                <select required defaultValue="">
                    <option value="" disabled hidden>出生 年</option>
                    {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                    ))}
                </select>

                <select required defaultValue="">
                    <option value="" disabled hidden>月</option>
                    {months.map((m) => (
                        <option key={m} value={m}>{m}</option>
                    ))}
                </select>

                <select required defaultValue="">
                    <option value="" disabled hidden>日</option>
                    {days.map((d) => (
                        <option key={d} value={d}>{d}</option>
                    ))}
                </select>
            </div>

            <div className="checkbox">
                <input type="checkbox" id="agree" required />
                <label htmlFor="agree">我同意網站服務條款及隱私權政策</label>
            </div>

            <div className="form-footer1">
                <button type="submit" className="submit-button">立即加入</button>
            </div>
        </form>
    );
}
