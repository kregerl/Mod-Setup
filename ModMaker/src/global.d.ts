/// <reference types="svelte" />

interface VersionEntry {
    minecraftVersion: string;
    modloaderVersions: Array<string>;
    snapshot?: boolean;
}

declare namespace svelte.JSX {
    interface HTMLProps<T> {
        onclick_outside?: (event: any) => any;
    }
}