import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './page/About.jsx';
import Root from './page/Root';
import Route from './Routes/Route';
import Router from './Routes/Router';

/**
 * 네비탭에 있는 것을 누를때마다 pushState가 발생
 * 일단 popstate 이벤트를 등록해야함
 * * Router에 popstate를 등록하고 거기서 location을 분석해서
 * * 해당 location에 의해 컴포넌트가 랜더링 되도록함(window.location.pathname)
 *
 *
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
