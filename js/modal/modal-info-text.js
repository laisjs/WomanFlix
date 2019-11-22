let textPlace = document.getElementById('info-text')

Array.from(btnList).forEach((btn) => {
    btn.addEventListener('click', setText);
})

function setText () {
    switch (this.getAttribute('data-film')) {
        case 'hist-cruz':
            textPlace.innerHTML = 'Jackson, pequena cidade no estado do Mississipi, anos 60. Skeeter (Emma Stone) é uma garota da sociedade que retorna determinada a se tornar escritora. Ela começa a entrevistar as mulheres negras da cidade,'
            +'que deixaram suas vidas para trabalhar na criação dos filhos da elite branca, da qual a própria Skeeter faz parte. Aibileen Clark (Viola Davis),' 
            +'a empregada da melhor amiga de Skeeter, é a primeira a conceder uma entrevista, o que desagrada a sociedade como um todo. '
            +'Apesar das críticas, Skeeter e Aibileen continuam trabalhando juntas e, aos poucos, conseguem novas adesões.'
        break;
        case 'pant':
            textPlace.innerHTML = 'Três multitalentosas e inteligentes detetives trabalham para Charlie,' 
            +'chefe de uma agência de detetives que evita sempre o confronto cara-a-cara com suas contratadas. '
            +'Contrárias ao uso de armas, as Panteras, como são conhecidas, '
            +'enfrentam seu maior desafio quando passam a investigar o sequestro do bilionário Eric Knox (Sam Rockwell), '
            +'que pode fazer com que sua empresa, a Knox Tecnologies, perca milhões de dólares.'
        break;
        case 'pant-19':
            textPlace.innerHTML = 'Sabina Wilson (Kristen Stewart) e Jane Kano (Ella Balinska) são duas Panteras que precisam deixar as '
            +'diferenças de lado quando embarcam em uma aventura internacional junto à nova Bosley (Elizabeth Banks) e com a cientista Elena Houghlin (Naomi Scott). '
            +'Elas precisam impedir que um novo programa de energia '
            +'se torne uma ameaça para a humanidade e descobrir quem está por trás de um plano tão maligno.'
        break;
        case 'cap-marv':
            textPlace.innerHTML = 'Carol Danvers (Brie Larson) é uma ex-agente da Força Aérea norte-americana, que, sem se lembrar de sua vida na Terra,' 
            +'é recrutada pelos Kree para fazer parte de seu exército de elite. Inimiga declarada dos Skrull, ela acaba voltando '
            +'ao seu planeta de origem para impedir uma invasão dos metaformos, e assim vai acabar descobrindo a '
            +'verdade sobre si, com a ajuda do agente Nick Fury (Samuel L. Jackson) e da gata Goose.'
        break;
        case 'extr-fut':
            textPlace.innerHTML = 'Na sexta aventura da saga Exterminador do Futuro, Arnold Schwarzenegger interpreta novamente o papel icônico de T-800, enquanto Linda Hamilton encarna mais uma vez Sarah Connor.'
        break;
        case 'jog-voraz':
        break;
        case 'mul-mar':
        break;
        case 'ond-est':
        break;
        case 'amelie':
        break;
        case 'kill-bill':
            textPlace.innerHTML = 'A Noiva (Uma Thurman) é uma perigosa assassina que trabalhava em um grupo'
            +'liderado por Bill (David Carradine), composto principalmente por mulheres.'
            + '+ "Grávida,  ela decide escapar dessa vida de violência e decide se casar, mas no dia da cerimônia' 
            + 'seus companheiros de trabalho se voltam contra ela, quase a matando.'
            + 'Após cinco anos em coma, ela desperta sem um bebê e com um único desejo: vingança'
            +' A Noiva decide procurar, e matar, as cinco pessoas que destruiram o seu futuro, começando pelas perigosas'
            +'assassinas Vernita Green (Vivica A. Fox) e O-Ren Ishii (Lucy Liu)'
            break;
    }
}       




