const { Composer } = require('micro-bot');
const messages = require('./messages');
const calculator = require('./calculateTime');
const config = require('./config');

const bot = new Composer();
const targetDate = new Date(config.targetDate);
const todayDate = new Date();

bot.hears(messages.messagesToReact, async (ctx) =>
    ctx.reply('🐔')
);

bot.command('/help', async ({ from, replyWithMarkdown, botInfo }) => 
    replyWithMarkdown(messages.help( from, botInfo ))
);

bot.command('/time', async ({ from, replyWithMarkdown, botInfo }) => {
  const reply = config.isLawInProgress 
  ? messages.time( from, calculator.calculateTimeInDays( todayDate, targetDate ))
  : messages.rest ( from ); 

    replyWithMarkdown( reply )
});

module.exports = bot;