export const sortArrayByName = (array) => 
    array.sort((a, b) => 
        a.name.localeCompare(b.name, `pt-BR`)
    );


export const upperCaseFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();