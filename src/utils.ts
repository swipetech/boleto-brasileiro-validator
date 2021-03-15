export function clearMask(codigo: string): string {
    return codigo.replace(/( |\.|-)/g, '');
}
