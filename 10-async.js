const {readFile,writeFile}  = require('fs')
console.log('start')
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
    console.log('done with this task')
  })
  })
  
})

console.log("starting next task")
