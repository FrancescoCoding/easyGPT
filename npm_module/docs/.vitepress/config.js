export default {
    title: 'easyGPT',
    themeConfig: {
        sidebar: [
            {
                text: 'Guide',
                items: [
                  { text: 'Getting Started', link: '/guide/getting-started' },
                  { text: 'Examples', link: '/guide/examples.md' },
                ]
            },
            {
                text: 'API Reference',
                items: [
                  { text: 'EasyGPT', link: '/reference/constructor' },
                  { text: 'setApiKey()', link: '/reference/setApiKey' },
                  { text: 'addRule()', link: '/reference/addRule.md' },
                  { text: 'addResponse()', link: '/reference/addResponse.md' },
                  { text: 'addMessage()', link: '/reference/addMessage.md' },
                  { text: 'clearChat()', link: '/reference/clearChat.md' },
                  { text: 'ask()', link: '/reference/ask.md' },
                  { text: 'advanced', link: '/reference/advanced.md' },
                  { text: 'ResponseObject', link: '/reference/ResponseObject.md' },
                ]
            },
            {
                text: 'API Reference (Advanced)',
                items: [
                  { text: 'setMaxTokens', link: '/reference/advanced/setMaxTokens' },
                  { text: 'setTemperature', link: '/reference/advanced/setTemperature' },
                  { text: 'setPresencePenalty', link: '/reference/advanced/setPresencePenalty' },
                  { text: 'setFrequencyPenalty', link: '/reference/advanced/setFrequencyPenalty' },
                  { text: 'exportChat', link: '/reference/advanced/exportChat' },
                  { text: 'importChat', link: '/reference/advanced/importChat' },
                  { text: 'changeModel', link: '/reference/advanced/changeModel' }
                ]
            }
        ]
        // footer: {
        //     message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 2019-present Evan You'
        // }
    }
}