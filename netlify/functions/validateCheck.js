async function checkHwid(hwid) {
  const response = await fetch(`https://<your-site-name>.netlify.app/.netlify/functions/validateHwid?hwid=${hwid}`);

  if (response.ok) {
    const result = await response.json();
    if (result.message === 'valid') {
      console.log('HWID is valid.');
    } else {
      console.log('Invalid HWID.');
    }
  } else {
    console.error('Error connecting to the API.');
  }
}

// Example usage
checkHwid('12345abcdef');  // Call the function with a valid HWID
