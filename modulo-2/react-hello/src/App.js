import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import InputText from "./components/InputText";
import InputDate from "./components/InputDate";
import { getAgeFrom } from "./helpers/dateHelpers";
import { getId } from "./services/getId";
import Timer from "./components/Timer";
import CheckboxInput from "./components/CheckboxInput";
import OnlineOffline from "./components/OnlineOffline";

export default function App() {
  const [birthDate, setBirthDate] = useState("1997-10-27");
  const [name, setName] = useState("Edson Magalhães");
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);

  useEffect(() => {
    function toggleOnline() {
      setIsOnline(true);
    }

    function toggleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", toggleOnline);
    window.addEventListener("offline", toggleOffline);

    return () => {
      window.removeEventListener("online", toggleOnline);
      window.removeEventListener("offline", toggleOffline);
    };
  }, []);

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  function toggleShowTimer() {
    setShowTimer((currentValue) => !currentValue);
  }

  return (
    <>
      <Header size="large">Componente Header - React Hello</Header>

      <Main>
        <OnlineOffline isOnline={isOnline} />

        {showTimer && (
          <div className="text-right m-1">
            <Timer />
          </div>
        )}

        <CheckboxInput
          labelDescription="Mostrar cronômetro"
          onCheckboxChange={toggleShowTimer}
        />

        <InputText
          id={getId()}
          labelDescription="Digite o seu nome:"
          inputValue={name}
          onInputChange={handleNameChange}
          autoFocus
        />
        <InputDate
          id={getId()}
          labelDescription="Digite a sua data de nascimento:"
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          Meu nome é {name}, possui {name.length} caracteres, e você possui{" "}
          {getAgeFrom(birthDate)} anos.
        </p>
      </Main>
    </>
  );
}
