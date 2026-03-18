module.exports = (srv) => {
    srv.before('DELETE', 'Books', (req) => {
        console.log(`Deleting book ${req.params[0].ID}`)
    })
}