// DOM 요소 가져오기
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');
const doneList = document.getElementById('done-list');

// "Enter" 키 입력으로 해야 할 일 추가
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && taskInput.value.trim() !== '') {
        addTask(taskInput.value);
        taskInput.value = ''; // 입력창 비우기
    }
});

// 해야 할 일 추가 함수
function addTask(task) {
    const li = document.createElement('li');
    li.innerHTML = `
    ${task}
    <div>
      <button class="complete">완료</button>
      <button class="delete">삭제</button>
    </div>
  `;

    // 완료 버튼 클릭 이벤트
    li.querySelector('.complete').addEventListener('click', () => {
        moveToDone(li);
    });

    // 삭제 버튼 클릭 이벤트
    li.querySelector('.delete').addEventListener('click', () => {
        li.remove();
    });

    todoList.appendChild(li);
}

// 해야 할 일을 해낸 일로 이동시키는 함수
function moveToDone(taskItem) {
    const completeButton = taskItem.querySelector('.complete');
    completeButton.remove(); // 완료 버튼 제거
    doneList.appendChild(taskItem);
}
