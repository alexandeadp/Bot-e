# StickerWhatsAppBOT
<p align="center">
  <img alt="@alquranid" style="width: 150px;" src="./config/imgs/bot.gif">
</p>
<div align="center">
  <h3>BOT-E</h3>
  <p>Sticker BOT-E with <a href="https://github.com/pedroslopez/whatsapp-web.js/">whatsapp-web.js</a> and <a href="https://nodejs.org/en/">nodejs</a></p>
</div>
<div align="center">
  <a href="#warning">Warning</a> | <a href="https://dsc.gg/DrelezTM">Report Bug</a> | <a href="https://github.com/DrelezTM/StickerWhatsAppBOT/issues">Issues</a>
</div>

## Installation 📑
* Clone Repository
  ```sh
  git clone https://github.com/alexandeadp/Bot-e
  ```
* Install Modules
  ```sh
  npm install
  ```
* Start
  ```sh
  npm start
  ```
* Scan QR
  <img alt="@stickerwhatsappbot" src="https://media.discordapp.net/attachments/858321432178196490/1023202756049240145/ss2.png?width=1440&height=566">

* Ready
  <img alt="@stickerwhatsappbot" src="./config/imgs/README.md - Bot-e - Visual Studio Code 13_7_2023 5_47_30 a. m..png">
 
 ## Configuration 🗝
* [config.json](https://github.com/alexandeadp/Bot-e/blob/main/config/config.json)
  ```json
  {
    "name": "BOT-E",
    "author": "Technical-Reviews",
    "prefix": "!",
    "timezone": "America/Santo_Domingo",
    "groups": true
  }
  ```
  * config.name : *name for the sticker* (string)
  * config.author : *name for sticker maker* (string)
  * config.prefix : *prefix for command* (string)
  * config.timezone : *timezone displays the time at the specified location* (string)
  * config.groups : *to filter whether bots can respond to group chats or not* (boolean)
* [console.txt](https://github.com/DrelezTM/StickerWhatsAppBOT/blob/main/config/console.txt)
  ```txt
  
  
   /$$$$$$$     /$$$$$$\   /$$$$$$$$           /$$$$$$$$$$            
  | $$__  $$   /$$__  $$  |__  $$____/        /___$$$$____/
  | $$  \ $$  | $$  \ $$     | $$             |$$ 
  | $$$$$$$   | $$  | $$     | $$             |$$_________
  | $$__  $$  | $$  | $$     | $$   /$$$$$$/  |$$$$$$$$$ /
  | $$  \ $$  | $$  | $$     | $$             |$$
  | $$$$$$$/  |  $$$$$$/     | $$             |$$$$$$$$$$$
  |_______/    \______/      |__/             \___________/




  ```
  You can replace ascii in https://patorjk.com/software/taag/

## Features 📋
  |                   Features                  	| Status 	|
  |:-------------------------------------------:	|:------:	|
  | Image to Sticker                            	|    ✅   	|
  | Video to Sticker                            	|    ✅   	|
  | Gif to Sticker                              	|    ✅   	|
  | Sticker to Image                            	|    ✅   	|
  | Sticker to Video                            	|    ❎   	|
  | Change Sticker Name & Sticker Author        	|    ✅   	|
  | Prefix can be set in the config/config.json 	|    ✅   	|
  | Supports Reply Image to Sticker             	|    ✅   	|
  | Supports Reply Video to Sticker             	|    ✅   	|
  | Supports Reply Gif to Sticker               	|    ✅   	|
  | Supports Hours realtime                      	|    ✅   	|
  | Supports creation of insult of chat           |    ✅   	|
  | Supports Integration whit ChatGPT           	|    ✅   	|
  | Supports Integration whit Google Translate   	|    ✅   	|
  | Supports Integration whit MeMe-Maker         	|    ✅   	|
  


  

## Commands 💭
  <table class="tg">
    <thead>
      <tr>
        <th class="tg-0pky">Commands</th>
        <th class="tg-0pky">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="tg-0pky">!sticker</td>
        <td class="tg-0pky">Make Image/Video/Gif into Sticker. You can also send Image/Video/Gif into Sticker directly without Command. [in the Caption or Reply message]</td>
      </tr>
      <tr>
        <td class="tg-0pky">!image</td>
        <td class="tg-0pky">Make Sticker into Image. You can also send Image/Video/Gif into Sticker directly without Command. [in the Reply message]</td>
      </tr>
      <tr>
        <td class="tg-0pky">!change &lt;name&gt; | &lt;author&gt;</td>
        <td class="tg-0pky">Change Sticker Name &amp; Sticker Author as you wish. [in the Reply message]</td>
      </tr>
    </tbody>
  </table>

## Built With 🛠
* [WhatsApp-web.js](https://github.com/pedroslopez/whatsapp-web.js/)
* [QRCode-Terminal](https://www.npmjs.com/package/qrcode-terminal)
* [Moment-Timezone](https://www.npmjs.com/package/moment-timezone)
* [Colors](https://www.npmjs.com/package/colors)
* [FS](https://www.npmjs.com/package/fs)


## License 📜
* [License](https://github.com/alexandeadp/Bot-e/blob/main/LICENSE)

## Warning 🚧
<p id="warning">Only works on Windows, MacOS, and Linux. <b>Can't work on Android/Termux</b>!</p>
