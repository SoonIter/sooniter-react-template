import { Button } from '@douyinfe/semi-ui';
import React from 'react';
import { useUsersModel, userModel } from '../store/useUsers';
import { Users } from './Users';


const PageA = () => {
  return (
    <div>
     
      <Button
        onClick={useCallback(() => {
          userModel.addUser({
            id: Math.random(),
            name: 'User' + userModel.state.length,
            age: userModel.state.length,
          });
        }, [])}
      >
        添加一个成员
      </Button>
      <Users />
      <ul>
        {[13, 14, 15].map((n) => (
          <li key={n}>
            <nav>
              <Link to={`/detail/${new Date().getTime()}?q=${new Date().getTime() % n}`}>Detail-{n}</Link>
            </nav>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageA;
