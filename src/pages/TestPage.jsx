import React from 'react';

const TestPage = () => {
  console.log('TestPage is rendering');
  
  return (
    <div style={{
      padding: '20px',
      background: '#1a1a1a',
      color: 'white',
      minHeight: '100vh',
      fontSize: '24px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🎉 测试页面正常工作！</h1>
      <p>如果您能看到这个页面，说明路由和基本渲染都是正常的。</p>
      <p>现在可以尝试访问个人页面：<a href="/personal" style={{color: '#667eea'}}>点击这里</a></p>
      <div style={{marginTop: '20px', padding: '10px', border: '1px solid #333', background: '#2a2a2a'}}>
        <p><strong>调试信息：</strong></p>
        <p>当前时间：{new Date().toLocaleString()}</p>
        <p>React正在正常渲染</p>
      </div>
    </div>
  );
};

export default TestPage; 