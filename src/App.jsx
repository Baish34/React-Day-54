import { useState } from "react";
import "./App.css";

const LanguageForm = () => {
  const [selectedLanguage, setSelectedLanguages] = useState([]);

  const handleLanguageCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedLanguages((preValue) => [...preValue, value]);
    } else {
      setSelectedLanguages((preValue) =>
        preValue.filter((lang) => lang != value),
      );
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        value="JavaScript"
        onChange={handleLanguageCheckbox}
      />{" "}
      JavaScript
      <input
        type="checkbox"
        value="Python"
        onChange={handleLanguageCheckbox}
      />{" "}
      Python
      <input
        type="checkbox"
        value="Java"
        onChange={handleLanguageCheckbox}
      />{" "}
      Java
      <p>Selected Languages: {selectedLanguage.join(", ")}</p>
    </div>
  );
};

const MusicGenre = () => {
  const [musicGenre, setMusicGenre] = useState([]);
  const handleMusicCheckbox = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setMusicGenre((preMusic) => [...preMusic, value]);
    } else {
      setMusicGenre((preMusic) => preMusic.filter((music) => music != value));
    }
  };
  return (
    <div>
      <input type="checkbox" value="Rock" onChange={handleMusicCheckbox} /> Rock
      <input type="checkbox" value="Jazz" onChange={handleMusicCheckbox} /> Jazz
      <input type="checkbox" value="Pop" onChange={handleMusicCheckbox} /> Pop
      <p>Selected Music: {musicGenre.join(", ")}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <LanguageForm />
      <br />
      <MusicGenre />
    </main>
  );
}
