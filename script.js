document.getElementById('addIcon').addEventListener('click', () => {
  document.getElementById('menu').style.display = 'block';
});

document.getElementById('addAppBtn').addEventListener('click', () => {
  document.getElementById('addAppWindow').classList.add('show');
  document.getElementById('addAppWindow').classList.remove('hide');
  document.getElementById('menu').style.display = 'none';
  loadApplications();
});

document.getElementById('closeAddAppWindow').addEventListener('click', () => {
  document.getElementById('addAppWindow').classList.remove('show');
  document.getElementById('addAppWindow').classList.add('hide');
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  let searchText = e.target.value.toLowerCase();
  let appItems = document.querySelectorAll('.app-item');
  appItems.forEach(item => {
    let appName = item.textContent.toLowerCase();
    if (appName.includes(searchText)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

document.getElementById('addApp').addEventListener('click', () => {
  let selectedApp = document.querySelector('.app-item.selected');
  if (selectedApp) {
    let appName = selectedApp.textContent;
    let newApp = document.createElement('div');
    newApp.classList.add('desktop-item');
    newApp.textContent = appName;
    newApp.addEventListener('click', () => {
      window.open(selectedApp.getAttribute('data-url'), '_blank');
    });
    document.getElementById('desktop').appendChild(newApp);
    document.getElementById('addAppWindow').classList.remove('show');
    document.getElementById('addAppWindow').classList.add('hide');
  }
});

document.getElementById('cancelApp').addEventListener('click', () => {
  document.getElementById('addAppWindow').classList.remove('show');
  document.getElementById('addAppWindow').classList.add('hide');
});

document.getElementById('addFolderBtn').addEventListener('click', () => {
  let folder = document.createElement('div');
  folder.classList.add('folder');
  folder.textContent = 'New Folder';
  folder.contentEditable = true;
  folder.addEventListener('click', () => {
    folder.classList.toggle('open');
  });
  document.getElementById('desktop').appendChild(folder);
});

// Load applications dynamically
function loadApplications() {
  const appList = document.getElementById('appList');
  appList.innerHTML = ''; // Clear the list before loading new apps

  // Sample application data (replace with actual folder read logic)
  const apps = [
    { name: 'App 1', icon: 'asc-og-removebg-preview.jpg', url: 'app1.html' },
    { name: 'App 2', icon: 'app2.png', url: 'app2.html' },
    { name: 'App 3', icon: 'app3.png', url: 'app3.html' },
  ];

  apps.forEach(app => {
    let appItem = document.createElement('div');
    appItem.classList.add('app-item');
    appItem.setAttribute('data-url', app.url);
    appItem.innerHTML = `<img src="apps/${app.icon}" alt="${app.name}" class="app-icon"> ${app.name}`;
    appItem.addEventListener('click', () => {
      appItem.classList.toggle('selected');
    });
    appList.appendChild(appItem);
  });
}