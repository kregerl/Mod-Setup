#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

const FORGE_MANIFEST_URL: &str = "https://files.minecraftforge.net/net/minecraftforge/forge/maven-metadata.json";
const FABRIC_MANIFEST_URL: &str = "https://meta.fabricmc.net/v2/versions";

fn main() {
  tauri::Builder::default()
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
async fn get_forge_manifest() -> String {
//  let response = reqwest::get(FORGE_MANIFEST_URL);
//  let body = response.await; 
  String::from("")
}