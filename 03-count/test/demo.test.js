
test("no puede fallar", ()=>{
  const mesage = "hola mundo";
  const mesage2 = mesage.trim();

  expect(mesage).toBe(mesage2);
    
});
