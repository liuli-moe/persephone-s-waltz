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
    { type: 'doc', id: 'ch01', label: '你在开玩笑吧？' },
    { type: 'doc', id: 'ch02', label: '我才不吃这种嗟来之食' },
    { type: 'doc', id: 'ch03', label: '如果我能给妈妈写封信的话' },
    { type: 'doc', id: 'ch04', label: '她和我都是魔法少女' },
    { type: 'doc', id: 'ch05', label: '你不能告诉我吗' },
    { type: 'doc', id: 'ch06', label: '你说过你会回来！你保证过！' },
    { type: 'doc', id: 'ch07', label: '你不能被她骗了！' },
    { type: 'doc', id: 'ch08', label: '丘比说她是“怪胎” 不管那是什么意思' },
    { type: 'doc', id: 'ch09', label: '重要的是不能放弃' },
    { type: 'doc', id: 'ch10', label: '晓美焰的弱点是你' },
    { type: 'doc', id: 'ch11', label: '我敢打赌，你认为这真的很棒！' },
    { type: 'doc', id: 'ch12', label: '我在梦里遇见了一个人' },
    { type: 'doc', id: 'ch13', label: '我们需要一个团队' },
    { type: 'doc', id: 'ch14', label: '你一定是只菜鸟' },
    { type: 'doc', id: 'ch15', label: '你不需要去担心暴风雨！' },
    { type: 'doc', id: 'ch16', label: '你必须自己做出选择' },
    { type: 'doc', id: 'ch17', label: '没有其他人' },
    { type: 'doc', id: 'ch18', label: '我试图和她最亲近的一次' },
    { type: 'doc', id: 'ch19', label: '只是另一种形式的精神错乱' },
    { type: 'doc', id: 'ch20', label: '我一直都在' },
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
