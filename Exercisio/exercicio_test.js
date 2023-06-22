//Feito por Isabelli Santiago e Kevin Santiago

import{
    assertNotEquals,
    assertEquals,
    assertExists,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts";

//Verifica se o numero é par
const equal = (number) => {
    return number % 2 == 0
}

Deno.test("Teste de Par Impar", () => {
    assertEquals(equal(2), true)
    assertEquals(equal(4), true)
})

//Verifica se tem valores diferentes

let v1 = "Sou Grande"
let v2 = "Sou Pequeno"


Deno.test("Teste são diferentes", () => {
    assertNotEquals(v1, v2);
})


//Verifica Se Existe
let sim = "Guanabara"

Deno.test("Teste Existe", () => {
    assertExists("Guanabara");
})

