const { Composer } = require('micro-bot');
const messages = require('./messages');
const calculator = require('./calculateTime')

const bot = new Composer();
const targetDate = new Date(2018, 5, 1);

bot.hears(messages.messagesToReact, async (ctx) =>
    ctx.reply('🐔')
);

bot.command('/help', async ({ from, replyWithMarkdown, botInfo }) => 
    replyWithMarkdown(messages.help( from, botInfo ))
);

bot.command('/time', async ({ from, replyWithMarkdown, botInfo }) =>
    // replyWithMarkdown(messages.time( from, calculator.calculateTimeInDays( targetDate )))
    replyWithMarkdown(messages.rest( from ))
);

module.exports = bot;