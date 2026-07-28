import { Nextia } from 'components'
import { useFx } from 'nextia'
import functions from './functions'

export default function HomePage() {
  const { state, initialState, fx, context } = useFx(functions)

  return (
    <section>
      <br />
      <Nextia />
      <h2 className="text-center">nextia.dev</h2>
    </section>
  )
}
