# Configuração do Banner

Este diretório contém as configurações do banner principal do site.

## Como Editar o Banner

Para editar o banner, você precisa modificar o arquivo `banner.ts`. Cada slide do banner é um objeto com as seguintes propriedades:

```typescript
{
  id: number;        // ID único do slide
  image: string;     // Caminho da imagem (deve estar na pasta public)
  title: string;     // Título do slide
  subtitle: string;  // Subtítulo do slide
}
```

### Exemplo de Edição

```typescript
export const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    image: '/banner1.jpg',  // Substitua pelo caminho da sua imagem
    title: 'Seu Título',    // Edite o título
    subtitle: 'Seu Subtítulo', // Edite o subtítulo
  },
  // ... outros slides
];
```

### Duração dos Slides

Você pode ajustar a duração de cada slide modificando a constante `SLIDE_DURATION` (em milissegundos):

```typescript
export const SLIDE_DURATION = 5000; // 5 segundos
```

## Requisitos das Imagens

- As imagens devem estar na pasta `public`
- Recomendado: 1920x1080px para melhor qualidade
- Formato: JPG ou PNG
- Tamanho máximo recomendado: 500KB por imagem 