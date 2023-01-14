/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const path = require('path')

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    { type: 'doc', id: '你在开玩笑吧？' },
    { type: 'doc', id: '我才不吃这种嗟来之食' },
    { type: 'doc', id: '如果我能给妈妈写封信的话' },
    { type: 'doc', id: '她和我都是魔法少女' },
    { type: 'doc', id: '你不能告诉我吗' },
    { type: 'doc', id: '你说过你会回来！你保证过！' },
    { type: 'doc', id: '你不能被她骗了！' },
    { type: 'doc', id: '丘比说她是“怪胎” 不管那是什么意思' },
    { type: 'doc', id: '重要的是不能放弃' },
    { type: 'doc', id: '晓美焰的弱点是你' },
    { type: 'doc', id: '我敢打赌，你认为这真的很棒！' },
    { type: 'doc', id: '我在梦里遇见了一个人' },
    { type: 'doc', id: '我们需要一个团队' },
    { type: 'doc', id: '你一定是只菜鸟' },
    { type: 'doc', id: '你不需要去担心暴风雨！' },
    { type: 'doc', id: '你必须自己做出选择' },
    { type: 'doc', id: '没有其他人' },
    { type: 'doc', id: '我试图和她最亲近的一次' },
    { type: 'doc', id: '只是另一种形式的精神错乱' },
    { type: 'doc', id: '我一直都在' },
  ],

  // But you can create a sidebar manually

  // tutorialSidebar: [
  //   '01/'
  //   // {
  //   //   type: 'category',
  //   //   label: '量子纠缠',
  //   //   items: ['01/001-第一章-许愿.md'],
  //   // },
  // ],
}

module.exports = sidebars
