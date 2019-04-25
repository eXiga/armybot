const { Composer } = require('micro-bot');
const messages = require('./messages');
const calculator = require('./calculateTime')

const bot = new Composer();
const targetDate = new Date('2019-06-1');
const todayDate = new Date();

bot.hears(messages.messagesToReact, async (ctx) =>
    ctx.reply('🐔')
);

bot.command('/help', async ({ from, replyWithMarkdown, botInfo }) => 
    replyWithMarkdown(messages.help( from, botInfo ))
);

bot.command('/time', async ({ from, replyWithMarkdown, botInfo }) =>
    replyWithMarkdown(messages.time( from, calculator.calculateTimeInDays( todayDate, targetDate )))
);

module.exports = bot;