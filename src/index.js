const run = () => {
  var a = 1
  console.log('run', a)
}

;[].forEach.call({ length: 2 }, run)

run()
