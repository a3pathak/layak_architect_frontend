import Router from './routes';
import ThemeProvider from './theme';
import MotionLazyContainer from './components/animate/MotionLazyContainer';

function App() {
  return (
    <ThemeProvider>
      <MotionLazyContainer>
        <Router />
      </MotionLazyContainer>
    </ThemeProvider>
  );
}

export default App;
