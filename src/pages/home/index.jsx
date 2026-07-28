import { Nextia } from 'components'
import { useFx } from 'nextia'
import functions from './functions'

export default function HomePage() {
  const { state, initialState, fx, context } = useFx(functions)

  return (
    <section>
      <br />

      <Nextia />

      <div className="text-center">
        <h2>nextia.dev</h2>
        <p>npm i nextia</p>
      </div>
    </section>
  )
}
