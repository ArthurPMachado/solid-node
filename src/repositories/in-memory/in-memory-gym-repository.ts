import { Gym } from '@prisma/client'
import { IGymsRepository } from '@/interfaces/IGymRepository'

export class InMemoryGymRepository implements IGymsRepository {
  public items: Gym[] = []

  async findById(id: string) {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) {
      return null
    }

    return gym
  }
}
