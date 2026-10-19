import i18n from 'assets/i18n.json'
import icons from 'assets/icons.svg'
import { Pagex, useFx, usePage } from 'nextia'
import { useRef } from 'react'
import { env } from 'utils'
import functions from './functions.js'

const PAGES = {
  home: () => import('./home/index.jsx'),
  //
  notFound: () => import(`./not-found.jsx`)
}

export default function Pages() {
  const pages = useFx({}, functions)

  const { qs } = pages
  const viewTransitionRef = useRef()

  const Page = usePage({
    hashPage: qs.hash,
    homePage: '#/home',
    currentPage: (path) => PAGES[path.join('/')] ?? PAGES.notFound,
    viewTransition: viewTransitionRef,
    viewTransitionName: env.VIEW_TRANSITION_NAME
  })

  return (
    <Pagex
      value={{
        context: pages,
        icons,
        i18n
      }}
    >
      <main ref={viewTransitionRef} className="m-2">
        {Page && <Page context={pages} qs={qs} />}
      </main>
    </Pagex>
  )
}
