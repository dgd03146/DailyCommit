import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defalutOptions: {
    queries: {
      suspense: true
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Suspense fallback={<div>로딩 중이에요!:)</div>}>
    <QueryClientProvider client={queryClient}>
      {/* devtools */}
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      <App />
    </QueryClientProvider>
  </React.Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
