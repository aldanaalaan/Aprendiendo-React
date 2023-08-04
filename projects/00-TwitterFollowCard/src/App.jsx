import './App.css';

import { TwitterFollowCard } from './components/TwitterFollowCard/TwitterFollowCard';

const users = [
  {
    name: 'AlanWP',
    userName: 'aldanaalaan',
    isFollowing: false,
  },
  {
    name: 'Miguel Angel Duran',
    userName: 'midudev',
    isFollowing: true,
  },
  {
    name: 'Toniki',
    userName: 'Toniki20',
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className='followCardSection'>
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            isFollowing={isFollowing}
            username={userName}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
