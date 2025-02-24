import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "title": "Tic Tac Toe",
      "start1vs1": "Start 1vs1",
      "start1vsBot": "Start 1 vs Bot",
      "player1Wins": "Player 1 Wins",
      "player2Wins": "Player 2 Wins",
      "botWins": "Bot Wins",
      "draw": "It's a Draw!",
      "endGame": "End Game",
      "turn": "Turn",
      "playAgain": "Play Again",
      "mainMenu": "Main Menu",
      "currentPlayer": "Current Player",
      "gameOver": "Game Over",
      "winner": "Winner",
      "language": "Language",
      "yes": "Yes",
      "no": "No",
      "Yes": "Yes",
      "No": "No",
      "draw": "Draw",
      "english": "English",
      "loading": "Loading...",
      "spanish": "Spanish"
    }
  },
  es: {
    translation: {
      "title": "Tres en Raya",
      "start1vs1": "Iniciar 1vs1",
      "start1vsBot": "Iniciar 1 vs Bot",
      "player1Wins": "Jugador 1 Gana",
      "player2Wins": "Jugador 2 Gana",
      "botWins": "Bot Gana",
      "draw": "¡Empate!",
      "playAgain": "Jugar de Nuevo",
      "mainMenu": "Menú Principal",
      "currentPlayer": "Jugador Actual",
      "gameOver": "Fin del Juego",
      "winner": "Ganador",
      "turn": "Turno",
      "draw": "Empate",
      "yes": "Si",
      "no": "No",
      "Yes": "Si",
      "No": "No",
      "language": "Idioma",
      "english": "Inglés",
      "endGame": "Finalizar Partida",
      "loading": "Cargando...",
      "spanish": "Español"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;