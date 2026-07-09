import axios from "axios";
import { Repository } from "../interfaces/Repository";
import { RepositoryPayLoad } from "../interfaces/RepositoryPayload";
import { GithubUser } from "../interfaces/GithubUser";

const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL || "https://api.github.com";
const GITHUB_API_TOKEN = import.meta.env.VITE_GITHUB_API_TOKEN;

export const fetchRepositories = async (): Promise<Repository[]> => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/user/repos`, {
            headers: {
                Authorization: `Bearer ${GITHUB_API_TOKEN}`,
            },
            params: {
                per_page: 100, // Fetch up to 100 repositories
                sort: "created",
                direction: "desc",
                affiliation: "owner", // Fetch repositories the user owns or collaborates on
                T:Date.now() // Cache-busting parameter to avoid cached responses
            }
        });
        return response.data as Repository[];
    } catch (error) {
        console.error("Error fetching repositories:", error);
        return [];
    }
};

export const createRepository = async (repository: RepositoryPayLoad): Promise<Repository | null> => {
    try{
        const response = await axios.post(`${GITHUB_API_URL}/user/repos`, repository, {
            headers: {
                Authorization: `Bearer ${GITHUB_API_TOKEN}`,
            }
        });
        return response.data as Repository;
    } catch (error) {
        console.error("Error creating repository:", error);
        return null;
    }
};

export const getUserInfo = async (): Promise<GithubUser | null> => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/user`, {
            headers: {
                Authorization: `Bearer ${GITHUB_API_TOKEN}`,
            }
        });
        return response.data as GithubUser;
    } catch (error) {
        console.error("Error obteniendo info del usuario", error);
        return null;
    }
}