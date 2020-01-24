const brain = require('brain.js')
const trainingData = require('./data.json')
// input 0 0, output 0
// input 0 1, output 1
// input 1 0, output 1
// input 1 1, output 0

//new instance of breain
const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

//TRAIN the network
net.train(trainingData);

//HERE, the net has 'understood' what we gave it

//LOG a 'test' on the network
console.log(net.run([0, 0]));

/*
	returns [ 0.05800660327076912 ]
	this is not zero cause they cant get that specific.
*/

let testArrs = [
	[0,1],
	[1,0],
	[1,1]
]

testArrs.forEach(arr => {
	console.log(`test on ${JSON.stringify(arr)}`);
	console.log(net.run(arr));
	console.log('// - - - - - //')
})

/*
		Returns...
	[ 0.05684798210859299 ]
	
	test on [0,1]
	[ 0.9336038827896118 ]

	test on [1,0]
	[ 0.9330666661262512 ]

	test on [1,1]
	[ 0.08816725015640259 ]
*/