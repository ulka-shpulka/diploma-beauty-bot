const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const params = new URLSearchParams(match[1]);
  const service = params.get("service");
  const staff = params.get("staff");
  const datetime = params.get("datetime");

  bot.sendMessage(chatId, `👋 Привет, ${msg.from.first_name || "гость"}!`);
  bot.sendMessage(chatId, `Вы выбрали:\n\n💇 Услуга: ${service}\n👤 Сотрудник: ${staff}\n🕒 Время: ${datetime}`);
});
