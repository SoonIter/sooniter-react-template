import React from 'react';

const PageA = () => {
  return (
    <div>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <div className="c-amber">hello</div>
      </main>
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
