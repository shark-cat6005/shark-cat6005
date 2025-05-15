const me = {
name: "サメ猫ちゃん",
gender: "girl",
age: 2**16,
like: ["make addons", "building", "coding", "play minecraft"],
likeGameName: "minecraft",
catchphrase: null,
specialties: "coding",
notGoodAt: "socializing",
channel: `https://youtube.com/channel/UC${[...Array(22)]
.map(()=>'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'[Math.random()*64|0])
.join('')}`,
minecraftId: "shark cat6005"
};

console.log(me);
