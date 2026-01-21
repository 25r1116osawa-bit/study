// TodoApp (modern state-driven)
const TodoApp = (() => {
  // =========================
  // state（唯一の正）
  // =========================
  let state = {
    incomplete: [],
    complete: [],
  };

  // =========================
  // DOM cache
  // =========================
  const dom = {
    input: document.getElementById("add-text"),
    addButton: document.getElementById("add-button"),
    incompleteList: document.getElementById("incompleate-list"),
    completeList: document.getElementById("complete-list"),
  };

  // =========================
  // actions（イベント → データ）
  // 引数の部分の値が更新される。
  // =========================
  const actions = {
    add: (text) => ({ type: "add", text }),
    complete: (index) => ({ type: "complete", index }),
    back: (index) => ({ type: "back", index }),
    remove: (index) => ({ type: "remove", index }),
  };

  // =========================
  // reducer（state生成だけ）
  // =========================
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        if (!action.text.trim()) return state;
        return {
          ...state,
          incomplete: [...state.incomplete, action.text],
        };

      case "complete": {
        const todo = state.incomplete[action.index];
        return {
          incomplete: state.incomplete.filter((_, i) => i !== action.index),
          complete: [...state.complete, todo],
        };
      }

      case "back": {
        const todo = state.complete[action.index];
        return {
          incomplete: [...state.incomplete, todo],
          complete: state.complete.filter((_, i) => i !== action.index),
        };
      }

      case "remove":
        return {
          ...state,
          incomplete: state.incomplete.filter((_, i) => i !== action.index),
        };

      default:
        return state;
    }
  };

  // =========================
  // dispatch（唯一の更新口）
  // =========================
  const dispatch = (action) => {
    state = reducer(state, action);
    render();
  };

  // =========================
  // render
  // =========================
  const renderIncomplete = () => {
    dom.incompleteList.innerHTML = "";

    state.incomplete.forEach((todo, index) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      div.className = "list-row";

      const p = document.createElement("p");
      p.className = "todo-item";
      p.textContent = todo;

      const completeBtn = document.createElement("button");
      completeBtn.textContent = "完了";
      completeBtn.onclick = () => dispatch(actions.complete(index));

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "削除";
      deleteBtn.onclick = () => dispatch(actions.remove(index));

      div.append(p, completeBtn, deleteBtn);
      li.appendChild(div);
      dom.incompleteList.appendChild(li);
    });
  };

  const renderComplete = () => {
    dom.completeList.innerHTML = "";

    state.complete.forEach((todo, index) => {
      const li = document.createElement("li");
      const div = document.createElement("div");
      div.className = "list-row";

      const p = document.createElement("p");
      p.className = "todo-item";
      p.textContent = todo;

      const backBtn = document.createElement("button");
      backBtn.textContent = "戻す";
      backBtn.onclick = () => dispatch(actions.back(index));

      div.append(p, backBtn);
      li.appendChild(div);
      dom.completeList.appendChild(li);
    });
  };

  const render = () => {
    renderIncomplete();
    renderComplete();
  };

  // =========================
  // init
  // =========================
  const init = () => {
    dom.addButton.addEventListener("click", () => {
      dispatch(actions.add(dom.input.value));
      dom.input.value = "";
    });
    render();
  };

  init();
  return {};
})();

/*
localStorage 永続化
edit 機能
Immer 版 reducer
React useReducer 変換
*/
