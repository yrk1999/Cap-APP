module.exports = (srv) => {
    srv.on('markComplete', 'Books', async (req) => {
        const ID = req.params[0].ID
        await UPDATE('Books').set({ completed: true }).where({ ID })
        return req.reply({ message: `Book ${ID} marked complete` })
    })
}