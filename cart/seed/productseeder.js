var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/bookcart');
var products = [ 
	new Product({
		imagePath: 'https://i.pinimg.com/originals/93/89/5a/93895a8c2e6f2684f46eed06be17b538.jpg',
		title: 'The God Father',	
		price: 20
	}),
	new Product({
		imagePath: 'http://www.adazing.com/wp-content/uploads/2012/06/life-of-pi.jpg',
		title: 'Life of Pi',	
		price: 15
	}),
	new Product({
		imagePath: 'https://thoughtcatalog.files.wordpress.com/2013/10/9780743273565_custom-s6-c30.jpeg?w=409&h=624',
		title: 'The Great Gatsby',	
		price: 19.99
	}),
	new Product({
		imagePath: 'http://s3.amazonaws.com/images.thereadingroom.com/img/posts/Gabriellezsegal/thefaultinourstars_small.jpg',
		title: 'The Fault In Our Stars',	
		price: 12.99
	}),
	new Product({
		imagePath: 'http://www.adazing.com/wp-content/uploads/2012/06/harry-potter-and-the-sorcerers-stone.jpg',
		title: 'Harry Potter',	
		price: 12.99
	}),
	new Product({
		imagePath: 'http://i.huffpost.com/gadgets/slideshows/296089/slide_296089_2421899_free.jpg',
		title: 'A Game Of Thrones',	
		price: 19.99
	})
];
var done = 0;
for (var i = 0; i < products.length; i++)
{
	products[i].save(function(err, result) {
		done++;
		if (done === products.length) {
			exit();
		}

	});
}

function exit() {
	mongoose.disconnect();
}