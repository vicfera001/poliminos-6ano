# Missão Poliminós — 6º ano

Proposta didática do Prof. Me. Victor Ferauche. Adaptação digital preparada a partir do HTML e do material de aula fornecidos pelo professor.

## Usar
Abra `index.html` no navegador. Funciona sem instalação e sem acesso à internet, inclusive após baixar os arquivos. Mantenha `jogo-original.html` na mesma pasta para acessar a extensão de peças em queda. Não há serviços externos, cadastro ou envio de respostas.

O aplicativo é uma adaptação das instruções do material impresso: não reproduz sua planta, suas imagens ou a posição dos três móveis juntos. O centro P é definido explicitamente na malha digital. O desafio de reflexão amplia a proposta. Use a folha original para discutir paredes, porta, janela e sobreposição de móveis.

## Roteiro de aula sugerido — 2 aulas de 50 minutos

1. **Aula 1:** 10 minutos com as peças físicas; 10 minutos para comparar translação, rotação e reflexão; 25 minutos em duplas nas missões 1 e 2, alternando quem explica e quem executa; 5 minutos para compartilhar instruções e baixar os registros.
2. **Aula 2:** 10 minutos para retomar o centro de rotação e o eixo de reflexão; 20 minutos para as missões 3 e 4; 15 minutos para comparar área e perímetro de diferentes pentaminós; 5 minutos para registrar conclusões. Reserve o protótipo de peças em queda como extensão.

### Evidências de aprendizagem
Observe se o aluno especifica direção, sentido e quantidade; identifica o centro fixo e o eixo; revisa passos; conta quadrados e lados externos; justifica a conservação de forma, área e perímetro. A conferência automática não avalia a qualidade do texto. Não atribua nota somente ao contador de missões ou ao placar de linhas.

### Gabarito do professor

| Missão | Caminho direto | Área | Perímetro |
| --- | --- | --- | --- |
| Sofá U | 3 casas para a direita | 5 u² | 12 u |
| Mesa P | 2 casas para baixo e 1 para a esquerda | 5 u² | 10 u |
| Cadeira V | 90° no sentido horário em torno de P | 5 u² | 12 u |
| Pentaminó F | reflexão no eixo vertical indicado | 5 u² | 12 u |

Caminhos equivalentes de translação são aceitos. As missões de rotação e reflexão restringem os comandos ao tipo investigado. O número de missões concluídas é cumulativo durante a sessão; reiniciar permite refazer uma missão sem apagar a conclusão anterior. O registro não é salvo automaticamente: baixe-o antes de fechar ou recarregar.

## Publicar no GitHub Pages

1. Entre em https://github.com/new com sua conta `vicfera001`.
2. Crie um repositório público chamado `poliminos-6ano`, inicializando com um README.
3. Na página do repositório, escolha **Add file → Upload files**. Envie o conteúdo desta pasta, colocando `index.html` na raiz, e confirme o commit. Não envie o DOCX da aula nem registros dos estudantes.
4. Em **Settings → Pages → Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main`, pasta `/(root)`, e salve.
6. Aguarde a publicação e abra o endereço exibido em Pages. Se usar o nome sugerido, o endereço esperado é `https://vicfera001.github.io/poliminos-6ano/`.
7. Teste o endereço publicado no Chromebook antes da aula. O endereço esperado não significa que o site já foi publicado.

Referências oficiais: https://docs.github.com/en/pages/quickstart e https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Arquivos e manutenção

- `index.html`: atividade guiada em português, com CSS e JavaScript incorporados.
- `jogo-original.html`: HTML original fornecido, preservado para comparação e extensão; suas limitações constam em `REVISAO_PEDAGOGICA.md`.
- `REVISAO_PEDAGOGICA.md`: diagnóstico pedagógico e técnico.
- `verificar.cjs`: verificações de geometria e interface com Node.js e Playwright; executar `node verificar.cjs --math-only` para geometria ou `node verificar.cjs` para a interface em ambiente com Playwright/Chromium instalados. Não são necessários para jogar.

O pacote não inclui as imagens do material impresso nem escolhe uma licença de redistribuição para o professor.

## Validação nesta entrega

Verificações matemáticas automatizadas passaram. A execução em DOM simulado também passou para as quatro missões, feedback de cálculos incorretos, desfazer e manutenção dos registros ao trocar de missão. A execução visual em Chromium ficou bloqueada pela ausência do navegador e falha de download no ambiente. Antes de usar com a turma, confira visualmente a página no Chromebook.
