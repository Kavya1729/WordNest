const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteApiKey: String(import.meta.env.VITE_APPWRITE_API_KEY),

}

// console.log("Appwrite URL:", conf.appwriteUrl);
// console.log("Appwrite Project ID:", conf.appwriteProjectId);
// console.log("Appwrite Database ID:", conf.appwriteDatabaseId);
// console.log("Appwrite Collection ID:", conf.appwriteCollectionId);
console.log("Appwrite API Key :", conf.appwriteApiKey);
export default conf