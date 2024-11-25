const TelegramBot = require('node-telegram-bot-api');

// Вставь сюда свой токен
const token = '7617190711:AAEhKoYIkGO9G-xyLw8dleOJ7AwhPhMH8G4';

const bot = new TelegramBot(token, { polling: true });

// Команда /start для отображения кнопок
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Главное меню с кнопками для веб-приложений
  const webAppMenu = {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Перейти к Приложению 1', url: 'https://ubiquitous-strudel-80155d.netlify.app/app1.html' }],
        [{ text: 'Перейти к Приложению 2', url: 'https://ubiquitous-strudel-80155d.netlify.app/app2.html' }],
        [{ text: 'Перейти к Приложению 3', url: 'https://ubiquitous-strudel-80155d.netlify.app/app3.html' }],
        [{ text: 'Перейти к Приложению 4', url: 'https://ubiquitous-strudel-80155d.netlify.app/app5.html' }]
      ]
    }
  };

  bot.sendMessage(chatId, 'Выберите приложение:', webAppMenu);
});
