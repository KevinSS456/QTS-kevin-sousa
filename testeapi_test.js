import{
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts";

let aluno = 'Crovis Jose'
let professores = ['Jose','Lais','Davi','Bruno Aparecido Cano']
let numeros = [11, 24,69]

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Crovis Jose");
    assertStringIncludes(aluno, "Jose");
})

Deno.test("Teste de assertivos (API)", () =>{
    assertArrayIncludes(professores
        ["Davi","Lais","Alan"],
    "Opa! Algo deu errado");

})
Deno.test("Testando numeros", () =>{
       assertArrayIncludes(numeros,[11])
})