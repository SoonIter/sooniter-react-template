import React from 'react';
import { Button } from '@douyinfe/semi-ui';
import MainLayout from './views/MainLayout';
import PageA from './views/PageA';
import PageB from './views/PageB';

import './i18n';

function App() {
  useTitle('SoonIter-React-Template');
  const [a, setA] = useSafeState(0);
  const add = useCallback(() => {
    setA((a) => a + 1);
  }, []);
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <h1 color="blue">{t('welcome')}<span color="gray">+Unocss</span> <span color="purple">+Foca.js</span></h1>

        <Button onClick={add}>主要按钮 {a}</Button>
        <Button type="secondary" onClick={add}>
          次要按钮 {a}
        </Button>
        <Button type="tertiary" onClick={add}>
          第三按钮 {a}
        </Button>
        <Button type="warning" onClick={add}>
          警告按钮 {a}
        </Button>
        <Button type="danger" onClick={add}>
          危险按钮 {a}
        </Button>
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
