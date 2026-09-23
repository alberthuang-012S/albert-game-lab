const gameSections = document.querySelector("#game-sections");

function createGameCard(game) {
  const card = document.createElement("a");
  card.className = "game-card";
  card.href = game.url;
  card.target = "_blank";
  card.rel = "noopener noreferrer";
  card.setAttribute("aria-label", `${game.name}（在新分頁開啟）`);

  if (game.image) {
    card.classList.add("has-image");

    const image = document.createElement("img");
    image.className = "game-card-image";
    image.src = game.image;
    image.alt = `${game.name}遊戲畫面`;
    image.loading = "lazy";
    card.append(image);
  }

  const content = document.createElement("div");
  content.className = "game-card-content";

  const title = document.createElement("h3");
  title.className = "game-card-title";
  title.textContent = game.name;

  const description = document.createElement("p");
  description.className = "game-card-description";
  description.textContent = game.description;

  const linkText = document.createElement("span");
  linkText.className = "game-card-link";
  linkText.textContent = "開始遊戲 →";

  content.append(title, description, linkText);
  card.append(content);

  return card;
}

function renderGames() {
  const fragment = document.createDocumentFragment();
  let renderedGameCount = 0;

  categories.forEach((category) => {
    const categoryGames = games.filter((game) => game.category === category.id);

    // 沒有遊戲的分類不顯示，避免留下空區塊。
    if (categoryGames.length === 0) return;

    const section = document.createElement("section");
    section.className = "category-section";
    section.setAttribute("aria-labelledby", `category-${category.id}`);

    const heading = document.createElement("h2");
    heading.className = "category-heading";
    heading.id = `category-${category.id}`;
    heading.textContent = category.name;

    const grid = document.createElement("div");
    grid.className = "game-grid";

    categoryGames.forEach((game) => {
      grid.append(createGameCard(game));
      renderedGameCount += 1;
    });

    section.append(heading, grid);
    fragment.append(section);
  });

  if (renderedGameCount === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "目前還沒有公開的遊戲。";
    fragment.append(message);
  }

  gameSections.replaceChildren(fragment);
}

renderGames();
