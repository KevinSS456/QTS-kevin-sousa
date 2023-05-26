import{
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http:"

let aluno = 'Crovis Jose'
let professores = ['Jose','Lais','Davi','Bruno Aparecido Cano']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Crovis Jose");
    assertStringIncludes(aluno, "Jose")
})