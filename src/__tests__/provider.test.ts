import { Provider } from './../'

describe('Page test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('Provider is instantiable', () => {
    expect(Provider).toBeInstanceOf(Function)
  })
})
