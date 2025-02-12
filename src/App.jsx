
import Layout from './components/Layout';
import AppRouters from './AppRouters';
import { ThemeProvider } from './context/ThemContext';

function App() {

  return (
    <ThemeProvider>
      <Layout>
    
        <AppRouters />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
