import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="stat-card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="hero bg-[#EBEAFF]">
      <div className="hero-background">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-title-container">
          <div className="hero-branding">
            <span className="hero-symbol">{"{"}</span>
            <h1 className="hero-title text-black">PEARL LABS</h1>
          </div>
          <h2 className="hero-subtitle text-black">
            Is a Premier Research<br />
            Infrastructure Provider
          </h2>
        </div>
        
        <p className="hero-description text-black">
          Cryptography fuels the next Internet. Our team is renowned for powering 
          the backbone of blockchain ecosystems with our state-of-the-art 
          validation services, AI integration, and cryptographic solutions.
        </p>
        
        <button className="cta-button">GET IN TOUCH</button>
      </div>
    </section>
  );
};

export default HeroSection;

