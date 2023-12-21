import { Client, Databases, Query } from "appwrite";
import conf from "../conf/conf";

class DatabaseService {

    constructor() {
        this.client = new Client();
        this.databases = new Databases(this.client);
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
    }

    // Fetch About Function
    async getAbout() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteAboutCollectionId,
            );
            return response.documents;
        } catch (error) {
            console.error("Error fetching about :", error);
            throw error;
        }
    }


    // Fetch Socials Function
    async getSocials() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteSocialsCollectionId,
            );
            return response.documents;
        } catch (error) {
            console.error("Error fetching socials :", error);
            throw error;
        }
    }


    // Fetch Skills Functions

    async getFrontendSkills() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteSkillsCollectionId,

                [
                    Query.equal('category', 'frontend')
                ]
            );
            return response.documents;
        } catch (error) {
            console.error("Error fetching Frontend skills :", error);
            throw error;
        }
    }
    async getBackendSkills() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteSkillsCollectionId,

                [
                    Query.equal('category', 'backend')
                ]
            );
            return response.documents;
        } catch (error) {
            console.error("Error fetching backend skills :", error);
            throw error;
        }
    }
    async getOtherSkills() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteSkillsCollectionId,

                [
                    Query.equal('category', 'other')
                ]
            );
            return response.documents;
        } catch (error) {
            console.error("Error fetching other skills :", error);
            throw error;
        }
    }


    // Fetch Articles Function
    async getArticles() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteArticlesCollectionId,
            );
            return response.documents;
        } catch (error) {
            console.error("Error articles other skills :", error);
            throw error;
        }
    }


    // Fetch AllProjects Function
    async getAllProjects() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProjectsCollectionId,
            );
            return response.documents;
        } catch (error) {
            console.error("Error articles all projects :", error);
            throw error;
        }
    }







    // Fetch Basic Projects Function
    async getBasicProjects() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProjectsCollectionId,

                [
                    Query.equal('projectcategory', 'basic')
                ]
            );
            return response.documents;
        } catch (error) {
            console.error("Error articles basic projects :", error);
            throw error;
        }
    }

    // Fetch fullstack Projects Function
    async getFullStackProjects() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProjectsCollectionId,
                [
                    Query.equal('projectcategory', 'fullstack')
                ]
            );
            return response.documents;
        } catch (error) {
            console.error("Error articles fullstack projects :", error);
            throw error;
        }
    }

    // Fetch React Projects Function
    async getReactProjects() {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteProjectsCollectionId,

                [
                    Query.equal('projectcategory', 'react')
                ]
            );
            return response.documents;
        } catch (error) {
            console.error("Error articles react projects :", error);
            throw error;
        }
    }
}

const databaseService = new DatabaseService();
export default databaseService;



