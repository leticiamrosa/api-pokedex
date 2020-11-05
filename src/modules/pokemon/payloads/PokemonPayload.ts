
interface QueryPayload {
  pokemon: string;
}
export default class PokemonPayload {
  public query: QueryPayload;

  public constructor ({ pokemon }: QueryPayload) {
    this.query = {
      pokemon
    }
  }
}
