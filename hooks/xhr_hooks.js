
export const XHR_HOOKS = [
    {
        // 开启聊天小窗 打开个人状态
        matcher: "/lol-platform-config/v1/namespaces/LcuSocial",
        preSend: (XhrRequestConfig) => {},
        postSend: (response) => {
            const respJson = JSON.parse(response.response)
            respJson["ChatWindowPopoutEnabled"] = true
            respJson["StatusesDisabled"] = false
            response.response = JSON.stringify(respJson)
            
        }
    },
    {
        // 开启炫彩页面
        matcher: "/lol-platform-config/v1/namespaces/LCUCollections/LCUCollectiblesChromasEnabled",
        preSend: (XhrRequestConfig) => {},
        postSend: (response) => {
            response.response = true
        }
    },
    {
        // 无视生涯隐私
        matcher:"/lol-summoner/v1/profile-privacy-enabled",
        preSend: (XhrRequestConfig) => {},
        postSend: (response) => {
            response.response = "FUCK U TENCENT"
        }
    }
]