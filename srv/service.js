const create = require('../handlers/create')
const update = require('../handlers/update')
const del = require('../handlers/delete')

module.exports = cds.service.impl(async function () {
    create(this)
    update(this)
    del(this)
})