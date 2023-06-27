const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default prompt behavior
  event.preventDefault();
  // Store the event for later use
  const deferredPrompt = event;
  // Show the installation button
  butInstall.style.display = 'block';

  // TODO: Implement a click event handler on the `butInstall` element
  butInstall.addEventListener('click', async () => {
    // Show the installation prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;

    // Check the result of the prompt
    if (result.outcome === 'accepted') {
      console.log('PWA installation accepted by the user');
    } else {
      console.log('PWA installation rejected by the user');
    }

    // Clean up the installation button
    butInstall.style.display = 'none';
    // Reset the deferred prompt
    deferredPrompt = null;
  });
});

// TODO: Add an event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed');
});
