import React, { useState } from 'react';
import { ArrowRight, Shield, TrendingUp, PiggyBank, CheckCircle } from 'lucide-react';
import './Fintech.css';

function Onboarding({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Chào mừng đến với InvestGenZ",
      subtitle: "Ứng dụng đầu tư thông minh cho thế hệ Z",
      content: (
        <div className="welcome-content">
          <div className="feature-grid">
            <div className="feature-item">
              <PiggyBank className="feature-icon" />
              <h3>Lẻ hóa tiết kiệm</h3>
              <p>Mỗi lần chi tiêu, chúng tôi làm tròn số tiền và đầu tư phần dư</p>
            </div>
            <div className="feature-item">
              <TrendingUp className="feature-icon" />
              <h3>Tăng trưởng tự động</h3>
              <p>Đầu tư vào quỹ chỉ số với rủi ro thấp, lợi nhuận ổn định</p>
            </div>
            <div className="feature-item">
              <Shield className="feature-icon" />
              <h3>An toàn & Bảo mật</h3>
              <p>Công nghệ mã hóa ngân hàng, bảo vệ 100% thông tin cá nhân</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Thiết lập mục tiêu tài chính",
      subtitle: "Bạn muốn đạt được điều gì?",
      content: (
        <div className="goals-setup">
          <div className="goal-options">
            <button className="goal-card">
              <div className="goal-icon">🏠</div>
              <h4>Mua nhà</h4>
              <p>Tiết kiệm cho căn nhà mơ ước</p>
            </button>
            <button className="goal-card">
              <div className="goal-icon">🎓</div>
              <h4>Học phí</h4>
              <p>Chuẩn bị cho tương lai học vấn</p>
            </button>
            <button className="goal-card">
              <div className="goal-icon">🚗</div>
              <h4>Mua xe</h4>
              <p>Thực hiện giấc mơ bốn bánh</p>
            </button>
            <button className="goal-card">
              <div className="goal-icon">💰</div>
              <h4>Tích lũy tài sản</h4>
              <p>Xây dựng khối tài sản cá nhân</p>
            </button>
            <button className="goal-card">
              <div className="goal-icon">✈️</div>
              <h4>Du lịch</h4>
              <p>Khám phá thế giới</p>
            </button>
            <button className="goal-card selected">
              <div className="goal-icon">🎯</div>
              <h4>Tự do tài chính</h4>
              <p>Đạt được sự tự do về tiền bạc</p>
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Kết nối tài khoản ngân hàng",
      subtitle: "Chúng tôi chỉ đọc thông tin, không rút tiền",
      content: (
        <div className="bank-connect">
          <div className="security-notice">
            <Shield className="security-icon" />
            <div className="security-text">
              <h4>Cam kết bảo mật</h4>
              <ul>
                <li>✅ Mã hóa dữ liệu theo chuẩn ngân hàng</li>
                <li>✅ Không lưu trữ thông tin thẻ tín dụng</li>
                <li>✅ Chỉ đọc số dư và giao dịch</li>
                <li>✅ Tuân thủ quy định GDPR & PDPA</li>
              </ul>
            </div>
          </div>

          <div className="bank-options">
            <button className="bank-card">
              <div className="bank-logo">🏦</div>
              <div className="bank-info">
                <h4>Ngân hàng TMCP Ngoại thương Việt Nam</h4>
                <p>VCB • **** 1234</p>
              </div>
              <CheckCircle className="check-icon" />
            </button>
            <button className="bank-card">
              <div className="bank-logo">🏦</div>
              <div className="bank-info">
                <h4>Ngân hàng TMCP Công thương Việt Nam</h4>
                <p>ICB • **** 5678</p>
              </div>
            </button>
            <button className="bank-card add-new">
              <div className="add-icon">+</div>
              <span>Thêm tài khoản mới</span>
            </button>
          </div>
        </div>
      )
    },
    {
      title: "Thiết lập Micro-Investing",
      subtitle: "Chọn cách thức lẻ hóa tiết kiệm",
      content: (
        <div className="micro-invest-setup">
          <div className="invest-options">
            <div className="option-card">
              <h4>Làm tròn số tiền</h4>
              <p>Chi 19.000đ → Làm tròn thành 20.000đ, đầu tư 1.000đ</p>
              <div className="option-toggle">
                <span>Đã bật</span>
                <div className="toggle active"></div>
              </div>
            </div>
            <div className="option-card">
              <h4>Làm tròn theo giờ</h4>
              <p>Mỗi giờ, đầu tư số tiền dư trong ví điện tử</p>
              <div className="option-toggle">
                <span>Tắt</span>
                <div className="toggle"></div>
              </div>
            </div>
            <div className="option-card">
              <h4>Đầu tư thủ công</h4>
              <p>Tự chọn số tiền và thời điểm đầu tư</p>
              <div className="option-toggle">
                <span>Tắt</span>
                <div className="toggle"></div>
              </div>
            </div>
          </div>

          <div className="invest-summary">
            <h4>Tóm tắt thiết lập</h4>
            <div className="summary-item">
              <span>Ngân hàng kết nối:</span>
              <strong>VCB **** 1234</strong>
            </div>
            <div className="summary-item">
              <span>Phương thức:</span>
              <strong>Làm tròn số tiền</strong>
            </div>
            <div className="summary-item">
              <span>Dự kiến đầu tư/tháng:</span>
              <strong>~50.000đ</strong>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-progress">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`progress-step ${index <= currentStep ? 'completed' : ''} ${index === currentStep ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="onboarding-content">
        <div className="step-header">
          <h1>{steps[currentStep].title}</h1>
          <p>{steps[currentStep].subtitle}</p>
        </div>

        <div className="step-content">
          {steps[currentStep].content}
        </div>

        <div className="step-navigation">
          {currentStep > 0 && (
            <button className="nav-btn secondary" onClick={prevStep}>
              Quay lại
            </button>
          )}
          <button className="nav-btn primary" onClick={nextStep}>
            {currentStep === steps.length - 1 ? 'Hoàn thành' : 'Tiếp tục'}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;