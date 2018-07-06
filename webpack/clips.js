const context = require.context("../_clips", true, /.md/)
const clips = (ctx => {
    let keys = ctx.keys()
    let values = keys.map(ctx)
    return keys.reduce((o, k, i) => {
        o[k] = values[i]
        return o
    }, {})
})(context)

export default clips

