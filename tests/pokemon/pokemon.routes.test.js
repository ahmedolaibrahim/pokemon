import request from 'supertest';
import app from '../../app/app';



describe("Integration tests", () => {

  beforeEach(() => {
    jest.setTimeout(15000);
  });

  afterAll(() => {
    app.close();
  })
  
  test('get all pokemons GET /pokemon/', async () => {
    const response = await request(app).get(`/api/v1/pokemon/`);
    expect(response.status).toEqual(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('get pokemon by name GET /pokemon/name/:name', async () => {
    const name = 'kakuna';
    const response = await request(app).get(`/api/v1/pokemon/name/${name}`);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe('kakuna');
    expect(response.body).toHaveProperty('abilities');
  });

  test('get most powerful pokemon from list GET /pokemon/compare', async () => {
    const response = await request(app)
                            .post(`/api/v1/pokemon/compare/`)
                            .send({ pokemonList:['spearow', 'kakuna']});
    expect(response.status).toEqual(200);
    expect(response.body).toEqual("kakuna is the most powerful with 5 moves");
  });
});