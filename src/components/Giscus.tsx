import React from 'react'

export function Giscus() {
  const commentElement = React.useRef(null)
  React.useEffect(() => {
    // Update the document title using the browser API
    let s = document.createElement('script')
    s.src = 'https://giscus.app/client.js'
    s.setAttribute('data-repo', 'liuli-moe/persephone-s-waltz')
    s.setAttribute('data-repo-id', 'R_kgDOIxmT8Q')
    s.setAttribute('data-category', 'Announcements')
    s.setAttribute('data-category-id', 'DIC_kwDOIxmT8c4CTlsO')
    s.setAttribute('data-mapping', 'pathname')
    s.setAttribute('data-reactions-enabled', '1')
    s.setAttribute('data-emit-metadata', '0')
    s.setAttribute('data-input-position', 'bottom')
    s.setAttribute('data-theme', 'preferred_color_scheme')
    s.setAttribute('data-lang', 'zh-CN')
    s.setAttribute('crossorigin', 'anonymous')
    s.async = true
    commentElement.current.appendChild(s)
  }, [])

  return (
    <div
      className={'giscus'}
      style={{ marginTop: '20px' }}
      ref={commentElement}
    ></div>
  )
}
