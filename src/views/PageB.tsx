import React from 'react';
import { Users } from './Users';

const PageB = () => {
  const location = useLocation();
  const { id } = useParams();
  const [query] = useSearchParams();
  return (
    <div>
      <main>
        <p>path: {location.pathname}</p>
        <p>params id: {id}</p>
        <p>query q: {query.get('q')}</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Users></Users>
    </div>
  );
};

export default PageB;
