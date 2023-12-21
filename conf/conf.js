const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.env.NEXT_PUBLIC_APPWRITE_DATABASEID
    ),
    appwriteAboutCollectionId: String(
        process.env.NEXT_PUBLIC_ABOUT_COLLECTIONID
    ),
    appwriteProjectsCollectionId: String(
        process.env.NEXT_PUBLIC_PROJECTS_COLLECTIONID
    ),

    appwriteSkillsCollectionId: String(
        process.env.NEXT_PUBLIC_SKILLS_COLLECTIONID
    ),

    appwriteSocialsCollectionId: String(
        process.env.NEXT_PUBLIC_SOCIALS_COLLECTIONID
    ),
    appwriteArticlesCollectionId: String(
        process.env.NEXT_PUBLIC_ARTICLES_COLLECTIONID
    ),

};

export default conf;
