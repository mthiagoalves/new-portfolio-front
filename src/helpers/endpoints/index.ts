import { auth } from "./auth";
import { user } from "./user";
import { project } from "./project";
import { technology } from "./technology";

export const endpoint ={
    baseUrl: "new-portfolio-production-1ff9.up.railway.app",
    ...auth,
    ...user,
    ...project,
    ...technology
}