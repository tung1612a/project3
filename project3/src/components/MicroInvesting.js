import React, { useState } from 'react';
import { PiggyBank, Zap, Info, CheckCircle, AlertCircle } from 'lucide-react';
import './Fintech.css';

function MicroInvesting() {
  const [roundUpEnabled, setRoundUpEnabled] = useState(true);
  const [hourlyInvestEnabled, setHourlyInvestEnabled] = useState(false);

  const recentRounds = [
    { merchant: 'Starbucks', original: 19000, rounded: 20000, invested: 1000, date: 'Hôm nay 14:30' },
    { merchant: 'Grab', original: 25000, rounded: 30000, invested: 5000, date: 'Hôm nay 12:15' },
    { merchant: 'McDonald\'s', original: 45000, rounded: 50000, invested: 5000, date: 'Hôm qua 19:45' },
    { merchant: 'VinMart', original: 87000, rounded: 90000, invested: 3000, date: 'Hôm qua 16:20' }
  ];

  const glossaryTerms = [
    {
      term: 'Quỹ chỉ số',
      definition: 'Giống như một giỏ cổ phiếu được chọn lọc theo tiêu chí cụ thể (như VN30). Khi bạn đầu tư vào quỹ này, bạn sở hữu một phần nhỏ của tất cả các cổ phiếu trong giỏ đó.',
      simple: 'Hiểu đơn giản: Thay vì mua 1 cổ phiếu, bạn mua cả "giỏ" cổ phiếu chất lượng.'
    },
    {
      term: 'Làm tròn số tiền',
      definition: 'Khi bạn chi tiêu, ứng dụng sẽ tự động làm tròn số tiền lên mức gần nhất (ví dụ: 19.000đ → 20.000đ) và đầu tư phần chênh lệch.',
      simple: 'Ví dụ: Mua cà phê 19k → App làm tròn thành 20k, đầu tư 1k dư vào quỹ.'
    },
    {
      term: 'Rủi ro đầu tư',
      definition: 'Khả năng mất mát vốn khi đầu tư. Với quỹ chỉ số, rủi ro thấp hơn so với đầu tư cổ phiếu đơn lẻ vì được phân tán.',
      simple: 'Đầu tư luôn có rủi ro, nhưng chúng tôi chọn phương thức an toàn nhất cho bạn.'
    },
    {
      term: 'Lợi nhuận kép',
      definition: 'Khi bạn nhận lãi từ khoản đầu tư, lãi đó lại được tái đầu tư để sinh ra lãi mới. Qua thời gian, số tiền tăng nhanh hơn.',
      simple: 'Tiền sinh ra tiền! 1k hôm nay → 1.1k tháng sau → 1.21k tháng tiếp theo.'
    }
  ];

  return (
    <div className="micro-investing-container">
      {/* Micro-Investing Controls */}
      <div className="investing-controls">
        <h2>Micro-Investing Settings</h2>

        <div className="control-card">
          <div className="control-header">
            <PiggyBank className="control-icon" />
            <div className="control-info">
              <h3>Làm tròn số tiền</h3>
              <p>Tự động đầu tư phần tiền dư khi chi tiêu</p>
            </div>
          </div>
          <div className="control-toggle">
            <span>{roundUpEnabled ? 'Đã bật' : 'Tắt'}</span>
            <button
              className={`toggle ${roundUpEnabled ? 'active' : ''}`}
              onClick={() => setRoundUpEnabled(!roundUpEnabled)}
            >
              <div className="toggle-slider"></div>
            </button>
          </div>
        </div>

        <div className="control-card">
          <div className="control-header">
            <Zap className="control-icon" />
            <div className="control-info">
              <h3>Đầu tư theo giờ</h3>
              <p>Đầu tư số dư ví điện tử mỗi giờ</p>
            </div>
          </div>
          <div className="control-toggle">
            <span>{hourlyInvestEnabled ? 'Đã bật' : 'Tắt'}</span>
            <button
              className={`toggle ${hourlyInvestEnabled ? 'active' : ''}`}
              onClick={() => setHourlyInvestEnabled(!hourlyInvestEnabled)}
            >
              <div className="toggle-slider"></div>
            </button>
          </div>
        </div>

        <div className="investing-stats">
          <div className="stat">
            <h4>Tháng này</h4>
            <p className="stat-value">₫25,000</p>
            <p className="stat-label">Đã đầu tư</p>
          </div>
          <div className="stat">
            <h4>Lợi nhuận</h4>
            <p className="stat-value positive">+₫2,300</p>
            <p className="stat-label">Từ micro-invest</p>
          </div>
          <div className="stat">
            <h4>Tiết kiệm</h4>
            <p className="stat-value">₫180,000</p>
            <p className="stat-label">Tổng cộng</p>
          </div>
        </div>
      </div>

      {/* Recent Rounds */}
      <div className="recent-rounds">
        <h3>Làm tròn gần đây</h3>
        <div className="rounds-list">
          {recentRounds.map((round, index) => (
            <div key={index} className="round-item">
              <div className="round-merchant">
                <span className="merchant-name">{round.merchant}</span>
                <span className="round-date">{round.date}</span>
              </div>
              <div className="round-amounts">
                <span className="original">₫{round.original.toLocaleString()}</span>
                <span className="arrow">→</span>
                <span className="rounded">₫{round.rounded.toLocaleString()}</span>
              </div>
              <div className="round-invested">
                <CheckCircle className="invested-icon" />
                <span>+₫{round.invested.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Glossary */}
      <div className="financial-glossary">
        <h3>Hiểu về đầu tư</h3>
        <p className="glossary-intro">
          Chúng tôi đơn giản hóa các thuật ngữ tài chính để bạn dễ hiểu hơn
        </p>

        <div className="glossary-grid">
          {glossaryTerms.map((term, index) => (
            <div key={index} className="glossary-card">
              <div className="glossary-header">
                <h4>{term.term}</h4>
                <Info className="info-icon" />
              </div>
              <p className="glossary-definition">{term.definition}</p>
              <div className="glossary-simple">
                <AlertCircle className="simple-icon" />
                <p><strong>Giải thích đơn giản:</strong> {term.simple}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Notice */}
      <div className="risk-notice">
        <AlertCircle className="risk-icon" />
        <div className="risk-content">
          <h4>Lưu ý về rủi ro</h4>
          <p>
            Đầu tư luôn có rủi ro mất mát vốn. Giá trị đầu tư có thể tăng hoặc giảm.
            Hãy đầu tư số tiền bạn có thể chấp nhận mất. Chúng tôi khuyến nghị đầu tư dài hạn (từ 5 năm trở lên)
            để giảm thiểu rủi ro và tối đa hóa lợi nhuận.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MicroInvesting;