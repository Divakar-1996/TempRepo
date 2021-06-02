// const os=require('os')
// // info about current user
// const user = os.userInfo()
// console.log(user)
// //
// const time = os.uptime()
// console.log(time)
// console.log(`the system up time is ${os.uptime()} sec`)


// const currentOS = {
//   name:os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem:os.freemem(),
// }
// console.log(currentOS)



// const path = require('path')


// console.log(path.sep)

// const filePath=path.join('/subfolder','test.txt')

// console.log(filePath)

// const base=path.basename(filePath)
// console.log(base)

// const absolute = path.resolve(__dirname,'subfolder','test.txt')

// console.log(absolute)



// const {readFileSync,writeFileSync}  = require('fs')
// const first = readFileSync('./subfolder/first.txt','utf8')
// const second = readFileSync('./subfolder/test.txt','utf8')

// console.log(first,second)


// writeFileSync('./subfolder/result-sync.txt',
// `here is the result:${first},${second}`,{flag:'a'})




const {readFile,writeFile}  = require('fs')

readFile('./subfolder/first.txt','utf8',(err,result)=>{
  if(err)
  {
    console.log(err)
    return
  }
  const first  = result;
  readFile('./subfolder/test.txt','utf8',(err,result)=>{
    if(err)
  {
    console.log(err)
    return
  }
  const second = result
  writeFile('./subfolder/result-asyn.txt',
  `here is the result: ${first},${second}`,
  (err,result)=>{
    if(err)
    {
      console.log(err)
      return
    }
  })
  })
  console.log(result)
})





