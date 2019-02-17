//Console.log out elements in JSON file

var data = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
};


for (var i in data.video)
{
    console.log(data.video[i].id)
    console.log(data.video[i].name)
    console.log(data.video[i].url)

    for (var s in data.video[i].author.data)
    {
      console.log(data.video[i].author.data[s].name_author)
      console.log(data.video[i].author.data[s].url)
      console.log(data.video[i].author.data[s].type)
    }
}
