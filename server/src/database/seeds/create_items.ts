import { Knex } from "knex";

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg' },
        { title: 'Pilhas', image: 'baterias.svg' },
        { title: 'Papeis e Papelão', image: 'papeis_papelao.svg' },
        { title: 'Resíduos Eletronicos', image: 'eletronico.svg' },
        { title: 'Resíduos Organicos', image: 'organicos.svg' },
        { title: 'Óleo de Cozinha', image: 'oleo.svg' },
    ])

}