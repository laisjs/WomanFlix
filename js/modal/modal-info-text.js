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
            textPlace.innerHTML = 'Carol Danvers (Brie Larson) é uma ex-agente da Força Aérea norte-americana,' 
            +'que, sem se lembrar de sua vida na Terra, é recrutada pelos Kree para fazer parte de seu exército'
            + 'de elite. Inimiga declarada dos Skrull, ela acaba voltando ao seu planeta de origem para impedir'
            + 'uma invasão dos metaformos, e assim vai acabar descobrindo a verdade sobre si, com a ajuda do agente'
            + 'Nick Fury (Samuel L. Jackson) e da gata Goose.'
        break;
        case 'extr-fut':
            textPlace.innerHTML = 'Na sexta aventura da saga Exterminador do Futuro, Arnold Schwarzenegger '
            +'interpreta novamente o papel icônico de T-800, enquanto Linda Hamilton encarna mais uma vez Sarah Connor.'
        break;
        case 'jog-voraz':
            textPlace.innerHTML = 'Num futuro distante, boa parte da população é controlada por um regime totalitário,' 
            +'que relembra esse domínio realizando um evento anual - e mortal - entre os 12 distritos sob sua tutela.' 
            +'Para salvar sua irmã caçula, a jovem Katniss Everdeen (Jennifer Lawrence) se oferece como voluntária'
            +'para representar seu distrito na competição e acaba contando com a companhia de Peeta Melark (Josh Hutcherson),' 
            +'desafiando não só o sistema dominante, mas também a força dos outros oponentes.'
        break;
        case 'mul-mar':
            textPlace.innerHTML ='Treinada desde cedo para ser uma guerreira imbatível, Diana Prince (Gal Gadot)'
            +'nunca saiu da paradisíaca ilha em que é reconhecida como princesa das Amazonas. '
            +'Quando o piloto Steve Trevor (Chris Pine) se acidenta e cai numa praia do local,'  
            +'ela descobre que uma guerra sem precedentes está se espalhando pelo mundo e '
            +'decide deixar seu lar certa de que pode parar o conflito. Lutando para acabar com todas as lutas,' 
            '+Diana percebe o alcance de seus poderes e sua verdadeira missão na Terra.'
        break;
        case 'ond-est':
            textPlace.innerHTML = '2073. O aumento crescente da população faz com que os recursos naturais da' 
            +'Terra se tornem cada vez mais escassos. A saída é investir em alimentos geneticamente modificados,' 
            +'Então, Nicolette Cayman (Glenn Close) surge com uma proposta drástica: cada casal pode ter'
            +'apenas um filho, e os irmãos são confinados em ambiente criogênico para serem despertados quando a' 
            +'situação do planeta estiver sob controle. Mesmo assim,' 
            +'Terrence Settman (Willem Dafoe) consegue salvar a vida de suas sete netas fazendo' 
            +'com que elas se revezem nos dias da semana.'
            +'Após 30 anos seguindo essa rotina, Segunda (Noomi Rapace), não retorna para casa.'
        break;
        case 'amelie':
            textPlace.innerHTML = 'Após deixar a vida de subúrbio que levava com a família, a inocente Amélie '
            +'(Audrey Tautou) muda-se para o bairro parisiense de Montmartre, onde começa a trabalhar como '
            +'garçonete. Certo dia encontra uma caixa escondida no banheiro de sua casa e, pensando que '
            +'pertencesse ao antigo morador, decide procurá-lo ­ e é assim que encontra Dominique (Maurice Bénichou).'
            +' Ao ver que ele chora de alegria ao reaver o seu objeto, a moça fica impressionada e adquire uma '
            +'nova visão do mundo. Então, a partir de pequenos gestos, ela passa a ajudar as pessoas que a rodeiam,'
            +' vendo nisto um novo sentido para sua existência. Contudo, ainda sente falta de um grande amor.'
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




