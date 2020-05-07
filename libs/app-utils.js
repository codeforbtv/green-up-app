import { firebaseConfig } from "../firebase-config.js";

/**
 * "util" files become natoriously messy - please help keep our code clean
 * 
 * If you're thinking of adding something here, please make sure it is something that is 
 * relevant anywhere in the app. If it is not, please create a new file and give it a 
 * descriptive name to help keep the directory structure readable and intuitive. 
 */


/** Returns a boolean true if the app is running in the production environment.
 */
export function isProductionEnv(){
    return getEnvString() === 'Prod';
}

/**
 * Returns a string of 'QA', 'Dev', 'Prod', or 'unknown' indicating which environment the
 * app is running under.
 */
export function getEnvString(){
    switch(firebaseConfig.projectId){
        case 'greenupvermont-qa': return 'QA';
        case 'greenupvermont-dev': return 'Dev';
        case 'greenupvermont-de02b': return 'Prod';
        default: return 'unknown';
    }
}