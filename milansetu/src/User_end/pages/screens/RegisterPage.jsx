import { useState } from 'react';
import styles from '../styles/register_page.module.css';
import loginCouple from '../../../assets/User_end_assets/login_couple.png';

export default function RegisterPage() {
  const [gender, setGender] = useState('female');
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    mobile: '',
    email: '',
    countryCode: '+91'
  });

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Registration Data:', { ...formData, gender });
    console.log('Registering...');
    window.location.hash = '#home';
  };

  return (
    <div className={styles.registerContainer}>
      {/* LEFT PANEL - Registration Form */}
      <div className={styles.leftPanel}>
        <div className={styles.personalDetailsHeader}>
          <h2>Personal Details</h2>
          <div className={styles.stepIndicator}>
            <div className={styles.stepCircle}>1</div>
            <span>Step 1 of 3: Basic Information</span>
          </div>
        </div>

        <form onSubmit={handleSave}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              className={styles.input}
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Gender</label>
            <div className={styles.genderToggle}>
              <button
                type="button"
                className={`${styles.genderBtn} ${gender === 'male' ? styles.genderBtnActive : ''}`}
                onClick={() => setGender('male')}
              >
                Male
              </button>
              <button
                type="button"
                className={`${styles.genderBtn} ${gender === 'female' ? styles.genderBtnActive : ''}`}
                onClick={() => setGender('female')}
              >
                Female
              </button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Date of Birth</label>
            <input
              type="date"
              className={styles.input}
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Mobile Number</label>
            <div className={styles.phoneInputWrapper}>
              <select
                className={`${styles.input} ${styles.countryCode}`}
                value={formData.countryCode}
                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                className={styles.input}
                placeholder="00000 00000"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>
            <input
              type="email"
              className={styles.input}
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <button type="submit" className={styles.saveBtn}>
            Save & Continue
          </button>
        </form>
      </div>

      {/* RIGHT PANEL - Showcase */}
      <div className={styles.rightPanel}>
        <h1 className={styles.showcaseHeading}>Begin Your Story of Eternal Elegance</h1>

        <div className={styles.phoneMockupContainer}>
          <div className={styles.mockupContent}>
            <img src={loginCouple} alt="App Preview" className={styles.mockupImg} />
          </div>
        </div>

        {/* Floating Feature Cards */}
        <div className={`${styles.floatingCard} ${styles.cardElite}`}>
          <div className={styles.cardIcon}>
            <i className="ti ti-diamond"></i>
          </div>
          <div className={styles.cardText}>
            <span className={styles.cardTag}>EXCLUSIVE</span>
            <span className={styles.cardLabel}>Elite Circle Access</span>
          </div>
        </div>

        <div className={`${styles.floatingCard} ${styles.cardVerified}`}>
          <div className={styles.cardIcon}>
            <i className="ti ti-shield-check"></i>
          </div>
          <div className={styles.cardText}>
            <span className={styles.cardTag}>VERIFIED</span>
            <span className={styles.cardLabel}>100% Genuine</span>
          </div>
        </div>
      </div>
    </div>
  );
}
