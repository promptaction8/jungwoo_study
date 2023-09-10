const postForm = document.getElementById('post-form');
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');
const postList = document.getElementById('post-list');



postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = postTitleInput.value;
    const content = postContentInput.value;

    if (title.trim() === '' || content.trim() === '') {
        alert('제목과 내용을 모두 입력하세요.');
        return;
    }

    createPost(title, content);

    postTitleInput.value = '';
    postContentInput.value = '';
});



// 게시글 생성 함수
function createPost(title, content) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `<h2>${title}</h2><p>${content}</p>`;

    const editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = '수정';

    editButton.addEventListener('click', () => {
        // 수정 기능 추가 코드
        const h2 = postDiv.querySelector('h2');
        const p = postDiv.querySelector('p');

        // 기존의 제목과 내용 가져오기
        const titleText = h2.textContent;
        const contentText = p.textContent;

        // h2와 p 요소를 감춥니다.
        h2.style.display = 'none';
        p.style.display = 'none';

        // 수정을 위한 input 요소 생성
        const titleInput = document.createElement('input');
        titleInput.type = 'text';
        titleInput.value = titleText;

        const contentInput = document.createElement('textarea');
        contentInput.value = contentText;

        // 수정 내용 저장 버튼 생성
        const saveButton = document.createElement('button');
        saveButton.textContent = '저장';

        // 저장 버튼 클릭 이벤트 핸들러
        saveButton.addEventListener('click', () => {
            // 수정된 제목과 내용 가져오기
            const newTitle = titleInput.value;
            const newContent = contentInput.value;

            // h2와 p 요소 업데이트
            h2.textContent = newTitle;
            p.textContent = newContent;

            // 수정 폼 요소들을 제거하고 다시 보이게 합니다.
            titleInput.remove();
            contentInput.remove();
            saveButton.remove();
            h2.style.display = 'block';
            p.style.display = 'block';
        });

        // 수정 폼 요소를 게시글 안에 추가
        postDiv.appendChild(titleInput);
        postDiv.appendChild(contentInput);
        postDiv.appendChild(saveButton);
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = '삭제';

    deleteButton.addEventListener('click', () => {
        postList.removeChild(postDiv);
    });

    postDiv.appendChild(deleteButton);
    postDiv.appendChild(editButton);
    postList.insertBefore(postDiv, postList.firstChild);
}


