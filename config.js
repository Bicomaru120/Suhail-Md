const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://immanueladebayo302:Xx9KSHbTRbYTZT9W@cluster0.zca9hz8.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348108446008";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349072642884";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349072642884";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_44_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMixcbiAgICAgICAgMTI3LFxuICAgICAgICA3NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOSxcbiAgICAgICAgNixcbiAgICAgICAgMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxODksXG4gICAgICAgIDExNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRhUmpMZzhuNVo3RjBaV2pQWEFWQzlMbisza0c2ZEk4WWpUOU44TThHU009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlhRUUM3VkJNUTBDSFdqNGtSczEyOHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjQ2YjBlZWQtMzRjZi00ZGU0LWFlYjAtOGMyNWIyNzkyNTAwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0OSxcbiAgICAgIDE2OSxcbiAgICAgIDc2LFxuICAgICAgMTYyLFxuICAgICAgNDMsXG4gICAgICAyMTgsXG4gICAgICAyMjUsXG4gICAgICAyMTMsXG4gICAgICAxNjgsXG4gICAgICAxMDIsXG4gICAgICAxMjYsXG4gICAgICA1LFxuICAgICAgMjE1LFxuICAgICAgNjAsXG4gICAgICA0NyxcbiAgICAgIDY3LFxuICAgICAgMTksXG4gICAgICAyMDksXG4gICAgICA0MyxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MyxcbiAgICAgIDE2NSxcbiAgICAgIDY1LFxuICAgICAgMTczLFxuICAgICAgMTA0LFxuICAgICAgMTEzLFxuICAgICAgMTkzLFxuICAgICAgMTQ4LFxuICAgICAgNDcsXG4gICAgICAyMTEsXG4gICAgICAyMTYsXG4gICAgICAxNjUsXG4gICAgICAxNTEsXG4gICAgICAxMDAsXG4gICAgICAxMDIsXG4gICAgICAyMDEsXG4gICAgICAxMjEsXG4gICAgICA5NyxcbiAgICAgIDc1LFxuICAgICAgOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRMlhXNkxHRVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MjY0Mjg4NDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzcwMzU4NTUzNDM3MzA6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTFNOdGFBR0VPSHhuclVHR0NJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJiTml6YTFPaDZIRHlEdVJZbm14M3l6YmllOFYxOGNXS2hPVXhMNGUzQnpvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImI5MmFSUXlWY2hiQzRSU0VlODRpcFRtazd0cldtd0Z2amYyWENNZEVxVXI4SGc2Sjc5RWxrbVpLdlZveEJsNVRmcUg5QStLUkpId2VJMjRGTldXRURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhWaHNodmVFZFJubzJORTNnSHBjeUk5QlVVV0RNcTFmck0rWFhtS2hudkRkTjcvWFF5M0RwekVuUkphUFJpUzRlUkxRcEQ0N05RMWJOZFVlbmluN2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzI2NDI4ODQ6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyNjc4Nzdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Immanuel-King",
  ownername:process.env.OWNER_NAME|| "EmmyGold",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
