import { type AuthResponse } from '../types/auth';
import { getDefaultImage } from '../../../shared/utils/getDefaultImage';
import { localStorageAPI } from '../../../shared/api/store/services/localStorageApi';
import { storage } from '../../../shared/api/firebase/firebaseAPI';
import { type User } from '../../User/types/user';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export const onRegisterSuccess = async ({
    res,
    email,
    sex,
    image,
    createUser,
    handleNavigate
}: {
    res: AuthResponse,
    email: string,
    sex: 'male' | 'female',
    image?: File,
    createUser: (arg: User) => void,
    handleNavigate: () => void
}) => {
    localStorageAPI.setTokens(res);
    const userData: User = {
        _id: res.data.localId,
        email,
        favorites: {},
        sex,
        searchHistory: {}
    };
    let currentImage;
    if (image) {
        const fileName = image;
        const date = Date.now().toString();
        const uploadFileFullName = fileName + '_' + date + '_newUser';
        const imageRef = ref(storage, `images/${uploadFileFullName}`);
        await uploadBytes(imageRef, image);
        currentImage = await getDownloadURL(imageRef);
    }
    userData.image = currentImage || getDefaultImage();
    createUser(userData);
    handleNavigate();
};
