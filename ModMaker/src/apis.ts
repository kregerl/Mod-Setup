import {fetch} from '@tauri-apps/api/http';
const FORGE_MAIFEST_URL: string = "https://files.minecraftforge.net/net/minecraftforge/forge/maven-metadata.json";
const FABRIC_MANIFEST_URL: string = "https://meta.fabricmc.net/v2/versions";

const LOADED_MANIFESTS = [];

export interface VersionEntry {
    minecraftVersion: string;
    modloaderVersions: Array<string>;
}

const requestForgeManifest = async() => {
    const {data} = await fetch(FORGE_MAIFEST_URL, {
        method: "GET",
        timeout: 30,
    });
    let results: Array<VersionEntry> = [];
    let entries = Object.entries(data);
    entries.forEach((entry) => {
        results.push({minecraftVersion: entry[0], modloaderVersions: entry[1]})
    })
    console.log(results);
    return results;
}

const requestFabricManifest = async() => {
    const {data} = await fetch(FABRIC_MANIFEST_URL, {
        method: "GET",
        timeout: 30,
    });
    console.log(data);
    return data;
}

const MANIFESTS: Array<Function> = [requestForgeManifest, requestFabricManifest];

export function getVersions(id: number): Array<VersionEntry> {
    if (LOADED_MANIFESTS[id] === undefined) {
        LOADED_MANIFESTS[id] = MANIFESTS[id]();
    }
    console.log("Manifest", LOADED_MANIFESTS[id]);
    return LOADED_MANIFESTS[id];
}

//TODO: Send requests to api to gather versions and return them in the same format.