import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";




const firebaseConfig = {
  apiKey: "AIzaSyBBmruN7YtMIdMiLjPLiJKu-9qFKis2aAo",
  authDomain: "homepage-54937.firebaseapp.com",
  projectId: "homepage-54937",
  storageBucket: "homepage-54937.firebasestorage.app",
  messagingSenderId: "225362177833",
  appId: "1:225362177833:web:8b4f8da23231997ff75138",
  measurementId: "G-7F86C9SCZ3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const nameInput = document.getElementById("inputName");
const stockInput = document.getElementById("inputStock");
const dateInput = document.getElementById("inputDate");
const addButton = document.getElementById("addButton");
const table = document.getElementById("dataTable");


import { Timestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

addButton.addEventListener("click", async () => {
  const name = nameInput.value;
  const stock = stockInput.value;
  const dateStr = dateInput.value;

  if (!name || !stock || !dateStr) {
    alert("すべて入力してください");
    return;
  }


  const date = new Date(dateStr);

  try {
    await addDoc(collection(db, "foods"), {
      name,
      stock,
      date: Timestamp.fromDate(date)
    });
    console.log("保存成功！");
  } catch (e) {
    console.error("🔥 Firestore保存エラー:", e);
  }


  nameInput.value = "";
  stockInput.value = "";
  dateInput.value = "";
});



onSnapshot(collection(db, "foods"), (snapshot) => {
  while (table.rows.length > 1) table.deleteRow(1);
  snapshot.forEach(doc => {
    const data = doc.data();
    const row = table.insertRow(-1);
    row.insertCell(0).textContent = data.name;
    row.insertCell(1).textContent = data.stock;

    let displayDate = "";
    if (data.date) {

      displayDate = typeof data.date.toDate === "function"
        ? data.date.toDate().toLocaleString()
        : data.date;
    }
    row.insertCell(2).textContent = displayDate;
  });
});





import { getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

getDocs(collection(db, "foods")).then(snapshot => {
  snapshot.forEach(doc => {
    console.log("取得成功:", doc.data());
  });
}).catch(err => {
  console.error("取得失敗:", err);
});

import { doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


onSnapshot(collection(db, "foods"), (snapshot) => {
  while (table.rows.length > 1) table.deleteRow(1);

  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const row = table.insertRow(-1);

    const checkboxCell = row.insertCell(0);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.docId = docSnap.id;
    checkboxCell.appendChild(checkbox);

    row.insertCell(1).textContent = data.name;
    row.insertCell(2).textContent = data.stock;

    let displayDate = "";
    if (data.date) {
      displayDate = typeof data.date.toDate === "function"
        ? data.date.toDate().toLocaleDateString()
        : data.date;
    }
    row.insertCell(3).textContent = displayDate;
  });
});

deleteSelectedButton.addEventListener("click", async () => {
  const checkboxes = table.querySelectorAll("input[type='checkbox']:checked");
  if (checkboxes.length === 0) {
    alert("削除する項目を選んでください");
    return;
  }

  if (!confirm(`本当に${checkboxes.length}件削除しますか？`)) return;

  try {
    const deletePromises = [];
    checkboxes.forEach(cb => {
      const docId = cb.dataset.docId;
      if (docId) {
        const ref = doc(db, "foods", docId);
        deletePromises.push(deleteDoc(ref));
      }
    });

    await Promise.all(deletePromises);
    console.log("削除完了");
  } catch (err) {
    console.error("🔥 削除エラー:", err);
  }
});

document.getElementById("goToRecipe").addEventListener("click", () => {
    window.location.href = "recipe.html";
  });

