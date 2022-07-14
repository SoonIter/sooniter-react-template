import React from 'react';
import { Button } from '@douyinfe/semi-ui';
import MainLayout from './layouts/MainLayout';
import PageA from './views/PageA';
import PageB from './views/PageB';
import './i18n';

function App() {
  useTitle('Page Title');
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="App">
      <IconLogosReact style={{ fontSize: '3em' }} />
      <header className="App-header">
        <h1 text="blue">{t('welcome')}</h1>
        <p>
          <button type="button" onClick={() => setCount(count => count + 1)}>
            count is: {count}
          </button>
          <Button>主要按钮</Button>
          <Button type="secondary">次要按钮</Button>
          <Button type="tertiary">第三按钮</Button>
          <Button type="warning">警告按钮</Button>
          <Button type="danger">危险按钮</Button>
        </p>
      </header>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/list" element={<PageA />} />
          <Route path="/detail/:id" element={<PageB />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
