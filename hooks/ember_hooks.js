 const ONLY_TEXT_IN_NAVIGATION = [
    {
        // 关闭导航栏文字
        matcher: 'main-navigation-menu-item',
        mixin: (Ember, args) => ({
            shouldDisplayTextBelowIcons: false,
        })
    }
]   

// BYD为什么会让整个选人UI黑掉还爆卡呢？暂时不应用功能，不需要在文件的最后导出
const MUTE_AND_REPORT_WHEN_SELECTING = [
    {
        // 选人时举报和静音
        matcher:"summoner-array",
        mixin: (Ember, args) => ({
            shouldShowReportAndMutingTooltip:true
        })
    }
]



export const EMBER_COMPONENT_HOOKS = [
    ...ONLY_TEXT_IN_NAVIGATION,

]
