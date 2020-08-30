const fp = require('lodash/fp')
const { Maybe, Container } = require('./support.js');

// 练习 1    不会用fp.map,fp.add结合使用
// let maybe = Maybe.of([5, 6, 1])
// let count = (arr) => {
// 	let maybeN = 0
// 	arr.map(ele => {
// 		maybeN += ele
// 	})
// 	return maybeN
// }
// let ex1 = () => {
// 	let r1 = maybe.map(x => count(x))
// 	console.log(r1)
// }
// ex1()


// 练习 2
// let xs = Container.of(['do','ray', 'me','fa','so','la','ti','do'])
// let ex2 = () => {
// 	let r2 = xs.map(x=>fp.first(x))
// 	console.log(r2)
// }
// ex2()


// 练习 3
// let safeProp = fp.curry((x,o)=>Maybe.of(o[x]))
// let user = { id:2, name:'Albert'}

// let ex3 = () => {
// 	let r3 = safeProp('name')(user).map(x=>fp.first(x))
// 	console.log(r3)
// }
// ex3()


// 练习 4
let ex4 = () => {
	let r4 = Maybe.of('').map(x=> x ? parseInt(x) : x)
	console.log(r4)
}
ex4()