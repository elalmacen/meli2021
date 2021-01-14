import MeliService from '../meli.service';


describe('Call API', () => {
    test('Get Product Detail', async () => {
        const id = 'MLA850382509';
        expect.assertions(1);
        const data = await MeliService.getDetailProducts(id);
        expect(data).toHaveProperty('status', 200);
    });
    
    test('Get Products Search', async () => {
        const query = 'Batman';
        expect.assertions(1);
        const data = await MeliService.searchProducts(query);
        expect(data).toHaveProperty('status', 200);
    });
});