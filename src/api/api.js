import { createApi } from 'unsplash-js';

const api = createApi({
    accessKey: 'Fi9wrGEx7YJuI8rqXaj46vXJvzmJgwUGZ1drl6rE9eQ',
});

const searchPhotos = async (searchValue) => {
    try {
        const images = await api.search.getPhotos({
            query: searchValue,
            page: 1,
            perPage: 28,
        });
        return images;

    } catch (error) {
        console.error('Error al buscar imágenes:', error);
        return { error: 'No se pudieron obtener las imágenes.' };
    }
};
export default searchPhotos;