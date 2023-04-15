'use strict';
const fs = require('fs');
const chalk = require('chalk');
//kalau abis isi sndri ye Gauss manja
module.exports = {
  api: {
    removebg: [
      'zNKnayDFH1nugtA81fkPMzXn',
      '5CyygkXiT5vrki2Z6ZsUCE8u',
      'Mz4yJkagrCLotdgsr4Ms39ud',
      'vEeWnzQws9kJoYNMYKhbT1s6',
      '2arViktax9HUdMqy9U7wFLKT',
      'sfZpRHNwVPAG57nZVHijYZ9v',
      'oqVVyQ2rBDYdUrxThg4GdjhA',
      'rGp4axHpQ56Y5tRLX7J789QC',
      'NfPx6NgTkpVYLnKUZHCAM1P3',
    ], // https://remove.bg/api 
    unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER', 'fcKJkPstNXp4pjntYt3bR38E'],
    upscaling: '1255173112',
    imgsuper: [
      '198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc',
      '85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2',
    ], // https://super-image1.p.rapidapi.com/
    speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a'],
  },
};

// Kode di bawah ini akan menjalankan fungsi watchFile pada modul fs
// Ketika file yang sedang diproses mengalami perubahan, kode akan mengeksekusi
// watchFile untuk menghapus cache dan memuat ulang file yang baru
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellow(`New ${__filename}`));
  delete require.cache[file];
  require(file);
});
