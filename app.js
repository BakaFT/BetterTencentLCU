import { hookXhr, wrap_method, hookEmber } from './util'

export function init(context) {
    // 尽早完成对XHR的Hook，所以选择第一个能够Hook的RCP
    context.rcp.postInit('rcp-fe-lol-l10n', api => {
        hookXhr()
    })
    // 尽早完成对Ember的Hook，所以选择在Ember-libs加载完毕后立刻进行
    context.rcp.postInit('rcp-fe-ember-libs', async api => {
        wrap_method(api, 'getEmber', function (original, args) {
            const res = original(...args)
            return res.then(Ember => {
                hookEmber(Ember)
                return Ember
            })
        })
    })
}

