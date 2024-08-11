indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
const dataBase = indexedDB.open("algotrace", 1);

//count of questions in each topic
const array_and_hashing = 9;
const two_pointers = 5;
const sliding_window = 6;
const stack = 7;
const binary_search = 7;
const linked_list = 11;
const trees = 15;
const tries = 3;
const priority_queue = 7;
const backtracking = 9;
const graph = 13;
const adv_graph = 6;
const one_dp = 12;
const two_dp = 11;
const greedy = 8;
const intervals = 6;
const math = 8;
const bit = 7;

//database on error
dataBase.onerror = function (event) {
    console.error("error loading database");
    console.error(event);
};


dataBase.onupgradeneeded = function () {
    const db = dataBase.result
    const topics = db.createObjectStore("topics", { keyPath: "id" });
    const questions = db.createObjectStore("questions", { keyPath: "id" });

    
    topics.createIndex("id", "id", { unique: true });
    topics.createIndex("count", "count", { unique: false });

    questions.createIndex("id", "id", { unique: true });
    questions.createIndex("solved", "solved", { unique: false });
    questions.createIndex("name", "name", { unique: true });
}


dataBase.onsuccess = function (event) {
    console.log("database loaded successfully");

    const db = dataBase.result;
    const tx1 = db.transaction("topics", "readwrite");
    const tx2 = db.transaction("questions", "readwrite");


    const topics = tx1.objectStore("topics");
    const questions = tx2.objectStore("questions");


    const topics_id = topics.index("id");
    const topics_count = topics.index("count");

    for (let i = 1; i <= 18; i++) {
        topics.add({ id: i, count: 0 });
    }

    const questions_id = questions.index("id");
    const questions_solved = questions.index("solved");
    const questions_name = questions.index("name");

    //array and hashing
    let qnid = 1;

    for (let i = 1; i <= array_and_hashing; i++) {
        questions.add({ name: "a" + i, solved: false, id: qnid });
        qnid++;
    }
    //two pointers
    for (let i = 1; i <= two_pointers; i++) {
        questions.add({ name: "b" + i, solved: false, id: qnid });
        qnid++;
    }

    //sliding window
    for (let i = 1; i <= sliding_window; i++) {
        questions.add({ name: "c" + i, solved: false, id: qnid });
        qnid++;
    }

    //stack
    for (let i = 1; i <= stack; i++) {
        questions.add({ name: "d" + i, solved: false, id: qnid });
        qnid++;
        qnid++;

    }

    //binary search
    for (let i = 1; i <= binary_search; i++) {
        questions.add({ name: "e" + i, solved: false, id: qnid });
        qnid++;
    }


    //linked list
    for (let i = 1; i <= linked_list; i++) {
        questions.add({ name: "f" + i, solved: false, id: qnid });
        qnid++;
    }


    //trees
    for (let i = 1; i <= trees; i++) {
        questions.add({ name: "g" + i, solved: false, id: qnid });
        qnid++;
    }


    //tries
    for (let i = 1; i <= tries; i++) {
        questions.add({ name: "h" + i, solved: false, id: qnid });
        qnid++;
    }


    //priority queue
    for (let i = 1; i <= priority_queue; i++) {
        questions.add({ name: "i" + i, solved: false, id: qnid });
        qnid++;
    }


    //backtracking
    for (let i = 1; i <= backtracking; i++) {
        questions.add({ name: "j" + i, solved: false, id: qnid });
        qnid++;
    }

    //graph
    for (let i = 1; i <= graph; i++) {
        questions.add({ name: "k" + i, solved: false, id: qnid });
        qnid++;
    }

    //advanced graph
    for (let i = 1; i <= adv_graph; i++) {
        questions.add({ name: "l" + i, solved: false, id: qnid });
        qnid++;
    }


    //one dp
    for (let i = 1; i <= one_dp; i++) {
        questions.add({ name: "m" + i, solved: false, id: qnid });
        qnid++;
    }


    //two dp
    for (let i = 1; i <= two_dp; i++) {
        questions.add({ name: "n" + i, solved: false, id: qnid });
        qnid++;
    }


    //greedy
    for (let i = 1; i <= greedy; i++) {
        questions.add({ name: "o" + i, solved: false, id: qnid });
        qnid++;
    }


    //intervals
    for (let i = 1; i <= intervals; i++) {
        questions.add({ name: "p" + i, solved: false, id: qnid });
        qnid++;
    }


    //math
    for (let i = 1; i <= math; i++) {
        questions.add({ name: "q" + i, solved: false, id: qnid });
        qnid++;
    }


    //bit
    for (let i = 1; i <= bit; i++) {
        questions.add({ name: "r" + i, solved: false, id: qnid });
        qnid++;
    }

}
addEventListener("DOMContentLoaded", () => {
    const localStorageKeys = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
      "k", "l", "m", "n", "o", "p", "q", "r"
    ];
  
    localStorageKeys.forEach(key => {
      const value = JSON.parse(localStorage.getItem(key));
      if (value !== null) {
        const progressBar = document.getElementById(`progress-${key}`);
        if (progressBar) {
          progressBar.style.width = `${value}%`;
          progressBar.innerHTML = `${value}%`;
        }
      }
    });
  });
  