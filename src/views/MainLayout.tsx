import React from 'react';

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/list">List</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MainLayout;
