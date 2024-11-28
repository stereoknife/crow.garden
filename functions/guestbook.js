export async function onRequestGet(context) {
	const query = context.env.CROW_DB.prepare('SELECT * FROM guestbook')
	const data = await query.run()
	return new Response(JSON.stringify(data.results))
}

export async function onRequestPost(context){
	const body = context.request.body
	console.log(body)
	const query = context.env.CROW_DB
		.prepare('INSERT INTO guestbook VALUES(?, ?, ?)')
		.bind(body.name, body.comment, body.site)
	await query.run()
	return new Response('ok')
}