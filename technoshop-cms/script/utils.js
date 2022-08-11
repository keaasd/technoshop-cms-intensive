export const toBase64 = (file) => {
    // мы обещаем что-то сделать, если нет, то выдадим ошибку
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        // loadend - слушатель когда загрузится файл
        reader.addEventListener('loadend', () => {
            resolve(reader.result)
        });
        reader.addEventListener('error', (err) => {
            reject(err);

        reader.readAsDataURL(file);
        });
    })
}