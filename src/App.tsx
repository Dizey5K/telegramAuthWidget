import "./App.css";
import TelegramLoginButton from "./components/TelegramButton";

function App() {
  let name = "Tele1234dfdfBot";
  const handleBot = (user: any) => {
    console.log(user);
  };

  return (
    <>
      <main>
        <TelegramLoginButton
          botName={name}
          buttonSize="large"
          cornerRadius={10}
          usePic={false}
          dataOnauth={handleBot}
        />
      </main>
    </>
  );
}

export default App;
