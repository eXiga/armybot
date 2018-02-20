const help = ( from, botInfo ) => `
Здарова, *${from.first_name || from.username}* !
Меня зовут *${botInfo.first_name}*, я делюсь полезной инфой о призыве.
На сайте *https://povestka.by* есть полезная инфа про откос, зайди и почитай.
А если ты просто наберешь */time*, то узнаешь, сколько времени тебе осталось косить.
Удачи, братан!
`

const time = ( from, time ) => `
*${from.first_name || from.username}*, тебе осталось косить *${time}* дней.
`

const messagesToReact = /(армия)|(откос)|(косить)|(армейка)|(А Р М И Я)/i

module.exports = { help, time, messagesToReact }