import React, { useState } from 'react';
import { TrendingUp, TrendingDown, PiggyBank, Target, Shield, Eye, EyeOff, Plus, Settings, Bell } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Fintech.css';

function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);

  // Mock data
  const portfolioData = [
    { month: 'Jan', value: 12500 },
    { month: 'Feb', value: 13200 },
    { month: 'Mar', value: 14100 },
    { month: 'Apr', value: 13800 },
    { month: 'May', value: 15200 },
    { month: 'Jun', value: 16800 }
  ];

  const allocationData = [
    { name: 'Quỹ chỉ số VN', value: 60, color: '#3b82f6' },
    { name: 'Trái phiếu', value: 25, color: '#10b981' },
    { name: 'Tiền gửi', value: 15, color: '#f59e0b' }
  ];

  const recentTransactions = [
    { id: 1, type: 'Micro-invest', amount: 1000, description: 'Làm tròn giao dịch Starbucks', date: 'Hôm nay', status: 'success' },
    { id: 2, type: 'Micro-invest', amount: 2000, description: 'Làm tròn giao dịch Grab', date: 'Hôm qua', status: 'success' },
    { id: 3, type: 'Dividend', amount: 1500, description: 'Cổ tức quỹ VN30', date: '3 ngày trước', status: 'success' },
    { id: 4, type: 'Micro-invest', amount: 500, description: 'Làm tròn giao dịch McDonald\'s', date: '5 ngày trước', status: 'success' }
  ];

  const goals = [
    { id: 1, name: 'iPhone 15 Pro', target: 30000000, current: 8500000, deadline: '6 tháng', color: '#3b82f6' },
    { id: 2, name: 'Du lịch Nhật Bản', target: 50000000, current: 12000000, deadline: '1 năm', color: '#10b981' },
    { id: 3, name: 'Máy tính mới', target: 25000000, current: 18000000, deadline: '3 tháng', color: '#f59e0b' }
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Xin chào, Nguyễn Văn A!</h1>
          <p>Hôm nay là ngày tuyệt vời để đầu tư</p>
        </div>
        <div className="header-right">
          <button className="header-btn">
            <Bell size={20} />
          </button>
          <button className="header-btn">
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Balance Card */}
      <div className="balance-card">
        <div className="balance-header">
          <h2>Tổng giá trị danh mục</h2>
          <button
            className="balance-toggle"
            onClick={() => setShowBalance(!showBalance)}
          >
            {showBalance ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        <div className="balance-amount">
          {showBalance ? (
            <>
              <span className="currency">₫</span>
              <span className="amount">16,800,000</span>
            </>
          ) : (
            <span className="amount-hidden">••••••••</span>
          )}
        </div>
        <div className="balance-change">
          <TrendingUp className="change-icon positive" />
          <span className="change-amount">+₫1,600,000 (+10.5%)</span>
          <span className="change-period">tháng này</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <PiggyBank />
          </div>
          <div className="stat-content">
            <h3>Đã đầu tư</h3>
            <p className="stat-value">₫12,500,000</p>
            <p className="stat-label">Tổng số tiền đã đầu tư</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp />
          </div>
          <div className="stat-content">
            <h3>Lợi nhuận</h3>
            <p className="stat-value positive">₫4,300,000</p>
            <p className="stat-label">Lợi nhuận thuần</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Target />
          </div>
          <div className="stat-content">
            <h3>Mục tiêu</h3>
            <p className="stat-value">75%</p>
            <p className="stat-label">Đã hoàn thành</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Shield />
          </div>
          <div className="stat-content">
            <h3>Bảo mật</h3>
            <p className="stat-value">A+</p>
            <p className="stat-label">Đánh giá bảo mật</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card">
          <h3>Giá trị danh mục theo thời gian</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₫${value.toLocaleString()}`, 'Giá trị']} />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Phân bổ đầu tư</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={allocationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Goals Section */}
      <div className="goals-section">
        <div className="section-header">
          <h3>Mục tiêu tài chính</h3>
          <button className="add-goal-btn">
            <Plus size={16} />
            Thêm mục tiêu
          </button>
        </div>
        <div className="goals-grid">
          {goals.map(goal => (
            <div key={goal.id} className="goal-card">
              <div className="goal-header">
                <h4>{goal.name}</h4>
                <span className="goal-deadline">{goal.deadline}</span>
              </div>
              <div className="goal-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${(goal.current / goal.target) * 100}%`,
                      backgroundColor: goal.color
                    }}
                  ></div>
                </div>
                <div className="progress-text">
                  <span>₫{goal.current.toLocaleString()}</span>
                  <span>₫{goal.target.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="transactions-section">
        <h3>Giao dịch gần đây</h3>
        <div className="transactions-list">
          {recentTransactions.map(transaction => (
            <div key={transaction.id} className="transaction-item">
              <div className="transaction-icon">
                {transaction.type === 'Micro-invest' ? <PiggyBank size={20} /> : <TrendingUp size={20} />}
              </div>
              <div className="transaction-content">
                <h4>{transaction.description}</h4>
                <p>{transaction.date}</p>
              </div>
              <div className="transaction-amount">
                <span className={transaction.type === 'Dividend' ? 'positive' : ''}>
                  +₫{transaction.amount.toLocaleString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Notice */}
      <div className="security-notice">
        <Shield className="security-icon" />
        <div className="security-content">
          <h4>Bảo mật là ưu tiên hàng đầu</h4>
          <p>Tất cả giao dịch được mã hóa và giám sát 24/7. Chúng tôi tuân thủ các tiêu chuẩn bảo mật ngân hàng quốc tế.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;