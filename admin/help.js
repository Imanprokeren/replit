exports.allmenu = (prefix, namabot, sender, cekUser, m, listmenu, storage) => {

var Utama = ""
var animeSfw = ""
var Random = ""
var Creatif = ""
var Randomtag = ""
var Cek = ""
var Kerangajaib = ""
var Group = ""
var Storage = ""
var Owner = ""
var Hacker = ""
var Game = ""
var tagX = ""
var tagV = ""
var Ephoto = ""
var Maker = ""
var Audio = ""
var Download = ""
let number = 0

// [ā] JANGAN DI RECODE SEMBARANGAN YA :( NTAR ERROR š

Object.keys(listmenu.utama).forEach((i) => {number++
Utama += `\nā ${prefix}` + listmenu.utama[i] + ""})

Object.keys(listmenu.anime.sfw).forEach((i) => {number++
animeSfw += `\nā ${prefix}` + listmenu.anime.sfw[i] + ""})

Object.keys(listmenu.random).forEach((i) => {number++
Random += `\nā ${prefix}` + listmenu.random[i] + ""})

Object.keys(listmenu.creatif).forEach((i) => {number++
Creatif += `\nā ${prefix}` + listmenu.creatif[i] + ""})

Object.keys(listmenu.randomtag).forEach((i) => {number++
Randomtag += `\nā ${prefix}` + listmenu.randomtag[i] + ""})

Object.keys(listmenu.cek).forEach((i) => {number++
Cek += `\nā ${prefix}` + listmenu.cek[i] + ""})

Object.keys(listmenu.kerangajaib).forEach((i) => {number++
Kerangajaib += `\nā ${prefix}` + listmenu.kerangajaib[i] + ""})

Object.keys(listmenu.group).forEach((i) => {number++
Group += `\nā ${prefix}` + listmenu.group[i] + ""})

Object.keys(listmenu.storage).forEach((i) => {number++
Storage += `\nā ${prefix}` + listmenu.storage[i] + ""})

Object.keys(listmenu.owner).forEach((i) => {number++
Owner += `\nā ${prefix}` + listmenu.owner[i] + ""})

Object.keys(listmenu.owner).forEach((i) => {number++
Owner += `\nā ${prefix}` + listmenu.owner[i] + ""})

Object.keys(listmenu.hacker).forEach((i) => {number++
Hacker += `\nā ${prefix}` + listmenu.hacker[i] + ""})

Object.keys(listmenu.game).forEach((i) => {number++
Game += `\nā ${prefix}` + listmenu.game[i] + ""})

Object.keys(listmenu.tagx).forEach((i) => {number++
tagX += `\nā ${prefix}` + listmenu.tagx[i] + ""})

Object.keys(listmenu.tagv).forEach((i) => {number++
tagV += `\nā ${prefix}` + listmenu.tagv[i] + ""})

Object.keys(listmenu.ephoto).forEach((i) => {number++
Ephoto += `\nā ${prefix}` + listmenu.ephoto[i] + ""})

Object.keys(listmenu.maker).forEach((i) => {number++
Maker += `\nā ${prefix}` + listmenu.maker[i] + ""})

Object.keys(listmenu.audio).forEach((i) => {number++
Audio += `\nā ${prefix}` + listmenu.audio[i] + ""})

Object.keys(listmenu.download).forEach((i) => {number++
Download += `\nā ${prefix}` + listmenu.download[i] + ""})


return `āā ć  ImanBot - Multi Device ć āā

Halo @${sender.split("@")[0]} š»

Info Bot š» :
Library : Baileys-MD
Prefix : ( Multi )
Type Menu : ( All Menu )
Owner : Iman

Owner Info š³ :
Youtube: https://youtube.com/c/ManzBotEdtz12

Any Bot š :
Bot Anonymous: wa.me//62895410602977

ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *UTAMA* ć${Utama}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *ANIME* ć${animeSfw}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *RANDOM* ć${Random}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *CREATIF* ć${Creatif}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *RANDOMTAG* ć${Randomtag}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāā[ *CEK* ]${Cek}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāā[ *KERANG-AJAIB* ]${Kerangajaib}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *GROUP* ć${Group}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *STORAGE* ć${Storage}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *OWNER* ć${Owner}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *HACKER* ć${Hacker}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *GAME* ć${Game}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāā[ *TAG-X* ć${tagX}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *TAG-V* ć${tagV}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *PHOTO OXY* ć
 ā ${prefix}shadow text
 ā ${prefix}cup text
 ā ${prefix}cup1 text
 ā ${prefix}romance text
 ā ${prefix}smoke text
 ā ${prefix}burnpaper text
 ā ${prefix}lovemessage text
 ā ${prefix}undergrass text
 ā ${prefix}love text
 ā ${prefix}coffe text
 ā ${prefix}woodheart text
 ā ${prefix}woodenboard text
 ā ${prefix}summer3d text
 ā ${prefix}wolfmetal text
 ā ${prefix}nature3d text
 ā ${prefix}underwater text
 ā ${prefix}goldenrose text
 ā ${prefix}summernature text
 ā ${prefix}letterleaves text
 ā ${prefix}glowingneon text
 ā ${prefix}fallleaves text
 ā ${prefix}flamming text
 ā ${prefix}harrypotter text
 ā ${prefix}carvedwood text
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *EPHOTO* ć${Ephoto}
 ā ${prefix}wetglass <text>
 ā ${prefix}multicolor3d <text>
 ā ${prefix}watercolor <text>
 ā ${prefix}luxurygold <text>
 ā ${prefix}galaxywallpaper <text>
 ā ${prefix}lighttext <text>
 ā ${prefix}beautifulflower <text>
 ā ${prefix}puppycute <text>
 ā ${prefix}royaltext <text>
 ā ${prefix}heartshaped <text>
 ā ${prefix}birthdaycake <text>
 ā ${prefix}galaxystyle <text>
 ā ${prefix}hologram3d <text>
 ā ${prefix}greenneon <text>
 ā ${prefix}glossychrome <text>
 ā ${prefix}greenbush <text>
 ā ${prefix}metallogo <text>
 ā ${prefix}noeltext <text>
 ā ${prefix}glittergold <text>
 ā ${prefix}textcake <text>
 ā ${prefix}starsnight <text>
 ā ${prefix}wooden3d <text>
 ā ${prefix}textbyname <text>
 ā ${prefix}writegalacy <text>
 ā ${prefix}galaxybat <text>
 ā ${prefix}snow3d <text>
 ā ${prefix}birthdayday <text>
 ā ${prefix}goldplaybutton <text>
 ā ${prefix}silverplaybutton <text>
 ā ${prefix}freefire <text>
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāā[ *TEKS PRO ME* ć
 ā ${prefix}pornhub <text1&text2>
 ā ${prefix}glitch <text1&text2>
 ā ${prefix}avenger <text1&text2>
 ā ${prefix}space <text1&text2>
 ā ${prefix}ninjalogo <text1&text2>
 ā ${prefix}marvelstudio <text1&text2>
 ā ${prefix}lionlogo <text1&text2>
 ā ${prefix}wolflogo <text1&text2>
 ā ${prefix}steel3d <text1&text2>
 ā ${prefix}wallgravity <text1&text2>
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *MAKER* ć${Maker}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *AUDIO* ć${Audio}
ā°āāāāāāāāāāāāāāāāā
ā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗā»āŗ
ā­āāāāć *DOWNLOAD* ć${Download}
ā°āāāāāāāāāāāāāāāāā
`
}
