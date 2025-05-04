import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

function MainLayout({}: Props) {
  return (
    <div>
      {/* <Sidebar /> */}
      <div>
        {/* <Header /> */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
