import { fs, path } from 'zx'

const list = fs
  .readdirSync(__dirname)
  .filter((it) => it.endsWith('.md'))
  .map((it) => path.resolve(__dirname, it))

/**
 * @param {string} title
 * @example **第二章 我不会接受她的任何东西**
 * @returns {string}
 * @example # 第二章 我不会接受她的任何东西
 */
function replaceTitle(s) {
  return s.replace(/(\*\*)(.*?)(\*\*)/, '# $2')
}

list.forEach((it) => {
  console.log(path.basename(it))
  const s = fs.readFileSync(it, 'utf-8').trimStart()
  const i = s.indexOf('\n')
  const t = s.slice(0, i)
  const e = s.slice(i)
  const r = replaceTitle(t) + e
  fs.writeFileSync(it, r)
})
