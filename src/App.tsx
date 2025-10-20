import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";
import { UserProvider } from "./contexts/UserContext";
import { NotificationsProvider } from "./contexts/NotificationsContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ChatbotProvider } from "./contexts/ChatbotContext";
import Chatbot from "./components/Chatbot";

function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationsProvider>
          <ChatbotProvider>
            <main>{routing}</main>
            <Chatbot />
          </ChatbotProvider>
        </NotificationsProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
