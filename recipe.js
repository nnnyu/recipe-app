import { 
  getFirestore, collection, getDocs, deleteDoc, doc 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBmruN7YtMIdMiLjPLiJKu-9qFKis2aAo",
  authDomain: "homepage-54937.firebaseapp.com",
  projectId: "homepage-54937",
  storageBucket: "homepage-54937.appspot.com",
  messagingSenderId: "225362177833",
  appId: "1:225362177833:web:8b4f8da23231997ff75138",
  measurementId: "G-7F86C9SCZ3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchIngredientsWithIds() {
  const snapshot = await getDocs(collection(db, "foods"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    name: doc.data().name
  }));
}

function showIngredients(list) {
  const container = document.getElementById("ingredients");

  if (list.length === 0) {
    container.innerHTML = "食材が登録されていません";
    return;
  }

  container.innerHTML = list.map(
    (item) => `
      <div class="ingredient-item">
        <span class="ingredient-name">${item.name}</span>
        <button class="delete-btn" data-id="${item.id}">削除</button>
      </div>
    `
  ).join("");

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      await deleteDoc(doc(db, "foods", btn.dataset.id));
      const updated = await fetchIngredientsWithIds();
      showIngredients(updated);
    });
  });
}

async function suggestRecipe() {
  const loadingEl = document.getElementById("loading");
  const recipeCard = document.getElementById("recipe-card");
  const recipeEl = document.getElementById("recipe");

  loadingEl.style.display = "block";
  recipeCard.style.display = "none";

  const ingredientsData = await fetchIngredientsWithIds();
  showIngredients(ingredientsData);

  const ingredients = ingredientsData.map(i => i.name);

  const apiUrl = "https://suggestrecipe-6jpiyljq3a-uc.a.run.app/suggest";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients })
    });

    const data = await response.json();

    if (!response.ok || !data.parsed) {
      recipeEl.textContent = "レシピ生成に失敗しました";
      recipeCard.style.display = "block";
      loadingEl.style.display = "none";
      return;
    }

    const r = data.recipe;

    recipeEl.innerHTML = `
      <h3>${r.title}</h3>
      <p><strong>調理時間:</strong> ${r.time} <strong>分量:</strong> ${r.servings}</p>
      <h4>材料</h4>
      <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
      <h4>手順</h4>
      <ol>${r.steps.map(s => `<li>${s}</li>`).join("")}</ol>
      <p><strong>コツ:</strong> ${r.tips}</p>
    `;

    recipeCard.style.display = "block";

  } catch (err) {
    recipeEl.textContent = "通信エラーが発生しました";
    recipeCard.style.display = "block";
  }

  loadingEl.style.display = "none";
}

fetchIngredientsWithIds().then(showIngredients);

document.getElementById("getRecipe").addEventListener("click", suggestRecipe);
