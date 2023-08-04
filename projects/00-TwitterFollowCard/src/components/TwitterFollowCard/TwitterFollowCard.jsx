import './TwitterFollowCard.css';

import propTypes from 'prop-types';
import { useState } from 'react';

export function TwitterFollowCard({
  children = 'AlanWP',
  isFollowing,
  username = 'aldanaalaan',
}) {
  const [following, setFollowing] = useState(isFollowing);
  const handleClick = () => {
    setFollowing(!following);
    // Servicio, supongo
  };

  const text = following ? 'Siguiendo' : 'Seguir';
  const buttonClassName = following
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='Avatar'
          src={`https://unavatar.io/${username}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUsername'>@{username}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}

TwitterFollowCard.propTypes = {
  username: propTypes.string,
  isFollowing: propTypes.bool,
  children: propTypes.node,
};
