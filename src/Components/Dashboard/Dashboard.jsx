import React from 'react';
import './Dashboard.css';
import { BsBell, BsMoon, BsSearch, BsTicket, BsPeople, BsBox, BsEye, BsHouseDoor, BsBox2, BsPerson, BsHeadphones, BsChat, BsGear, BsBoxArrowRight } from 'react-icons/bs';

const Dashboard = () => {
  const stats = [
    { title: 'تعداد تیکت ها', value: '35,000', icon: <BsTicket />, unit: 'تیکت' },
    { title: 'تعداد نظرات', value: '70,000', icon: <BsEye />, unit: 'نظر' },
    { title: 'تعداد کاربران', value: '55,000', icon: <BsPeople />, unit: 'کاربر' },
    { title: 'تعداد محصولات', value: '25,000', icon: <BsBox />, unit: 'محصول' },
  ];

  const menuItems = [
    { title: 'پیشخوان', icon: <BsHouseDoor /> },
    { title: 'محصولات', icon: <BsBox2 /> },
    { title: 'افزودن محصول', icon: <BsBox /> },
    { title: 'کاربران', icon: <BsPeople /> },
    { title: 'افزودن کاربر', icon: <BsPerson /> },
    { title: 'سفارشات', icon: <BsBox /> },
    { title: 'تیکت ها', icon: <BsHeadphones /> },
    { title: 'دیدگاه ها', icon: <BsChat /> },
    { title: 'تنظیمات', icon: <BsGear /> },
  ];

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="profile-section">
          <h1 className="panel-title">Rose Panel</h1>
          <div className="admin-profile">
            <img src="/path-to-admin-image.jpg" alt="Admin" />
            <div className="admin-info">
              <p>مدیر سایت خوش آمدید</p>
              <span>Admin</span>
            </div>
          </div>
        </div>
        
        <nav className="menu-items">
          {menuItems.map((item, index) => (
            <button key={index} className="menu-item">
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}
        </nav>

        <button className="logout-button">
          <BsBoxArrowRight />
          <span>خروج از حساب</span>
        </button>
      </aside>

      <main className="main-content">
        <header className="dashboard-header">
          <div className="header-icons">
            <BsSearch className="icon" />
            <BsBell className="icon" />
            <BsMoon className="icon" />
          </div>
        </header>

        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <h3>{stat.title}</h3>
                <p>{stat.value} {stat.unit}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="chart-section">
          <div className="chart-header">
            <h3>فروش این ماه (1402)</h3>
            <button className="view-all">نمودار کامل</button>
          </div>
          <div className="chart">
            {/* Chart component will go here */}
          </div>
        </div>

        <div className="highlights-section">
          <div className="highlight-card">
            <h3>پربازدیدترین مقاله</h3>
            <div className="highlight-content">
              <img src="/path-to-tennis-image.jpg" alt="Tennis" />
              <div>
                <h4>تنیس حرفه ای</h4>
                <p>320 بازدید در روز</p>
              </div>
            </div>
          </div>

          <div className="highlight-card">
            <h3>محبوب ترین محصول</h3>
            <div className="highlight-content">
              <img src="/path-to-barcelona-kit.jpg" alt="Barcelona Kit" />
              <div>
                <h4>کیت اول بارسلونا</h4>
                <p>332,000 تومان</p>
              </div>
            </div>
          </div>

          <div className="highlight-card">
            <h3>فعال ترین کاربر سایت</h3>
            <div className="highlight-content">
              <img src="/path-to-user-image.jpg" alt="Active User" />
              <div>
                <h4>ستاره رضایی</h4>
                <p>20 ساعت در هفته</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard; 