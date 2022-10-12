import Profile from './Profile/Profile';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';

import FriendList from './FriendList/FriendList.jsx';
import friends from "./FriendList/friends.json";

import TransactionHistory from './TransactionHistory/TransactionHistory'
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#D3D3D3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
        
      <FriendList 
        friends={friends} 
      />

      <TransactionHistory 
        items={transactions} 
      />

    </div>
  );
};





