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

// [❗] JANGAN DI RECODE SEMBARANGAN YA :( NTAR ERROR 😄

Object.keys(listmenu.utama).forEach((i) => {number++
Utama += `\n● ${prefix}` + listmenu.utama[i] + ""})

Object.keys(listmenu.anime.sfw).forEach((i) => {number++
animeSfw += `\n● ${prefix}` + listmenu.anime.sfw[i] + ""})

Object.keys(listmenu.random).forEach((i) => {number++
Random += `\n● ${prefix}` + listmenu.random[i] + ""})

Object.keys(listmenu.creatif).forEach((i) => {number++
Creatif += `\n● ${prefix}` + listmenu.creatif[i] + ""})

Object.keys(listmenu.randomtag).forEach((i) => {number++
Randomtag += `\n● ${prefix}` + listmenu.randomtag[i] + ""})

Object.keys(listmenu.cek).forEach((i) => {number++
Cek += `\n● ${prefix}` + listmenu.cek[i] + ""})

Object.keys(listmenu.kerangajaib).forEach((i) => {number++
Kerangajaib += `\n● ${prefix}` + listmenu.kerangajaib[i] + ""})

Object.keys(listmenu.group).forEach((i) => {number++
Group += `\n● ${prefix}` + listmenu.group[i] + ""})

Object.keys(listmenu.storage).forEach((i) => {number++
Storage += `\n● ${prefix}` + listmenu.storage[i] + ""})

Object.keys(listmenu.owner).forEach((i) => {number++
Owner += `\n● ${prefix}` + listmenu.owner[i] + ""})

Object.keys(listmenu.owner).forEach((i) => {number++
Owner += `\n● ${prefix}` + listmenu.owner[i] + ""})

Object.keys(listmenu.hacker).forEach((i) => {number++
Hacker += `\n● ${prefix}` + listmenu.hacker[i] + ""})

Object.keys(listmenu.game).forEach((i) => {number++
Game += `\n● ${prefix}` + listmenu.game[i] + ""})

Object.keys(listmenu.tagx).forEach((i) => {number++
tagX += `\n● ${prefix}` + listmenu.tagx[i] + ""})

Object.keys(listmenu.tagv).forEach((i) => {number++
tagV += `\n● ${prefix}` + listmenu.tagv[i] + ""})

Object.keys(listmenu.ephoto).forEach((i) => {number++
Ephoto += `\n● ${prefix}` + listmenu.ephoto[i] + ""})

Object.keys(listmenu.maker).forEach((i) => {number++
Maker += `\n● ${prefix}` + listmenu.maker[i] + ""})

Object.keys(listmenu.audio).forEach((i) => {number++
Audio += `\n● ${prefix}` + listmenu.audio[i] + ""})

Object.keys(listmenu.download).forEach((i) => {number++
Download += `\n● ${prefix}` + listmenu.download[i] + ""})


return `── 「  ImanBot - Multi Device 」 ──

Halo @${sender.split("@")[0]} 🎻

Info Bot 🎻 :
Library : Baileys-MD
Prefix : ( Multi )
Type Menu : ( All Menu )
Owner : Iman

Owner Info 🎳 :
Youtube: https://youtube.com/c/ManzBotEdtz12

Any Bot 🔔 :
Bot Anonymous: wa.me//62895410602977

▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *UTAMA* 」${Utama}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *ANIME* 」${animeSfw}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *RANDOM* 」${Random}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *CREATIF* 」${Creatif}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *RANDOMTAG* 」${Randomtag}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────[ *CEK* ]${Cek}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────[ *KERANG-AJAIB* ]${Kerangajaib}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *GROUP* 」${Group}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *STORAGE* 」${Storage}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *OWNER* 」${Owner}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *HACKER* 」${Hacker}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *GAME* 」${Game}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────[ *TAG-X* 」${tagX}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *TAG-V* 」${tagV}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *PHOTO OXY* 」
 ● ${prefix}shadow text
 ● ${prefix}cup text
 ● ${prefix}cup1 text
 ● ${prefix}romance text
 ● ${prefix}smoke text
 ● ${prefix}burnpaper text
 ● ${prefix}lovemessage text
 ● ${prefix}undergrass text
 ● ${prefix}love text
 ● ${prefix}coffe text
 ● ${prefix}woodheart text
 ● ${prefix}woodenboard text
 ● ${prefix}summer3d text
 ● ${prefix}wolfmetal text
 ● ${prefix}nature3d text
 ● ${prefix}underwater text
 ● ${prefix}goldenrose text
 ● ${prefix}summernature text
 ● ${prefix}letterleaves text
 ● ${prefix}glowingneon text
 ● ${prefix}fallleaves text
 ● ${prefix}flamming text
 ● ${prefix}harrypotter text
 ● ${prefix}carvedwood text
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *EPHOTO* 」${Ephoto}
 ● ${prefix}wetglass <text>
 ● ${prefix}multicolor3d <text>
 ● ${prefix}watercolor <text>
 ● ${prefix}luxurygold <text>
 ● ${prefix}galaxywallpaper <text>
 ● ${prefix}lighttext <text>
 ● ${prefix}beautifulflower <text>
 ● ${prefix}puppycute <text>
 ● ${prefix}royaltext <text>
 ● ${prefix}heartshaped <text>
 ● ${prefix}birthdaycake <text>
 ● ${prefix}galaxystyle <text>
 ● ${prefix}hologram3d <text>
 ● ${prefix}greenneon <text>
 ● ${prefix}glossychrome <text>
 ● ${prefix}greenbush <text>
 ● ${prefix}metallogo <text>
 ● ${prefix}noeltext <text>
 ● ${prefix}glittergold <text>
 ● ${prefix}textcake <text>
 ● ${prefix}starsnight <text>
 ● ${prefix}wooden3d <text>
 ● ${prefix}textbyname <text>
 ● ${prefix}writegalacy <text>
 ● ${prefix}galaxybat <text>
 ● ${prefix}snow3d <text>
 ● ${prefix}birthdayday <text>
 ● ${prefix}goldplaybutton <text>
 ● ${prefix}silverplaybutton <text>
 ● ${prefix}freefire <text>
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────[ *TEKS PRO ME* 」
 ● ${prefix}pornhub <text1&text2>
 ● ${prefix}glitch <text1&text2>
 ● ${prefix}avenger <text1&text2>
 ● ${prefix}space <text1&text2>
 ● ${prefix}ninjalogo <text1&text2>
 ● ${prefix}marvelstudio <text1&text2>
 ● ${prefix}lionlogo <text1&text2>
 ● ${prefix}wolflogo <text1&text2>
 ● ${prefix}steel3d <text1&text2>
 ● ${prefix}wallgravity <text1&text2>
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *MAKER* 」${Maker}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *AUDIO* 」${Audio}
╰─────────────────
▻►▻►▻►▻►▻►▻►▻►▻►
╭────「 *DOWNLOAD* 」${Download}
╰─────────────────
`
}
