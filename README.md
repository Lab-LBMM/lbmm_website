# lbmm_website
# Website Pessoal - Dr. Renato A. Corrêa dos Santos
Landing page pessoal moderna e responsiva para o Dr. Renato A. Corrêa dos Santos, desenvolvida com as melhores práticas de desenvolvimento web.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com SSR e SSG
- **TypeScript** - Tipagem estática para maior segurança
- **Material UI (MUI) 5** - Biblioteca de componentes React mais atual
- **Atomic Design** - Metodologia de design de componentes
- **MVC Pattern** - Arquitetura organizada e escalável

## 📁 Estrutura do Projeto

```
├── app/                    # Páginas Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/
│   ├── atoms/             # Componentes básicos (botões, títulos)
│   ├── molecules/         # Componentes compostos (cards, formulários)
│   ├── organisms/         # Componentes complexos (Header, Footer)
│   ├── templates/         # Templates de seções (About, Contact, etc.)
│   └── theme/             # Configuração do tema MUI
├── controllers/           # Lógica de negócio (MVC)
├── models/                # Modelos de dados (MVC)
└── public/                # Arquivos estáticos
```

## 🎨 Seções do Site

1. **Home** - Apresentação principal com hero section
2. **Sobre** - Biografia e áreas de atuação
3. **Iniciativas Ativas** - Projetos em andamento
4. **Currículo** - Publicações, experiência e formação
5. **Colaborações** - Parceiros e colaboradores
6. **Contato** - Formulário e informações de contato

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

O site estará disponível em `http://localhost:3000`

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- 📱 Mobile (smartphones)
- 📱 Tablet
- 💻 Desktop
- 🖥️ Large screens

## 🎯 Features

- ✅ Design moderno e atraente
- ✅ Navegação suave entre seções
- ✅ Header fixo com transparência
- ✅ Sidebar para mobile
- ✅ Formulário de contato
- ✅ Cards interativos com hover effects
- ✅ Tema personalizado Material UI
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🔧 Personalização

### Alterar dados pessoais

Edite o arquivo `controllers/DataController.ts` para atualizar:
- Informações pessoais
- Publicações
- Colaborações
- Iniciativas
- Contato

### Personalizar tema

Edite o arquivo `components/theme/ThemeProvider.tsx` para alterar cores, tipografia e outros aspectos visuais.

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Desenvolvido com

- Next.js
- Material UI
- TypeScript
- Atomic Design
- MVC Pattern

---

Desenvolvido com ❤️ para surpreender o Dr. Renato A. Corrêa dos Santos
