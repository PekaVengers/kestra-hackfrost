import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "sonner";
import { NetworkStatusProvider } from "./context/NetworkStatusContext";
import NetworkStatusHandler from "./helpers/NetworkStatusHandler";
import { ThemeProvider } from "@/components/theme-provider";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <NetworkStatusProvider>
        <Toaster position="top-right" richColors />
        <NetworkStatusHandler />
        <div className="App relative">
          <AppRoutes />
        </div>
      </NetworkStatusProvider>
    </ThemeProvider>
  );
}

export default App;
