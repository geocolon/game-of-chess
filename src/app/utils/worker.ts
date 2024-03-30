onmessage = (e) => {
    console.log('Hello world from worker', e);
    postMessage('Hi from worker');
}
