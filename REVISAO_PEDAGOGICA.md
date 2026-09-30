# Revisão pedagógica e técnica

## Diagnóstico

O protótipo contém os sete tetraminós e os doze pentaminós livres. As peças analisadas têm quatro ou cinco quadradinhos, respectivamente. Rotacionar a matriz e inverter suas colunas são operações válidas para obter orientações das peças.

A mecânica de queda aproxima o recurso de um jogo de encaixe. Pode motivar a turma, mas eliminar linhas não evidencia, por si só, compreensão de transformações. Faltam planejamento escrito, comparação entre início e fim, centro/eixo explícitos, contagem de área e perímetro e explicação do estudante.

## Mudanças da atividade guiada

| Questão no protótipo | Mudança em index.html | Finalidade |
| --- | --- | --- |
| Interface em inglês | Português, instruções em casas da malha | Reduzir barreira de leitura |
| Queda automática inicial | Missões sem timer | Permitir previsão e discussão |
| Pontos por linhas | Conclusões por destino e cálculos | Aproximar feedback do objetivo da aula |
| Sem plano ou explicação | Dois campos escritos e registro exportável | Produzir evidências para avaliação docente |
| Sem retorno ao passo anterior | Desfazer e reiniciar | Apoiar revisão do algoritmo |
| Centro/eixo implícitos | P fixo e eixo vertical desenhados | Dar significado geométrico aos comandos |
| HUD confunde posição com vetor | Deslocamento desde o início nas translações | Distinguir localização de movimento |
| Layout pode ser cortado | Malha SVG responsiva e página rolável | Uso em telas pequenas e Chromebook |
| Sem área/perímetro | Respostas com dicas específicas | Investigar invariantes e diferenças entre peças |

O centro P digital é o centro do quadradinho da coluna 6, linha 6. A reflexão usa o eixo vertical dessa coluna. Os índices internos aumentam para baixo; a interface explica sua convenção. O deslocamento não é apresentado como vetor de uma rotação ou reflexão.

## Limitações mantidas no arquivo original

`jogo-original.html` é uma cópia integral da proposta recebida, não a versão corrigida do jogo de queda. O relatório “Vector” mostra coordenadas de posição. A rotação ocorre em torno do centro da caixa da matriz, sem marcação do centro; a reflexão usa o eixo da caixa. Após rotações e reflexões intercaladas, somar ângulos e alternar “Flip” não descreve completamente a transformação resultante. Trocar o conjunto mantém blocos antigos; o reinício por grade cheia zera variáveis, mas não atualiza imediatamente os indicadores de score/lines. Teclas não impedem todos os comportamentos padrão; falta pausa explícita. Seu layout usa altura e largura rígidas que podem cortar controles. O download salva o HTML, não o estado JavaScript da partida.

Esses pontos não foram transferidos para a atividade guiada. Na extensão original, o professor deve orientar a exploração e evitar usar os indicadores como avaliação matemática.

## Precisões no material escrito

- “Há três tipos de transformações” deve ser contextualizado: “Nesta atividade, estudaremos três transformações que preservam forma e tamanho”. Existem outras transformações geométricas.
- Na definição geral de poliminó, exigir que *cada* quadrado compartilhe um lado exclui o monominó. Prefira “quando houver mais de um quadrado, eles devem formar uma figura conectada pelos lados”. A conectividade global também importa: a exigência local, sozinha, pode permitir grupos separados.
- Pentaminós não possuem buracos; contudo, isso não é uma restrição universal na definição de poliminós maiores.
- Espelhar a letra F deve mencionar o eixo; seus pontos, em geral, mudam de posição. Nem todo traço vertical permanece no mesmo lugar.
- EF06MA23 deve ser relacionada à construção de instruções passo a passo. Executar botões, isoladamente, não garante essa aprendizagem. A aplicação acrescenta registro escrito para apoiar o objetivo expresso no material do professor. Não apresenta a paráfrase do material como citação literal da BNCC.

## Avaliação sugerida

Avalie separadamente a precisão das instruções, identificação do centro/eixo, execução, cálculo e justificativa. O aplicativo confere automaticamente posição, área e perímetro; verifica apenas a presença dos textos. A qualidade dos argumentos exige leitura do professor. Não há ranking nem penalidade por tentativas.

A proposta está pronta para um teste piloto em sala. Verificações técnicas não substituem observar como os estudantes interpretam as instruções e os desenhos.
