// 极简测试页面 - 不依赖任何外部库
function SimpleTest() {
  return (
    <div style={{
      background: '#1a1a1a',
      color: 'white',
      minHeight: '100vh',
      padding: '50px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '18px'
    }}>
      <h1 style={{color: '#4CAF50', fontSize: '2.5em', marginBottom: '20px'}}>
        ✅ React 渲染成功！
      </h1>
      
      <div style={{
        background: '#2a2a2a',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '20px',
        border: '2px solid #4CAF50'
      }}>
        <h2>🎉 如果您能看到这个页面，说明：</h2>
        <ul style={{lineHeight: '1.8'}}>
          <li>✅ Vite 开发服务器正常运行</li>
          <li>✅ React 应用正常加载</li>
          <li>✅ 路由系统工作正常</li>
          <li>✅ JavaScript 执行正常</li>
        </ul>
      </div>
      
      <div style={{
        background: '#333',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <h3>📍 测试链接：</h3>
        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px'}}>
          <a href="/" style={{
            color: '#2196F3',
            textDecoration: 'none',
            padding: '8px 16px',
            background: '#0d47a1',
            borderRadius: '5px'
          }}>
            主页
          </a>
          <a href="/personal" style={{
            color: '#FF9800',
            textDecoration: 'none',
            padding: '8px 16px',
            background: '#e65100',
            borderRadius: '5px'
          }}>
            个人页面
          </a>
        </div>
      </div>
      
      <div style={{
        background: '#444',
        padding: '15px',
        borderRadius: '8px',
        fontSize: '14px',
        color: '#bbb'
      }}>
        <strong>当前状态：</strong><br/>
        时间: {new Date().toLocaleString()}<br/>
        URL: {window.location.href}<br/>
        用户代理: {navigator.userAgent.substring(0, 50)}...
      </div>
    </div>
  );
}

export default SimpleTest; 