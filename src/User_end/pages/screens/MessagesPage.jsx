import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/messages_page.module.css';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';

import proImg from '../../../assets/User_end_assets/pro.png';
import pro1Img from '../../../assets/User_end_assets/pro1.png';
import pro2Img from '../../../assets/User_end_assets/pro2.png';
import pro3Img from '../../../assets/User_end_assets/pro3.png';

const Icons = {
  Send: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  MoreVertical: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Video: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  Emoji: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  Attach: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  CheckCheck: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="17 1 21 5 7 19" /><path d="M1 12l4 4L15 5" />
    </svg>
  ),
};

const CONTACTS = [
  {
    id: 1,
    name: 'Ananya Gupta',
    role: 'Software Engineer',
    img: proImg,
    online: true,
    lastMessage: 'Thank you! Looking forward to connecting.',
    lastTime: '10:32 AM',
    unread: 2,
    match: '94%',
  },
  {
    id: 2,
    name: 'Riya Kapoor',
    role: 'Product Designer',
    img: pro2Img,
    online: true,
    lastMessage: 'Sure, let me know when you\'re free!',
    lastTime: 'Yesterday',
    unread: 0,
    match: '96%',
  },
  {
    id: 3,
    name: 'Priya Mehta',
    role: 'Surgeon',
    img: pro1Img,
    online: false,
    lastMessage: 'I\'d love to know more about your interests.',
    lastTime: 'Mon',
    unread: 0,
    match: '92%',
  },
  {
    id: 4,
    name: 'Kavita Iyer',
    role: 'Data Scientist',
    img: pro3Img,
    online: false,
    lastMessage: 'Hello! Our profiles seem highly compatible.',
    lastTime: 'Sun',
    unread: 0,
    match: '88%',
  },
];

const INITIAL_CHAT = {
  1: [
    { id: 1, sender: 'them', text: 'Hello! I saw your profile and found it very interesting.', time: '10:20 AM', read: true },
    { id: 2, sender: 'me', text: 'Hi Ananya! Thank you, your profile is impressive too. Are you based in Delhi?', time: '10:22 AM', read: true },
    { id: 3, sender: 'them', text: 'Yes, I\'m in Delhi currently. I work at Google here. What about you?', time: '10:25 AM', read: true },
    { id: 4, sender: 'me', text: 'I\'m a Software Architect here in Delhi too! What a coincidence.', time: '10:27 AM', read: true },
    { id: 5, sender: 'them', text: 'Thank you! Looking forward to connecting.', time: '10:32 AM', read: false },
  ],
  2: [
    { id: 1, sender: 'me', text: 'Hi Riya, I noticed we share a passion for design. Would love to chat!', time: '9:00 AM', read: true },
    { id: 2, sender: 'them', text: 'Sure, let me know when you\'re free!', time: 'Yesterday', read: true },
  ],
  3: [
    { id: 1, sender: 'them', text: 'I\'d love to know more about your interests.', time: 'Mon', read: true },
  ],
  4: [
    { id: 1, sender: 'them', text: 'Hello! Our profiles seem highly compatible.', time: 'Sun', read: true },
  ],
};

const MessagesPage = () => {
  const [selectedContact, setSelectedContact] = useState(CONTACTS[0]);
  const [chats, setChats] = useState(INITIAL_CHAT);
  const [input, setInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);

  const currentMessages = chats[selectedContact.id] || [];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentMessages]);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setChats((prev) => ({
      ...prev,
      [selectedContact.id]: [
        ...(prev[selectedContact.id] || []),
        { id: Date.now(), sender: 'me', text: trimmed, time, read: false },
      ],
    }));
    setInput('');
  };

  const filteredContacts = CONTACTS.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Sidebar activePage="messages" />

      <main className={styles.mainContent}>
        <TopBar searchPlaceholder="Search connections..." />

        <div className={styles.messagesLayout}>
          {/* Left: Conversations List */}
          <aside className={styles.contactsPanel}>
            <div className={styles.contactsHeader}>
              <h2 className={styles.contactsTitle}>Messages</h2>
              <span className={styles.contactsCount}>{CONTACTS.reduce((a, c) => a + c.unread, 0)} new</span>
            </div>

            <div className={styles.searchBar}>
              <Icons.Search />
              <input
                type="text"
                placeholder="Search conversations..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className={styles.contactList}>
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`${styles.contactItem} ${selectedContact.id === contact.id ? styles.contactActive : ''}`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className={styles.avatarWrapper}>
                    <img src={contact.img} alt={contact.name} className={styles.contactAvatar} />
                    {contact.online && <span className={styles.onlineDot}></span>}
                  </div>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactTopRow}>
                      <span className={styles.contactName}>{contact.name}</span>
                      <span className={styles.contactTime}>{contact.lastTime}</span>
                    </div>
                    <div className={styles.contactBottomRow}>
                      <span className={styles.lastMessage}>{contact.lastMessage}</span>
                      {contact.unread > 0 && (
                        <span className={styles.unreadBadge}>{contact.unread}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Right: Chat Window */}
          <section className={styles.chatPanel}>
            {/* Chat Header */}
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderLeft}>
                <div className={styles.chatAvatarWrapper}>
                  <img src={selectedContact.img} alt={selectedContact.name} className={styles.chatAvatar} />
                  {selectedContact.online && <span className={styles.chatOnlineDot}></span>}
                </div>
                <div className={styles.chatHeaderInfo}>
                  <div className={styles.chatContactName}>{selectedContact.name}</div>
                  <div className={styles.chatContactSub}>
                    {selectedContact.online ? (
                      <span className={styles.onlineLabel}>Online now</span>
                    ) : (
                      <span className={styles.offlineLabel}>{selectedContact.role}</span>
                    )}
                    <span className={styles.matchBadge}>✦ {selectedContact.match} Match</span>
                  </div>
                </div>
              </div>
              <div className={styles.chatHeaderActions}>
                <button className={styles.headerActionBtn} title="Voice call"><Icons.Phone /></button>
                <button className={styles.headerActionBtn} title="Video call"><Icons.Video /></button>
                <button className={styles.headerActionBtn}><Icons.MoreVertical /></button>
              </div>
            </div>

            {/* Messages Area */}
            <div className={styles.messagesArea}>
              <div className={styles.dateDivider}>Today</div>

              {currentMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.messageRow} ${msg.sender === 'me' ? styles.messageRowMe : styles.messageRowThem}`}
                >
                  {msg.sender === 'them' && (
                    <img src={selectedContact.img} alt="" className={styles.msgAvatar} />
                  )}
                  <div className={`${styles.bubble} ${msg.sender === 'me' ? styles.bubbleMe : styles.bubbleThem}`}>
                    <p className={styles.bubbleText}>{msg.text}</p>
                    <div className={styles.bubbleMeta}>
                      <span className={styles.msgTime}>{msg.time}</span>
                      {msg.sender === 'me' && (
                        <span className={msg.read ? styles.readIcon : styles.sentIcon}>
                          {msg.read ? <Icons.CheckCheck /> : <Icons.Check />}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form className={styles.inputArea} onSubmit={handleSend}>
              <button type="button" className={styles.inputActionBtn} title="Emoji"><Icons.Emoji /></button>
              <button type="button" className={styles.inputActionBtn} title="Attach file"><Icons.Attach /></button>
              <input
                type="text"
                className={styles.messageInput}
                placeholder={`Message ${selectedContact.name}...`}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className={`${styles.sendBtn} ${input.trim() ? styles.sendBtnActive : ''}`}
                disabled={!input.trim()}
              >
                <Icons.Send />
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default MessagesPage;
