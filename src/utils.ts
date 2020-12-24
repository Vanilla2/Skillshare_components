const cacheImages = async (src: string[]) => {
    const promises = src.map(x => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = x;
            img.onload = resolve;
            img.onerror = reject;
        })
    })
    await Promise.all(promises);
}

export {cacheImages}