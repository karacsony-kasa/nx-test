import {useEffect} from 'react';

export function App() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://go.bonboarding.com';
    script.dataset['bbKey'] = 'mhdx0qvwbn';    

    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      window.Bonboarding.identify({ email: 'kasa-test@example.com' });
    }
    
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, []);


  return (
    <h1>
      <span> Hello there 👋</span>
    </h1>
  );
}

export default App;
