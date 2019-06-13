const testVar = {}

function testFunc() {
  return "hi"
}

// function superbowlWin(array) {
//   array.forEach(year => {
//     // console.log(year.result)
//     year.find( x => x.result === 'W')
//   })
// }

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}