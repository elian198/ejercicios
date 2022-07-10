import { getSaludo } from '../../src/base-de-prueba/produccion';

describe("compara metodo getSaludo", ()=>{
    test('debe retornar hola rober', () =>{

    const nombre = "rober";
    const mesage = getSaludo(nombre);

    expect(mesage).toBe('hola ${ nombre }');
    });
})