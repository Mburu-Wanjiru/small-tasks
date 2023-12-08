document.addEventListener('DOMContentLoaded', () => {
    loadFiles();
  });
  
  function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const fileList = fileInput.files;
  
    if (fileList.length > 0) {
      const file = fileList[0];
      const formData = new FormData();
      formData.append('file', file);
  
      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.text())
      .then(() => {
        loadFiles();
      });
    }
  }
  
  function loadFiles() {
    const fileList = document.getElementById('fileList');
  
    fetch('/files')
      .then(response => response.json())
      .then(data => {
        fileList.innerHTML = '';
        data.files.forEach(filename => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            ${filename}
            <button class="delete-btn" onclick="deleteFile('${filename}')">Delete</button>
          `;
          fileList.appendChild(listItem);
        });
      });
  }
  
  function deleteFile(filename) {
    fetch(`/delete/${filename}`, {
      method: 'DELETE',
    })
    .then(response => response.text())
    .then(() => {
      loadFiles();
    });
  }
  