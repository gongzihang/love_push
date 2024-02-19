/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx847198fb53d08a12',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '90489294522862423cf170a22ea2f9dd',

  PROVINCE: '山东',
  CITY: '泗水',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onDob6jk4L-aRJPwp07n9-M5EnmI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '--eqetO5E69lEzLkUd7kGIwU3dIhh7bTITf76B0PVtk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-20',
      festivals: [
        // // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // {
        //   type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        // },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2005', date: '02-20',
        },
        {
        {
          type: '生日', name: '公仔', year: '2004', date: '02-01',
        },
          type: '节日', name: '相识纪念日', year: '2023', date: '08-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-09-17' },
        // // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	G2LKa9iPbI5zMxT-fh9IISKv9sZn1E11pJtn9K8PHig',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onDob6jk4L-aRJPwp07n9-M5EnmI',
    }
  ],

}

module.exports = USER_CONFIG

