var fs = require("fs")
// markdown 规范可见 https://daringfireball.net/projects/markdown/basics
const MD_TYPE = {
  HEADER_1: 'header-1', // #
  HEADER_2: 'header-2', // ##
  HEADER_3: 'header-3', // ###
  HEADER_4: 'header-4', // ####
  BLOCKQUOTE: 'blockquote', // >
  LISTS: 'lists', // -
  EMPHASIS: 'emphasis', // **value** _value_
  IMAGES: {
    class: 'images',
  }, // ![]()
  LINKS: 'links',
  CODE: 'code', // `code`
  CODE_BLOCK: 'code-block', // ```
  TEXT: 'text', // 正文
}

const stringTest = (string) => {
  string = string.trim()
  if (string.match(/^#\x20/)) {
    return MD_TYPE.HEADER_1
  }
  if (string.match(/^##\x20/)) {
    return MD_TYPE.HEADER_2
  }
  if (string.match(/^###\x20/)) {
    return MD_TYPE.HEADER_3
  }
  // #### header-4
  if (string.match(/^####\x20/)) {
    return MD_TYPE.HEADER_4
  }
  // > blockquote
  if (string.match(/^>\x20/)) {
    return MD_TYPE.BLOCKQUOTE
  }
  // - lists
  if (string.match(/^-\x20/)) {
    return MD_TYPE.LISTS
  }
  // **emphasis**
  if (string.match(/\*\*./)) {
    const newString = string.replace("**", '')
    
    const checkEmphasis = (str) => {
      if (newString.match(/\*\*/)) {

      }
    }


    console.log(string.replace("**", ''))
    return MD_TYPE.EMPHASIS
  }
  if (string.match(/^#\x20/)) {
    return MD_TYPE.HEADER_1
  }
  if (string.match(/^#\x20/)) {
    return MD_TYPE.HEADER_1
  }
  if (string.match(/^#\x20/)) {
    return MD_TYPE.HEADER_1
  }
  if (string.match(/^#\x20/)) {
    return MD_TYPE.HEADER_1
  }
  if (string.match(/^#\x20/)) {
    return MD_TYPE.HEADER_1
  }
}
var data = fs.readFileSync('input.md').toString()

const dataArray = data.split(/\n/)
let pageObj = new Map()
dataArray.forEach((item) => {
  // 普通文字
  stringTest(item)
})
// console.log(data.match(/^(#+)\x20/),'data2')
// console.log(data.match(/\x20/),'data')

const writeFile = () => {
  fs.writeFile('input.json', data,  function(err) {
    if (err) {
      return console.error(err);
    }
  });
}

writeFile()
// const outpusFile = 'input.json'
// const fileExists = (file) => {
//   const res = new Promise((resolve, reject) => {
//     fs.access(file,fs.constants.F_OK, (err) => {
//       if (err) {
//         reject(false)
//       } else {
//         resolve(true)
//       }
//     })
//   })
//   return res
// }
// fileExists(outpusFile).then((res) => {
//   deleteFile(outpusFile)
// }).catch((e)=>{
//   writeFile()
// })
// const deleteFile = () => {
//   const res = new Promise(resolve => {
//     fs.unlink('input.json', function(err) {
//       if (err) {
//           return console.error(err);
//       }
//       resolve(true)
//     });
//   })
// }
