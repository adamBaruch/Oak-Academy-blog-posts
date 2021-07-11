import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/tommy8.png';
import profile2 from './image/tommy234.png';
import profile3 from './image/tom.png';
import SingleComment from './SingleComment';
import UserCard from './UserCard';

const App = () => {
  return (
    <div className='ui comments'>
      <UserCard>
      <SingleComment
        name='Alex'
        date='Today at 5:00PM'
        text='it is amazing!!'
        picture={profile1}
      />
      </UserCard>
      <SingleComment
        name='Josh'
        date='Today at 7:00PM'
        text='hi there'
        picture={profile2}
      />
      <SingleComment
        name='Adam'
        date='Today at 6:00PM'
        text='thanks'
        picture={profile3}
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)