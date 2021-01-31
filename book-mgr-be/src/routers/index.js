const auth = require('./auth/index');
const book = require('./book')
const InviteCode = require('./invite-code/index.js')

module.exports = (app) => {
    app.use(auth.routes());
    app.use(InviteCode.routes());
    app.use(book.routes());
}