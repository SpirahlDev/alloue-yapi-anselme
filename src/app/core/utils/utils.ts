export function generateSlug(str: string): string {
    return str
      .toLowerCase()
      .replace(/\s+/g, '-')        // Remplace les espaces par des tirets
      .replace(/[^\w\-]+/g, '')    // Supprime les caractères non-alphanumériques
      .replace(/\-\-+/g, '-')      // Remplace plusieurs tirets consécutifs par un seul tiret
      .replace(/^-+/, '')          // Supprime les tirets au début
      .replace(/-+$/, '');         // Supprime les tirets à la fin
}