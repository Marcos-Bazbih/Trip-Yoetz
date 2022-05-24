import AppRouter from "./App-Router";
import DataContextProvider from "./contexts/data-context";
import ThemeContextProvider from "./contexts/theme-context";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <DataContextProvider>
        <AppRouter/>
        </DataContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;