import nextiaSvg from 'assets/img/nextia.svg'
import { css, Icon, Svg } from 'nextia'
import './style.css'

export default function Nextia({ className, style }) {
  return (
    <article className={css('Nextia', className)} style={style}>
      <Svg src={nextiaSvg} viewBox="0 0 940 540" className="nextia-svg" />
    </article>
  )
}
