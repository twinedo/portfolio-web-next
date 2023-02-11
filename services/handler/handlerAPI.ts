import { child, get, onValue, push, ref } from 'firebase/database';
import { getDownloadURL, listAll, ref as storageReff } from 'firebase/storage';
import app, { auth, signIn, database, storage } from '../firebase';

export const LoginHandler = (data: { username: string; password: string }) => {
	return new Promise((resolve, reject) => {
		signIn
			.signInWithEmailAndPassword(
				auth.getAuth(app),
				data.username,
				data.password
			)
			.then((userCredential) => {
				var user = userCredential;
				resolve(user.user);
			})
			.catch((err) => {
				alert(JSON.stringify(err));
				reject(err);
			});
	});
};

export const addDataToAPI = (data: any) => {
	const db = database.getDatabase(app);
	push(ref(db, data.platform === 'mobile' ? 'mobile/' : 'website/'), data);
	// ref(database.getDatabase(), data.platform === 'mobile' ? 'mobile/' : 'website/').push(data);
};

export const getDataFromAPI = (platform: string) => {
	const db = database.getDatabase(app);
	return new Promise((resolve, reject) => {
		onValue(ref(db, platform + '/'), (snapshot) => {
			const data = snapshot.val();
			const newArr: any = [];
			Object.keys(data).map((key) => {
				return newArr.push({
					key,
					bucket: snapshot.val()[key].bucket,
					tag: snapshot.val()[key].tag,
					description: snapshot.val()[key].description,
					display: snapshot.val()[key].display,
					id: snapshot.val()[key].id,
					name: snapshot.val()[key].name,
					platform: snapshot.val()[key].platform,
					year: snapshot.val()[key].year,
					link_appstore: snapshot.val()[key].link_appstore,
					link_playstore: snapshot.val()[key].link_playstore,
					link_website: snapshot.val()[key].link_website,
				});
			});

			resolve(newArr);
		});
	});
};

export const getDetailProjectbyKey = async (
	platform: 'mobile' | 'website' | string,
	key: string
) => {
	const dbRef = ref(database.getDatabase());
	return new Promise((resolve, reject) => {
		get(child(dbRef, `${platform}/${key}`))
			.then((snapshot) => {
				if (snapshot.exists()) {
					resolve(snapshot.val());
				} else {
					reject('No data available');
				}
			})
			.catch((error) => {
				console.error(error);
				reject(JSON.stringify(error));
			});
	});
};

export const getImages = async (platform: string, bucket: string) => {
	const storages = storage.getStorage(app);
	const listRef = storageReff(storages, `${platform}/${bucket}`);
	listAll(listRef);
	// let result = await storage.ref().child(`${platform}/${bucket}`).listAll();
	let result = await listAll(listRef);
	let urlResult = result.items.map((imageRef) => getDownloadURL(imageRef));
	return Promise.all(urlResult);
};

export const downloadHandler = async () => {
	const storages = storage.getStorage(app);
	const storageRef = storageReff(storages, '/doc/TWIN EDO NUGRAHA.pdf');

	try {
		let result = await getDownloadURL(storageRef);
		return Promise.resolve(result);
	} catch (error: any) {
		switch (error.code) {
			case 'storage/object-not-found':
				// File doesn't exist
				return Promise.reject('File doesn`t exist');

			case 'storage/unauthorized':
				// User doesn't have permission to access the object

				return Promise.reject(
					'User doesn`t have permission to access the object'
				);
			case 'storage/canceled':
				// User canceled the upload

				return Promise.reject('User canceled the upload');

			// ...

			case 'storage/unknown':
				// Unknown error occurred, inspect the server response
				return Promise.reject(
					'User canceled the uploadUnknown error occurred, inspect the server response'
				);
		}
	}
};
