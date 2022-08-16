import {fetch} from '@tauri-apps/api/http';
const FORGE_MAIFEST_URL: string = "https://files.minecraftforge.net/net/minecraftforge/forge/maven-metadata.json";
const FABRIC_MANIFEST_URL: string = "https://meta.fabricmc.net/v2/versions";

export const requestForgeManifest = async() => {
    const {data} = await fetch(FORGE_MAIFEST_URL, {
        method: "GET",
        timeout: 30,
    });
    let results: Array<VersionEntry> = [];
    let entries = Object.entries(data);
    entries.forEach((entry) => {
        results.push({minecraftVersion: entry[0], modloaderVersions: entry[1]})
    })
    return results;
}

export const requestFabricManifest = async() => {
    const {data} = await fetch(FABRIC_MANIFEST_URL, {
        method: "GET",
        timeout: 30,
    });
    let results: Array<VersionEntry> = [];
    let entries = data["game"];
    // TODO: Change this from "game"? installer or loader might be better.
    entries.forEach(entry => {
        results.push({minecraftVersion: "empty", modloaderVersions: ["empty"]});
    })
    return results;
}