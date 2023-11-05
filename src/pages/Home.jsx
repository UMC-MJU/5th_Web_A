import React from 'react';
import AdPage from './AdPage';

const Home = () => {
  return (
    <div>
      <h1>홈 페이지</h1>
      <p>여기에 홈 페이지 컨텐츠가 들어갑니다.</p>
      <AdPage /> {/* AdPage 컴포넌트를 렌더링 */}
    </div>
  );
}

export default Home;
