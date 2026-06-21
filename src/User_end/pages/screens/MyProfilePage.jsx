import React, { useState } from 'react';
import styles from '../styles/my_profile_page.module.css';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import ananyaImg from '../../../assets/User_end_assets/pro2.png';
import { useAuth } from '../../../context/AuthContext';

// ── Inline SVG icons (unchanged) ─────────────────────────────────────────────
const Icons = {
  Pencil: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  ),
  Share: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  Pin: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  SearchSmall: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Profile: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Dashboard: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Graduation: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10L12 5L2 10L12 15L22 10Z" /><path d="M6 12V17L12 20L18 17V12" />
    </svg>
  ),
  Moon: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  Save: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" />
    </svg>
  ),
  Close: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
};

// ── Edit Modal ────────────────────────────────────────────────────────────────
function EditProfileModal({ profile, onClose, onSave }) {
  const [fields, setFields] = useState({
    full_name:           profile?.full_name || '',
    age:                 profile?.age || '',
    height_cm:           profile?.height_cm || '',
    religion:            profile?.religion || '',
    mother_tongue:       profile?.mother_tongue || '',
    marital_status:      profile?.marital_status || '',
    father_occupation:   profile?.father_occupation || '',
    mother_occupation:   profile?.mother_occupation || '',
    siblings_count:      profile?.siblings_count || '',
    siblings_details:    profile?.siblings_details || '',
    family_values:       profile?.family_values || '',
    industry:            profile?.industry || '',
    education:           profile?.education || '',
    current_designation: profile?.current_designation || '',
    current_company:     profile?.current_company || '',
    annual_income_min:   profile?.annual_income_min || '',
    annual_income_max:   profile?.annual_income_max || '',
    income_unit:         profile?.income_unit || 'LPA',
    birth_place:         profile?.birth_place || '',
    zodiac_sign:         profile?.zodiac_sign || '',
    manglik_status:      profile?.manglik_status || '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const set = (k, v) => setFields(f => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSaving(true);
    // Strip empty strings so backend keeps existing values
    const payload = Object.fromEntries(
      Object.entries(fields).filter(([, v]) => v !== '')
    );
    const { error: err } = await onSave(payload);
    setSaving(false);
    if (err) { setError(err); return; }
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Edit Profile</h2>
          <button className={styles.modalClose} onClick={onClose}><Icons.Close /></button>
        </div>

        {error && <div className={styles.apiError}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.modalForm}>
          {[
            { label: 'Full Name',           key: 'full_name',           type: 'text' },
            { label: 'Age',                 key: 'age',                 type: 'number' },
            { label: 'Height (cm)',          key: 'height_cm',           type: 'number' },
            { label: 'Religion',            key: 'religion',            type: 'text' },
            { label: 'Mother Tongue',       key: 'mother_tongue',       type: 'text' },
            { label: 'Marital Status',      key: 'marital_status',      type: 'text' },
            { label: "Father's Occupation", key: 'father_occupation',   type: 'text' },
            { label: "Mother's Occupation", key: 'mother_occupation',   type: 'text' },
            { label: 'Siblings Count',      key: 'siblings_count',      type: 'number' },
            { label: 'Siblings Details',    key: 'siblings_details',    type: 'text' },
            { label: 'Family Values',       key: 'family_values',       type: 'text' },
            { label: 'Industry',            key: 'industry',            type: 'text' },
            { label: 'Education',           key: 'education',           type: 'text' },
            { label: 'Designation',         key: 'current_designation', type: 'text' },
            { label: 'Company',             key: 'current_company',     type: 'text' },
            { label: 'Income Min',          key: 'annual_income_min',   type: 'number' },
            { label: 'Income Max',          key: 'annual_income_max',   type: 'number' },
            { label: 'Income Unit',         key: 'income_unit',         type: 'text' },
            { label: 'Birth Place',         key: 'birth_place',         type: 'text' },
            { label: 'Zodiac Sign',         key: 'zodiac_sign',         type: 'text' },
            { label: 'Manglik Status',      key: 'manglik_status',      type: 'text' },
          ].map(({ label, key, type }) => (
            <div className={styles.modalField} key={key}>
              <label className={styles.modalLabel}>{label}</label>
              <input
                className={styles.modalInput}
                type={type}
                value={fields[key]}
                onChange={e => set(key, e.target.value)}
              />
            </div>
          ))}

          <div className={styles.modalActions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>Cancel</button>
            <button type="submit" className={styles.saveProfileBtn} disabled={saving}>
              <Icons.Save /> {saving ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Main MyProfilePage ────────────────────────────────────────────────────────
const MyProfilePage = () => {
  const { user, profile, updateProfile } = useAuth();
  const [editOpen, setEditOpen] = useState(false);

  const displayName = profile?.full_name || user?.email || 'Your Profile';
  const designation = profile?.current_designation || '';
  const birthDate   = profile?.date_of_birth
    ? new Date(profile.date_of_birth).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
    : '—';

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar activePage="profile" />

      <main className={styles.mainContent}>
        <TopBar
          searchPlaceholder="Search connections..."
          userName={displayName}
          avatarSrc={ananyaImg}
        />

        <div className={styles.profileBody}>
          {/* Profile Header Card */}
          <section className={styles.profileHeaderCard}>
            <div className={styles.bannerStrip}></div>
            <div className={styles.headerContent}>
              <div className={styles.profileInfoWrapper}>
                <div className={styles.photoContainer}>
                  <img src={ananyaImg} alt={displayName} className={styles.profilePhoto} />
                  <div className={styles.verifiedBadge}>✓</div>
                </div>
                <div>
                  <div className={styles.nameBadgeRow}>
                    <h1 className={styles.profileName}>{displayName}</h1>
                    <span className={styles.memberBadge}>Premium Member</span>
                  </div>
                  <div className={styles.metaLine}>
                    <Icons.Pin />
                    {profile?.birth_place || 'India'}
                    {designation ? ` • ${designation}` : ''}
                  </div>
                </div>
              </div>
              <div className={styles.headerActions}>
                <button className={styles.editBtn} onClick={() => setEditOpen(true)}>
                  <Icons.Pencil /> Edit Profile
                </button>
                <button className={styles.shareBtn}><Icons.Share /> Share</button>
              </div>
            </div>
          </section>

          {/* Tab Navigation */}
          <nav className={styles.tabBar}>
            <div className={`${styles.tab} ${styles.activeTab}`}>Overview</div>
            <div className={styles.tab}>Personal Details</div>
            <div className={styles.tab}>Family</div>
            <div className={styles.tab}>Education & Career</div>
            <div className={styles.tab}>Horoscope</div>
            <div className={styles.tab}>Partner Preferences</div>
            <div className={styles.tab}>Photo Gallery</div>
          </nav>

          {/* Info Grid */}
          <div className={styles.infoGrid}>
            {/* Personal Details Card */}
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}><Icons.SearchSmall /></div>
                <h2 className={styles.cardTitle}>Personal Details</h2>
              </div>
              <div className={styles.fieldGrid}>
                {[
                  { label: 'Full Name',      value: profile?.full_name     || '—' },
                  { label: 'Age',            value: profile?.age ? `${profile.age} Years` : '—' },
                  { label: 'Height',         value: profile?.height_cm ? `${profile.height_cm} cm` : '—' },
                  { label: 'Religion',       value: profile?.religion      || '—' },
                  { label: 'Mother Tongue',  value: profile?.mother_tongue || '—' },
                  { label: 'Marital Status', value: profile?.marital_status || '—' },
                ].map((f, i) => (
                  <div key={i} className={styles.field}>
                    <span className={styles.fieldLabel}>{f.label}</span>
                    <div className={styles.fieldValue}>{f.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Partner Card */}
            <div className={`${styles.infoCard} ${styles.darkCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle} style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                  <Icons.Star />
                </div>
                <h2 className={styles.cardTitle}>Ideal Partner</h2>
              </div>
              <div>
                {[
                  { label: 'Age Range',  value: '24 - 27 Years' },
                  { label: 'Height',     value: "5'4'' - 5'8''" },
                  { label: 'Religion',   value: profile?.religion ? `${profile.religion} (Any)` : 'Any' },
                  { label: 'Location',   value: 'India / Overseas' },
                ].map((p, i) => (
                  <div key={i} className={styles.prefRow}>
                    <span className={styles.prefLabel}>{p.label}</span>
                    <span className={styles.prefValue}>{p.value}</span>
                  </div>
                ))}
                <button className={styles.updatePrefBtn}>Update Preferences</button>
              </div>
            </div>

            {/* Family Information Card */}
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}><Icons.Users /></div>
                <h2 className={styles.cardTitle}>Family Information</h2>
              </div>
              <div className={styles.subBoxGrid}>
                <div className={styles.subBox}>
                  <span className={styles.subBoxLabel}>PARENTS</span>
                  <div className={styles.subField}>
                    <Icons.Briefcase />
                    <div className={styles.subFieldInfo}>
                      <span className={styles.subFieldLabel}>Father's Occupation</span>
                      <span className={styles.subFieldValue}>{profile?.father_occupation || '—'}</span>
                    </div>
                  </div>
                  <div className={styles.subField}>
                    <Icons.Profile />
                    <div className={styles.subFieldInfo}>
                      <span className={styles.subFieldLabel}>Mother's Occupation</span>
                      <span className={styles.subFieldValue}>{profile?.mother_occupation || '—'}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.subBox}>
                  <span className={styles.subBoxLabel}>BACKGROUND</span>
                  <div className={styles.subField}>
                    <Icons.Users />
                    <div className={styles.subFieldInfo}>
                      <span className={styles.subFieldLabel}>Siblings</span>
                      <span className={styles.subFieldValue}>
                        {profile?.siblings_count != null
                          ? `${profile.siblings_count}${profile.siblings_details ? ` — ${profile.siblings_details}` : ''}`
                          : '—'}
                      </span>
                    </div>
                  </div>
                  <div className={styles.subField}>
                    <Icons.Dashboard />
                    <div className={styles.subFieldInfo}>
                      <span className={styles.subFieldLabel}>Family Values</span>
                      <span className={styles.subFieldValue}>{profile?.family_values || '—'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Card */}
            <div className={`${styles.infoCard} ${styles.careerCard}`}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconCircle} ${styles.goldCircle}`}><Icons.Graduation /></div>
                <h2 className={styles.cardTitle}>Career</h2>
              </div>
              <div className={styles.careerItem}>
                <span className={styles.careerTitle}>{profile?.education || '—'}</span>
                <span className={styles.careerSubtitle}>{profile?.industry || ''}</span>
              </div>
              <div className={styles.careerItem}>
                <span className={styles.careerTitle}>{profile?.current_company || '—'}</span>
                <span className={styles.careerSubtitle}>{profile?.current_designation || ''}</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.incomeRow}>
                <span className={styles.subFieldLabel}>Annual Income</span>
                <span className={styles.incomeValue}>
                  {profile?.annual_income_min && profile?.annual_income_max
                    ? `${profile.annual_income_min} – ${profile.annual_income_max} ${profile.income_unit || 'LPA'}`
                    : '—'}
                </span>
              </div>
            </div>

            {/* Horoscope Card */}
            <div className={`${styles.infoCard} ${styles.fullWidth}`}>
              <div className={styles.cardHeaderFull}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className={styles.iconCircle}><Icons.Moon /></div>
                  <h2 className={styles.cardTitle}>Horoscope & Kundali</h2>
                </div>
                <div className={styles.badgeRow}>
                  {profile?.manglik_status && (
                    <span className={styles.pinkPill}>{profile.manglik_status}</span>
                  )}
                  {profile?.kundali_url && (
                    <a href={profile.kundali_url} target="_blank" rel="noreferrer" className={styles.outlinePill}>
                      View Full Kundali
                    </a>
                  )}
                </div>
              </div>
              <div className={styles.dataRow}>
                {[
                  { label: 'BIRTH DATE',  value: birthDate },
                  { label: 'BIRTH TIME',  value: profile?.time_of_birth  || '—' },
                  { label: 'BIRTH PLACE', value: profile?.birth_place    || '—' },
                  { label: 'ZODIAC SIGN', value: profile?.zodiac_sign    || '—' },
                ].map((d, i) => (
                  <div key={i} className={styles.dataItem}>
                    <span className={styles.fieldLabel}>{d.label}</span>
                    <span className={styles.subFieldValue} style={{ fontSize: '15px' }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className={styles.profileFooter}>
          <div className={styles.footerInner}>
            <div>
              <span className={styles.footerWordmark}>MilanSetu</span>
              <span className={styles.copyright}>© 2024 MilanSetu Matrimonials. All rights reserved.</span>
            </div>
            <div className={styles.footerLinks}>
              <a href="#profile" className={styles.footerLink}>Privacy Policy</a>
              <a href="#profile" className={styles.footerLink}>Terms of Service</a>
              <a href="#profile" className={styles.footerLink}>Safety Tips</a>
              <a href="#profile" className={styles.footerLink}>Contact Us</a>
            </div>
          </div>
        </footer>
      </main>

      {/* Edit Modal */}
      {editOpen && (
        <EditProfileModal
          profile={profile}
          onClose={() => setEditOpen(false)}
          onSave={updateProfile}
        />
      )}
    </div>
  );
};

export default MyProfilePage;
