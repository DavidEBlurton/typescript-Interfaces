import React from 'react';
import UserInfo from './components/UserInfo';
import Card from './components/Card';

const App: React.FC = () => {
  return (
    <div>
      <h1>TypeScript Interfaces and Children Props</h1>
      
      
      <Card>
        <UserInfo username="John Smith" age={38} email="johnsmith@example.com" />
      </Card>

      <Card>
        <h3>Another User</h3>
        <UserInfo username="Samantha Jones" age={24} email="samjones@example.com" />
      </Card>

      <Card>
        <h3>Blank Card Example</h3>
        <p>Just to show basic info</p>
        <button>Button</button>
      </Card>
    </div>
  );
};

export default App;

