import { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets.js';
import { Context } from '../../context/Content';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className='sidebar'>
      <div className='top'>
        <img
          onClick={() => setExtended((prev) => !prev)}
          className='menu'
          src={assets.menu_icon}
          alt='Menu'
        />
        <div onClick={newChat} className='new-chat'>
          <img src={assets.plus_icon} alt='New Chat' />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended && (
          <div className='recent'>
            <p className='recent-title'>Recent</p>
            {prevPrompts.map((item, index) => (
              <div
                key={index}
                onClick={() => loadPrompt(item)}
                className='recent-entry'
              >
                <img src={assets.message_icon} alt='Message' />
                <p>{item.slice(0, 18)} ...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='bottom'>
        <div className='bottom-item recent-entry'>
          <img src={assets.question_icon} alt='Help' />
          {extended ? <p>Help</p> : null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.history_icon} alt='Activity' />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className='bottom-item recent-entry'>
          <img src={assets.setting_icon} alt='Settings' />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
