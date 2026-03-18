module.exports = (srv) => {
    srv.before('CREATE', 'Books', (req) => {
        if (!req.data.title) req.error(400, 'Title is required')
    })
}