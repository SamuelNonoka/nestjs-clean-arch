import { validate as uuidValidate } from "uuid"
import { Entity } from "../../entity"

type StubProps = {
  prop1: string,
  prop2: number
}

class StubEntity extends Entity<StubProps>{}

describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props: StubProps = {
      prop1: 'value1',
      prop2: 15
    }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity.id)).toBeTruthy()
  })

  it('should accept a valid uuid', () => {
    const props: StubProps = {
      prop1: 'value1',
      prop2: 15
    }
    const id = '15b21cd9-90c9-43e7-8517-a355574477c3'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity.id)).toBeTruthy()
    expect(entity.id).toBe(id)
  })

  it('should convert a entity to a Javascript Object', () => {
    const props: StubProps = {
      prop1: 'value1',
      prop2: 15
    }
    const id = '15b21cd9-90c9-43e7-8517-a355574477c3'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props
    })
  })
})
