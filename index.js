const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const moment = require('moment-timezone');
const colors = require('colors');
const fs = require('fs');

//===Mini librerias interna e integraciones de Api =======
const { GetMessageChatGPT } = require('./services/chatGptServices');
const insult = require('./services/insult.js');



const client = new Client({
    restartOnAuthFail: true,
    puppeteer: {
        headless: true,
        args: [ '--no-sandbox', '--disable-setuid-sandbox' ]
    },
    ffmpeg: './ffmpeg.exe',
    authStrategy: new LocalAuth({ clientId: "client" })
});
const config = require('./config/config.json');

client.on('qr', (qr) => {
    console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] Scan the QR below : `);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.clear();
    const consoleText = './config/console.txt';
    fs.readFile(consoleText, 'utf-8', (err, data) => {
        if (err) {
            console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] Console Text not found!`.yellow);
            console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] ${config.name} is Already!`.green);
        } else {
            console.log(data.green);
            console.log(`[${moment().tz(config.timezone).format('HH:mm:ss')}] ${config.name} is Already!`.green);
        }
    });
});


// Función para obtener la hora actual con formato personalizado
function getCurrentTime() {
    const currentTime = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    };

    const countryCodes = [
        { country : 'PE' , code: ' +51'},
        { country : 'MX' , code: ' +52'},
        {country : 'DO' , code: '+1809 || +1829 || +1849'}
    ]

// Función para obtener la hora local basada en el código de área
function getTimeByCountryCode(countryCode) {
    // Obtener el objeto de código de área correspondiente
    const selectedCode = countryCodes.find((code) => code.code === countryCode);
    if (selectedCode) {
      // Obtener la hora local en base al código de área
      const timezoneOffset = selectedCode.timezoneOffset; // Offset de la zona horaria correspondiente al código de área
      const currentTime = new Date(); // Obtener la hora actual en el servidor
      
 // Aplicar el offset de la zona horaria para obtener la hora local
 const localTime = new Date(currentTime.getTime() + timezoneOffset * 60000);

 // Formatear la hora local según el formato deseado
 const formattedTime = localTime.toLocaleTimeString('es-ES', { hour12: true, hour: 'numeric', minute: 'numeric' });


      return formattedTime // Hora local formateada
    } else {
      return 'Código de área no encontrado';
    }
  }
  

    const formattedTime = currentTime.toLocaleTimeString(undefined, options);
    return formattedTime;
  }



client.on('group_join', (notification) => {
    const groupId = notification.chatId;
    const newMember = notification.author;
  
    // Puedes personalizar el mensaje de bienvenida aquí
    const welcomeMessage = `¡Bienvenido/a al grupo! ${newMember}.\nEsperamos que disfrutes tu estancia.`;
  
    // Envia el mensaje de bienvenida al grupo
    client.sendMessage(groupId, welcomeMessage);
  });


client.on('message', async (message) => {
    const isGroups = message.from.endsWith('@g.us') ? true : false;
    if ((isGroups && config.groups) || !isGroups) {

        // Mostrar menú al mencionar "!menu"
        if (message.body.toLowerCase().includes(`${config.prefix}menu`)) {
            const menu = "¡Hola !\n" +
                         "❖❖❖❖ !sticker " + "crean un stickers al adjuntar una imagen junto al caption !sticker ❖❖❖❖ \n"+
                         "❖❖❖❖ !insult " + " Genera un Insulto randon a el usuario mencionado ❖❖❖❖\n" +
                         "❖❖❖❖ !hora  ❖❖❖❖\n" +
                         "❖❖❖❖ !menu " + " Muestra el menu de opciones de el Bot ❖❖❖❖\n" +
                         "❖❖❖❖ !change  "+ " Cambia de author de Sticker ❖❖❖❖ \n" +
                         "❖❖❖❖ Por favor, elige una opción ingresando el número correspondiente. ❖❖❖❖ \n";
            client.sendMessage(message.from, menu);
        }


        // Verificar la hora actual 
    if (message.body === `${config.prefix}hora`) {
      const currentTime = getCurrentTime();
      client.sendMessage(message.from, `La hora actual es: ${currentTime}`);
    }
       
 // Verificar si el mensaje es el comando '!insult'
 if (message.body.startsWith(`${config.prefix}insult`)) {
    // Obtener el nombre mencionado después del comando
    const name = message.body.replace(`${config.prefix}insult`, "").trim();

    // Generar el insulto para el nombre mencionado
    const randomInsult = insult.generateInsult(name);

    const messageText = `${name}, ${randomInsult}`;

    // Enviar el insulto al remitente del mensaje
    client.sendMessage(message.from, messageText);
}


        // Image to Sticker (With Caption or Media)
if (message.type === "image" || message.type === "video" || message.type === "gif") {
    if (message._data.caption === `${config.prefix}sticker` || `Sticker`|| `STICKER ` || `Sticker`) {
        client.sendMessage(message.from, "*⚙️* Creando Sticker...");
        try {
            const media = await message.downloadMedia();
            client.sendMessage(message.from, media, {
                sendMediaAsSticker: true,
                stickerName: config.name, // Sticker Name = Edit in 'config/config.json'
                stickerAuthor: config.author // Sticker Author = Edit in 'config/config.json'
            }).then(() => {
                client.sendMessage(message.from, "*🆗* Creado Correctamente !");
            });
        } catch {
            client.sendMessage(message.from, "*⛔* Fallo!");
        }
    } else {
                 client.sendMessage(message.from, "*🤦‍♂️* se nesecita una  image, video, or GIF para generar el sticker !  😠");
             }
}

// Image to Sticker (With Reply Image)
// else if (message.body === `${config.prefix}sticker`) {
//     const quotedMsg = await message.getQuotedMessage();
//     if (message.hasQuotedMsg && quotedMsg.hasMedia) {
//         client.sendMessage(message.from, "*⚙️* Creando Stickers ....");
//         try {
//             const media = await quotedMsg.downloadMedia();
//             client.sendMessage(message.from, media, {
//                 sendMediaAsSticker: true,
//                 stickerName: config.name, // Sticker Name = Edit in 'config/config.json'
//                 stickerAuthor: config.author // Sticker Author = Edit in 'config/config.json'
//             }).then(() => {
//                 client.sendMessage(message.from, "*🆗* Creado Correctamente !");
//             });
//         } catch {
//             client.sendMessage(message.from, "*⛔* Fallo !");
//         }
//     } else {
//         client.sendMessage(message.from, "*🤦‍♂️* se nesecita una  image, video, or GIF para generar el sticker !  😠");
//     }
// }


// == integracion de ChatGPT ==

// Dentro del evento 'message'
if (message.body.startsWith(`${config.prefix}chat`)) {
    const userInput = message.body.replace(`${config.prefix}chat`, "").trim();
    
    // Llamar a la función GetMessageChatGPT con el texto de entrada del usuario
    const response = await GetMessageChatGPT(userInput);
    console.log(response); // Imprimir la respuesta en la consola

    // Enviar la respuesta generada por GPT-3 al remitente del mensaje
    client.sendMessage(message.from, response);
  }
  


        // Claim or change sticker name and sticker author
         else if (message.body.startsWith(`${config.prefix}change`)) {
            if (message.body.includes('|')) {
                let name = message.body.split('|')[0].replace(message.body.split(' ')[0], '').trim();
                let author = message.body.split('|')[1].trim();
                const quotedMsg = await message.getQuotedMessage(); 
                if (message.hasQuotedMsg && quotedMsg.hasMedia) {
                    client.sendMessage(message.from, "*[⏳]* Loading..");
                    try {
                        const media = await quotedMsg.downloadMedia();
                        client.sendMessage(message.from, media, {
                            sendMediaAsSticker: true,
                            stickerName: name,
                            stickerAuthor: author
                        }).then(() => {
                            client.sendMessage(message.from, "*[✅]* Author Cambiado!");
                        });
                    } catch {
                        client.sendMessage(message.from, "*⛔* Fallo!");
                    }
                } else {
                    client.sendMessage(message.from, "*[❎]* Primero una imagen  😒😒 !");
                }
            } else {
                client.sendMessage(message.from, `*[❎]* Run the command :\n*${config.prefix}change <name> | <author>*`);
            }
        
        // Read chat
        } else {
            client.getChatById(message.id.remote).then(async (chat) => {
                await chat.sendSeen();
            });
        }
    }
});

client.initialize();


const browser = await puppeteer.launch({
    'args' : [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });